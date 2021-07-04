<template>
  <div class="wrapper">
    <span>{{ title }}</span>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: 4em;
}
</style>
