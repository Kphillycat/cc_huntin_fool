import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { cardMock } from './factories/card'
import Index from '@/pages/index'
import CardList from '@/components/CardList'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Index', () => {
  const getters = {
    filteredCards: [{ card1: cardMock(), card2: cardMock() }],
    cards: [
      { card1: cardMock(), card2: cardMock() },
      { card1: cardMock(), card2: cardMock() },
      { card1: cardMock(), card2: cardMock() }
    ]
  }

  test('is a Vue instance', () => {
    const wrapper = shallowMount(Index, { mocks: { $store: { getters } } })
    expect(wrapper.find('.error-text').isVisible()).toBe(false)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

describe('Index - Success', () => {
  const getters = {
    filteredCards: [{ card1: cardMock(), card2: cardMock() }],
    cards: [
      { card1: cardMock(), card2: cardMock() },
      { card1: cardMock(), card2: cardMock() },
      { card1: cardMock(), card2: cardMock() }
    ]
  }

  test('shows card list', async () => {
    const wrapper = shallowMount(Index, { mocks: { $store: { getters } } })
    wrapper.setData({ formSubmitted: true })
    await wrapper.vm.$nextTick()
    expect(wrapper.find(CardList).isVisible()).toBe(true)
  })
})

describe('Index - Error', () => {
  const getters = {
    filteredCards: [],
    cards: [
      { card1: cardMock(), card2: cardMock() },
      { card1: cardMock(), card2: cardMock() },
      { card1: cardMock(), card2: cardMock() }
    ]
  }

  test('should show error text for empty cards', async () => {
    const wrapper = shallowMount(Index, { mocks: { $store: { getters } } })
    wrapper.setData({ formSubmitted: true })
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.error-text').isVisible()).toBe(true)
  })
})
