<template>
  <div class="container">
    <div>
      <h2 class="subtitle">Find The Best Credit Cards For You!</h2>
      <cc-form @submitted="handleSubmit" v-show="!formSubmitted && !error" />
      <card-list
        @showForm="handleShowForm"
        v-bind:cards="cards"
        v-show="formSubmitted"
      />
      <div v-show="error" class="error-text">
        Sorry, but we don't currently have any card recommendations that meet
        your criteria
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import '~/assets/global.css'

import { Component, Vue } from 'nuxt-property-decorator'
import ccForm from '~/components/CCForm.vue'
import CardList from '~/components/CardList.vue'

@Component({
  components: {
    ccForm,
    CardList
  }
})
export default class Index extends Vue {
  formSubmitted = false
  error = false

  get cards() {
    const { filteredCards } = this.$store.getters
    if (this.formSubmitted) {
      if (filteredCards.length === 0) {
        this.error = true
        return filteredCards
      }
      return filteredCards
    }

    return this.$store.getters.cards
  }

  handleSubmit() {
    this.formSubmitted = true
  }

  handleShowForm() {
    this.formSubmitted = false
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
