import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import MyTable from '../../MyTable.ce.vue'
import { mock } from '../../mock.ts'
import type { Data } from '../../MyTable.d.ts'

describe('Table', () => {
  const data = mock;
  it('renders properly', () => {
    const wrapper = mount(MyTable, { props: { data: JSON.stringify(data) } })
    expect(wrapper.text()).toContain('Bounce Rate')
    expect(wrapper.text()).toContain('Visits')
    expect(wrapper.text()).toContain('Mobile')
    expect(wrapper.text()).toContain('Desktop')
    expect(wrapper.text()).toContain('12345')
    expect(wrapper.text()).toContain('+15%')
  })
  it('error message if no data is provided', () => {
    const wrapper = mount(MyTable)
    expect(wrapper.text()).toContain('Invalid data format')
  })
  it('error message in data is in a invalid format', () => {
    const wrapper = mount(MyTable, { props: { data: `[{ format: 'invalid' }]` } })
    expect(wrapper.text()).toContain('Invalid data format')
  })
})
