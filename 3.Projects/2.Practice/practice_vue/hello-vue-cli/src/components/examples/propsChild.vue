<template>
  <div id="propsChild">
    <h3>I am child!</h3>
    <p>{{ childMsg }}</p>
  </div>
</template>

<script>
export default {
  props: {
    childMsg: String,
  },
};
</script>

<style scoped>
h3 {
  margin: 0;
}
* {
  margin-top: calc(var(--basic-space) / 2);
}
</style>
