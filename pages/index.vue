<template>
  <div class="container">
    <div>
      <h1 class="title">CC Huntin Fool</h1>
      <h2 class="subtitle">Find Credit Cards based on user preferences</h2>
      <cc-form @submitted="handleSubmit" />
      <pre>{{ JSON.stringify(cards, null, 2) }}</pre>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ccForm from '~/components/CCForm.vue'

@Component({
  components: {
    ccForm
  }
})
export default class Index extends Vue {
  // async asyncData({ store }: { store: any }) {
  //   const { data } = await axios.get(`/data/fool_cc_compare.json`)
  //   return { cards: data }
  // },
  formSubmitted = false

  get cards() {
    if (this.formSubmitted) return this.$store.getters.filteredCards
    return this.$store.getters.cards
  }

  handleSubmit() {
    this.formSubmitted = true
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
