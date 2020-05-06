import { mount } from '@vue/test-utils'
import CCForm from '@/components/CCForm.vue'

describe('CCForm', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(CCForm)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
