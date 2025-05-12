<script setup lang="ts">
import { computed, watchEffect, ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faArrowTrendUp, faArrowTrendDown} from '@fortawesome/free-solid-svg-icons'
import type { Data, Metric } from './MyTable';

const props = defineProps({
  data: {
    type: String,
    required: true,
    default: '[]'
  },
  captation: {
    type: String,
    default: ''
  },
  upColor: {
    type: String,
    default: '#ecf1b6'
  },
  downColor: {
    type: String,
    default: '#f7cfcc'
  }
})
const parsedData = computed(() => {
  try {
    return JSON.parse(props.data)
  } catch (e) {
    console.error('Error parsing data:', e)
    return []
  }
})
const dimensions = ref([] as string[])
const metrics = ref([] as Metric[][])
watchEffect(() => {
  if (parsedData.value.length === 2) {
    dimensions.value = [
      Object.values(parsedData.value[0].dimension).join(' - '),
      Object.values(parsedData.value[1].dimension).join(' - ')
    ]
    metrics.value = [
      parsedData.value[0].metrics,
      parsedData.value[1].metrics
    ]
  }
  else {
    dimensions.value = []
    metrics.value = []
  }
})
const isValid = computed(() => {
  return parsedData.value.length === 2  // must have 2 dimensions
          && typeof parsedData.value[0].dimension == 'object'
          && typeof parsedData.value[1].dimension == 'object'  // must have 2 dimensions
          && parsedData.value[0].metrics.length > 0
          && parsedData.value[1].metrics.length > 0 // each dimension must have metrics
})

const isTrendPositive =(trend?: string) => {
  if (!trend) return false
  const stripped = trend.replace(/[^0-9]/g, '')
  const isNegative = trend.includes('-')
  return Number.parseFloat(stripped) > 0 && !isNegative
}

</script>

<template>
<table v-if="isValid">
  <caption v-if="captation" class="visually-hidden">{{ captation }}</caption>
  <thead>
    <tr>
      <th />
      <template v-for="(dimension, index) in dimensions" :key="index">
        <th :id="dimension" scope="col">{{ dimension }}</th>
      </template>
    </tr>
  </thead>
  <tbody>
    <template v-for="(row, i) in metrics" :key="`metric-${i}`">
        <tr>
            <th scope="row">{{ row[i].title }}</th>
            <template v-for="(dim, index) in dimensions" :key="`dimension-${index}`">
              <td :style="{ 'background-color': isTrendPositive(row[index].trend) ? upColor : downColor }" class="metric-cell">
                <span class="metric-value">{{ row[index].value }}</span>
                <template v-if="!!row[index].trend">
                  <span :data-message="`Trend: ${row[index].trend}`" class="trend">{{ row[index].trend }}</span>
                  <FontAwesomeIcon aria-hidden="true" class="fa-fw trend-icon" :icon="isTrendPositive(row[index].trend) ? faArrowTrendUp : faArrowTrendDown" />
                </template>
              </td>
            </template>
        </tr>
    </template>
  </tbody>
</table>
<div v-else>
  <h1>Invalid data format</h1>
  <p>Expected data format:
    <br />
    <code>data = [{ dimension: { ... }, metrics: [ ... ] }, { dimension: { ... }, metrics: [ ... ] }] </code></p>
    <br />
  <p>Example:
    <br />
    <code>data = [{ dimension: { name: 'Dimension 1' }, metrics: [ { title: 'Metric 1', value: 10, trend: 1 }, { title: 'Metric 2', value: 20, trend: -1 } ] }, { dimension: { name: 'Dimension 2' }, metrics: [ { title: 'Metric 1', value: 30, trend: 1 }, { title: 'Metric 2', value: 40, trend: -1 } ] }] </code></p>
  <p>Received: {{ data }}</p>
</div>
</template>

<style scoped>
.visually-hidden {
  display: none;
}
th {
  padding: 0 1rem;
}
.metric-cell {
  text-align: center;
}
.trend {
  display: inline-block;
  margin-left: 0.5rem;
  width: 2rem;
}
.trend-icon {
  display: inline-block;
  width: 1rem;
  margin-left: 0.5rem;
}
@media (max-width: 600px) {
  .trend-icon {
    display: none;
  }
}
@media (max-width: 400px) {
  .trend-icon {
    display: none;
  }
  .trend {
    display: none;
  }
}
</style>
