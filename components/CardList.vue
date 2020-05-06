<template>
  <div>
    <div class="card-list">
      <div>
        <h3>Here's our list of recommended Credit Cards for you</h3>
      </div>
      <card
        v-for="(card, index) in cardsList"
        :card="card"
        :key="index"
        :maintenanceText="maintenanceText"
      />
      <button @click="goBack" class="btn go-back">
        Click here to Start Over
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'
import { Component, Vue } from 'nuxt-property-decorator'
import Card from '~/components/Card.vue'
import { CARD } from '~/store/index'

const CardListProps = Vue.extend({
  props: {
    cards: Array as PropType<Array<CARD>>
  }
})

@Component({
  components: {
    Card
  }
})
export default class CardList extends CardListProps {
  get cardsList() {
    if (!this.cards) return []
    const { card1, card2 } = this.cards[0]
    return [card1, card2]
  }

  get maintenanceText() {
    return this.cards[0].maintenance_text
  }

  goBack() {
    this.$emit('showForm')
  }
}
</script>

<style scoped>
.card-list .btn {
  cursor: pointer;
}
.go-back {
  background-color: blue;
}
</style>
