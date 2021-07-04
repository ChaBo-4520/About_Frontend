<template>
  <div id="app-wrapper">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import appHeader from "./components/appHeader.vue";
export default {
  name: "App",
  components: { appHeader },
};
</script>

<style>
:root {
  --primary-color: #25c6d8;
  --dark-primary-color: #0095a7;
  --light-primary-color: #6ef9ff;
  --dark-font-color: #000a12;
  --font-color: #263238;
  --light-font-color: #4f5b62;
}
#app-wrapper {
  height: 100vh;
  width: 100vw;
}
</style>
