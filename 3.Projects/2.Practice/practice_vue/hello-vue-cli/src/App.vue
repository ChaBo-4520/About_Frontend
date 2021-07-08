<template>
  <div id="app-wrapper">
    <app-header></app-header>
    <div id="app-body">
      <router-view :key="$route.fullPath"></router-view>
    </div>
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

  --animation-duration: 300ms;

  --basic-space: 1em;
  --basic-space-small: 0.5em;
}
#app-wrapper {
  height: 100vh;
  /* width: calc(100vw- (100vw - 100%)); */
  width: 100%;
}
#app-body {
  padding-left: var(--basic-space);
  padding-right: var(--basic-space);
  margin-top: var(--basic-space);
}
</style>
