<template>
  <div id="app-wrapper">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import appHeader from "./components/app-header.vue";
export default {
  name: "App",
  components: { appHeader },
};
</script>

<style scoped>
#app-wrapper {
  height: 100vh;
  width: 100vw;
}
</style>
