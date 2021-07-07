<template>
  <div>
    <h2>Child3</h2>
    <div class="inputs">
      <input type="radio" name="3" />
      <input type="radio" name="3" />
      <input type="radio" name="3" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.inputs {
  display: flex;
  flex-direction: column;
}
.inputs input {
  margin-top: calc(var(--basic-space) / 2);
}
</style>
