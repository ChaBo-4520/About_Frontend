<template>
  <div class="wrapper">
    <h3>Watch VS Computed</h3>
    <h4>구현하려는 동작에 따라 watch와 computed를 적절히 사용해야 한다.</h4>
    <div class="input">
      <span>firstName : </span>
      <input type="text" v-model="firstName" />
      <span>lastName : </span>
      <input type="text" v-model="lastName" />
    </div>
    <div id="demo"><span>watch : </span>{{ fullNameWatch }}</div>
    <div id="demo"><span>computed : </span> {{ fullNameComputed }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "Foo",
      lastName: "Bar",
      fullNameWatch: "Foo Bar",
    };
  },
  computed: {
    fullNameComputed() {
      return this.firstName + " " + this.lastName;
    },
  },
  watch: {
    firstName(newVal) {
      this.fullNameWatch = newVal + " " + this.lastName;
    },
    lastName(newVal) {
      this.fullNameWatch = this.firstName + " " + newVal;
    },
  },
};
</script>

<style scoped>
.wrapper {
  width: 40%;
  min-width: 35em;
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.wrapper .input {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.wrapper input {
  border: solid 1px black;
}
</style>
