import { shallowMount } from '@vue/test-utils'
import { cardMock } from './factories/card'
import Card from '@/components/Card'

describe('Card', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Card, { propsData: { card: cardMock() } })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
