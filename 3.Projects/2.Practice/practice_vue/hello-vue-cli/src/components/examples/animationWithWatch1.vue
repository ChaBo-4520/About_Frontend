<template>
  <div id="animated-number-demo">
    <input v-model.number="number" type="number" step="20" />
    <p>{{ animatedNumber }}</p>
    <input type="text" placeholder="여기입력하세요!!!" />
  </div>
</template>

<script>
import TweenLite from "gsap/all";
export default {
  data() {
    return {
      number: 0,
      tweenedNumber: 0,
    };
  },
  computed: {
    animatedNumber() {
      return this.tweenedNumber.toFixed(0);
    },
  },
  watch: {
    number(newValue) {
      TweenLite.to(this.$data, 0.5, { tweenedNumber: newValue });
    },
  },
};
</script>

<style scoped></style>
