<template>
  <div class="card">
    <div class="card-wrapper">
      <div>
        <a :href="applyNowLink" target="_blank">
          <img
            class="card-img"
            :src="card.offer_image"
            :alt="card.offer_name"
          />
        </a>
      </div>

      <div class="apply-now">
        <div v-show="card.affiliate_link_deactivate" v-html="maintenanceText" />
        <a
          v-show="!card.affiliate_link_deactivate"
          :href="applyNowLink"
          target="_blank"
        >
          <span class="btn">Apply Now</span>
        </a>
      </div>
    </div>

    <div class="card-details">
      <div>
        <h3 class="card-sub-title">
          <span v-html="card.bottom_line" />
        </h3>
        <div class="card-title">
          <a
            v-show="!card.affiliate_link_deactivate"
            :href="applyNowLink"
            target="_blank"
          >
            {{ card.offer_name }}
          </a>
        </div>
      </div>

      <star-rating v-bind:rating="card.star_rating" />

      <div class="why-apply">
        <h6>Why Apply</h6>

        <p>
          {{ card.bonus }}
          <a :href="card.review_url">
            Read Full Review
          </a>
        </p>

        <div class="credit-rating">
          <h6>
            Credit Rating Requirement:
            <span class="credit-rating_req">{{ creditRating }}</span>
          </h6>
        </div>
      </div>
    </div>

    <div class="benefits">
      <div>
        <h6>Rewards</h6>
        <p>{{ card.rewards_program }}</p>
      </div>

      <div>
        <h6>Annual Fee</h6>
        <p>{{ card.annual_fee }}</p>
      </div>

      <div>
        <h6>Intro APR</h6>
        <p>
          <strong>Purchases:</strong>
          {{ card.intro_purchase_apr }}
          <br />
          <strong>Balance Transfers:</strong>
          {{ card.intro_transfer_apr }}
        </p>
        <h6>Ongoing APR</h6>
        <p>
          {{ card.regular_apr }}
          <br />
        </p>
      </div>
    </div>
    <div class="highlights">
      <h6>Highlights</h6>
      <div class="highlights" v-html="card.marketing_bullets"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'
import { Component, Vue } from 'nuxt-property-decorator'
import { CARD_DETAIL } from '~/store/index'
import StarRating from '~/components/StarRating.vue'

const CardProps = Vue.extend({
  props: {
    card: Object as PropType<CARD_DETAIL>,
    maintenanceText: String
  }
})

@Component({
  components: {
    StarRating
  }
})
export default class Card extends CardProps {
  get creditRating() {
    if (this.card.credit_rating === 'goodexcellent') {
      return 'Good to Excellent'
    }
    if (this.card.credit_rating.includes('fair')) {
      return 'Fair'
    }
    return this.card.credit_rating
  }

  get applyNowLink() {
    if (this.card.affiliate_link_deactivate) {
      return ''
    }
    return `https://www.fool.com${this.card.redirect_url}`
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}

h6 {
  color: #1c1d20;
  font-size: 1.4em;
  line-height: 1.8em;
  text-transform: uppercase;
  padding: 0.5em 0;
}

.card {
  display: grid;
  font-size: 10px;
  font-weight: 400;
  font-family: 'PT Sans', sans-serif;
  color: #1c1d20;
  box-sizing: border-box;
  position: relative;
  width: auto;
  margin: 24px auto;

  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.12);
  padding: 24px 14px 10px;
  grid-template-columns: minmax(280px, 1fr) 2fr;
  max-width: 1000px;
}

.card-img {
  max-width: 280px;
}

.apply-now {
  padding: 1em;
}

.card-details {
  text-align: left;
  padding-left: 2em;
}

.card-sub-title {
  color: #8a8c8e;
  font-size: 1.4em;
  letter-spacing: 0.3px;
  line-height: 16px;
  text-align: left;
}

.card-title {
  text-align: left;
  padding-top: 1em;
}

.card-title a {
  font-size: 2.4em;
  color: #1c1d20;
  line-height: 26px;
}
.why-apply {
  font-size: 1.4em;
  line-height: 1.8em;
}

.credit-rating h6 .credit-rating_req {
  font-weight: normal;
  color: #1c1d20;
  text-transform: capitalize;
  font-weight: 400;
}

.benefits {
  display: grid;
  grid-column: -1 / 1;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 26px;
  text-align: left;
  margin-top: 1em;
}

.benefits > div {
  background-color: #edeeee;
  border-radius: 4px;
  margin-bottom: 8px;
  padding: 9px 12px 12px;
}

.benefits p {
  font-size: 1.4em;
  line-height: 1.8em;
}

.highlights {
  grid-column: -1 / 1;
  font-size: 1.4em;
  text-align: left;
}

@media screen and (max-width: 699px) {
  .card {
    grid-template-columns: 1fr;
  }
  .benefits {
    grid-template-columns: 1fr;
  }
}
</style>
