<template>
  <div id="transition2">
    <button @click="show = !show">Toggle render</button>
    <!-- Animation 종류 -->
    <!-- https://animate.style/ -->
    <transition
      name="custom-classes-transition"
      enter-active-class="animate__animated animate__tada"
      leave-active-class="animate__animated animate__bounceOutRight"
    >
      <p v-if="show">Hello</p>
    </transition>
  </div>
</template>

<script>
import "animate.css";
export default {
  data() {
    return {
      show: true,
    };
  },
};
</script>

<style></style>
