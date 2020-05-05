<template>
  <div class="container">
    <div>
      <h1 class="title">CC Huntin Fool</h1>
      <h2 class="subtitle">Find Credit Cards based on user preferences</h2>
      <cc-form @submitted="handleSubmit" v-show="!formSubmitted" />
      <card-list
        @showForm="handleShowForm"
        v-bind:cards="cards"
        v-show="formSubmitted"
      />
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

  get cards() {
    if (this.formSubmitted) return this.$store.getters.filteredCards
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
