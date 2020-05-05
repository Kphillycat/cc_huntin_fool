<template>
  <div class="cc-form">
    <form @submit.prevent="submit">
      <fieldset>
        <label for="card-type">What do you want to use this card for?</label>
        <br />
        <select v-model="cardType" name="card-type">
          <option disabled value>Please select one</option>
          <option value="balance_transfer">Balance Transfer</option>
          <option value="cash_back">Cash Back</option>
          <option value="low_interest">Low Interest</option>
          <option value="travel">Travel</option>
        </select>
        <br />
        <label>What's your credit rating?</label>
        <br />
        <select for="credit-rating" v-model="creditRating">
          <option disabled value>Please select one</option>
          <option value="excellent">Excellent</option>
          <option value="goodexcellent">Good to Excellent</option>
          <option value="good">Good</option>
          <option value="fair">Fair</option>
          <option value="bad">Bad</option>
        </select>
        <button :disabled="disabled" class="btn" @click="submit()">
          Submit
        </button>
      </fieldset>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class CCForm extends Vue {
  cardType = ''
  creditRating = ''

  get disabled() {
    return this.cardType === '' || this.creditRating === ''
  }

  submit() {
    this.$store.commit('SET_CREDIT_RATING', this.creditRating)
    this.$store.commit('SET_CARD_TYPE', this.cardType)
    this.$emit('submitted')
  }
}
</script>

<style scoped>
.cc-form {
  font-size: 1.4em;
  margin: 0 1em;
}

h3 {
  font-size: 1.4em;
}

fieldset {
  border-radius: 10px 10px 10px 10px;
  border: 1px solid #000000;
  text-align: center;
}

.btn {
  margin-top: 10px;
  cursor: pointer;
}

.btn:disabled {
  background-color: grey;
  box-shadow: none;
  border: none;
  cursor: not-allowed;
}
</style>
