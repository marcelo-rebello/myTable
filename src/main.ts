import MyTable from './MyTable.ce.vue'
import { defineCustomElement } from 'vue'

const myTable = defineCustomElement(MyTable)

// register
customElements.define('my-table', myTable)

declare module 'vue' {
  interface GlobalComponents {
    'my-table': typeof MyTable
  }
}
