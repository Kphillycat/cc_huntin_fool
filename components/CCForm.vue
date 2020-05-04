<template>
  <div>
    <h3>
      Hi, Let's get to know a bit more about you so we can find the best card!
    </h3>
    <form class="cc-form" @submit.prevent="submit">
      <div>What do you want to use this card for?</div>
      <select v-model="cardType">
        <option disabled value>Please select one</option>
        <option value="balance_transfer">Balance Transfer</option>
        <option value="cash_back">Cash Back</option>
        <option value="low_interest">Low Interest</option>
        <option value="travel">Travel</option>
      </select>
      <div>What's your credit rating?</div>
      <select v-model="creditRating">
        <option disabled value>Please select one</option>
        <option value="excellent">Excellent</option>
        <option value="goodexcellent">Good to Excellent</option>
        <option value="good">Good</option>
        <option value="fair">Fair</option>
        <option value="bad">Bad</option>
      </select>
      <button @click="submit()">Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class CCForm extends Vue {
  cardType = ''
  creditRating = ''

  submit() {
    this.$store.commit('SET_CREDIT_RATING', this.creditRating)
    this.$store.commit('SET_CARD_TYPE', this.cardType)
    this.$emit('submitted')
  }
}
</script>

<style scoped></style>
