<template>
  <div id="transition2">
    <button @click="show = !show">Toggle render</button>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated_tada"
      leave-active-class="animated_bounceOutRight"
    >
      <p v-if="show">Hello</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },
};
</script>

<style></style>
