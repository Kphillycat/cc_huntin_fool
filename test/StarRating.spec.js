import { shallowMount } from '@vue/test-utils'
import StarRating from '@/components/StarRating'

describe('StarRating', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(StarRating, { propsData: { rating: 2.5 } })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
