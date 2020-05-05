<template>
  <div
    class="stars"
    :style="cssVars"
    aria-label="Rating of this product is rating out of 5"
  />
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  props: {
    rating: Number
  }
})
export default class StarRating extends Vue {
  get cssVars() {
    return {
      '--rating': this.rating,
      '--star-size': '30px',
      '--star-color': '#fff',
      '--star-background': '#fc0'
    }
  }
}
</script>

<style scoped>
.stars {
  --percent: calc(var(--rating) / 5 * 100%);

  display: inline-block;
  font-size: var(--star-size);
  font-family: Times;
  line-height: 1;
}

.stars::before {
  content: '★★★★★';
  letter-spacing: 3px;
  background: linear-gradient(
    90deg,
    var(--star-background) var(--percent),
    var(--star-color) var(--percent)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
