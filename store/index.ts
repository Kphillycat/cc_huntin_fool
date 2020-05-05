import { getAccessorType } from 'typed-vuex'

import { GetterTree, ActionTree, MutationTree } from 'vuex'

const ccData = require('../static/data/fool_cc_compare.json')

export type ISSUER = {
  attribution_parameter: string
  advertiser_id: number
  name: string
  possessive_name: string
  show_fee_link: boolean
}

export type CARD_DETAIL = {
  affiliate_link: string
  affiliate_link_deactivate: boolean
  annual_fee: string
  aprs_rating: number
  balance_transfer_fee: string
  bonus: string
  bottom_line: string
  cash_advance_apr: string
  cash_advance_fee: string
  credit_rating: string
  fees_rating: number
  issuer: ISSUER
  intro_purchase_apr: string
  intro_transfer_apr: string
  foreign_transaction_fee: string
  foreign_transaction_fee_description: string
  late_payment_fee: string
  marketing_bullets: string
  offer_image: string
  offer_name: string
  primary_card_type: string
  recommended: boolean
  redirect_url: string
  regular_apr: string
  rewards_program: string
  review_url: string
  secondary_card_type: string
  slug: string
  star_rating: number
  terms_and_conditions_link: string
  what_we_like: string
  hide_card: boolean
  tracking_pixel: string
}

export type CARD = {
  updated_date: string
  card_type: string
  credit_rating: string
  intro_text: string
  cta_text: string
  card1: CARD_DETAIL
  card2: CARD_DETAIL
  error_text: string
  maintenance_text: string
}

export const state = () => ({
  cards: [] as Array<CARD>,
  cardType: '',
  creditRating: ''
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  cards: (state) => state.cards,
  filteredCards: (state) => {
    return state.cards.filter(
      (card) =>
        card.card_type === state.cardType &&
        card.credit_rating === state.creditRating
    )
  }
}

export const mutations: MutationTree<RootState> = {
  SET_CARDS: (state, cards) => (state.cards = cards),
  SET_CREDIT_RATING: (state, creditRating) =>
    (state.creditRating = creditRating),
  SET_CARD_TYPE: (state, cardType) => (state.cardType = cardType)
}

export const actions: ActionTree<RootState, RootState> = {
  nuxtServerInit({ commit }) {
    commit('SET_CARDS', ccData)
  }
}

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions
})

// Vue.use(Vuex)

// @Module({
//   name: 'cards',
//   stateFactory: true,
//   namespaced: true
// })
// class Cards extends VuexModule {
//   cards: Array<CARD> = []

//   @Mutation
//   setCards(cards: Array<CARD>) {
//     this.cards = cards
//   }

//   get allCards() {
//     return this.cards
//   }

//   @Action
//   nuxtServerInit() {
//     console.log('getting data')
//     this.context.commit('setCards', ccData)

//     // axios
//     //   .get('/data/fool_cc_compare.json')
//     //   .then((res) => {
//     //     console.log('rs', res)
//     //     this.context.commit('setCards', res.data)
//     //   })
//     //   .catch((err) => console.error('uh ohhh', err))
//   }
// }

// const store = () =>
//   new Vuex.Store({
//     state: {
//       cards: []
//     },
//     getters: {
//       allCards(state) {
//         return state.cards
//       },
//       cardsByScore(state, creditScoreRating) {
//         // return state.cards.filter((card) => card.score === creditScoreRating)
//         return state.cards
//       }
//     },
//     mutations: {
//       SET_CARDS(state, cards) {
//         state.cards = cards
//       }
//     },
//     actions: {
//       nuxtServerInit({ commit }, { req }) {
//         console.log('getting data')
//         axios
//           .get('/data/fool_cc_compare.json')
//           .then((res) => {
//             console.log('rs', res)
//             commit('SET_CARDS', res.data)
//           })
//           .catch((err) => console.error('uh ohhh', err))
//       }
//     }
//   })

// export default store
