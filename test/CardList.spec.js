import { shallowMount } from '@vue/test-utils'
import { cardMock } from './factories/card'
import CardList from '@/components/CardList'

describe('CardList', () => {
  const cards = [
    {
      card1: cardMock(),
      card2: cardMock({ star_rating: 4 })
    }
  ]
  test('is a Vue instance', () => {
    const wrapper = shallowMount(CardList, { propsData: { cards } })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
