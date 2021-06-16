<template>
  <div>
    <hr>
      Child counter : {{ num }} <br>
      <button>+</button>
      <button>-</button>
  </div>
</template>

<script>
export default {
  props:[
    "num",
  ],
  methods: {
  }
};
</script>

<style>

</style>