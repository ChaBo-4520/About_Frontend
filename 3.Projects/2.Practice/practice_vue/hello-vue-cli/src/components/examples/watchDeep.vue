<template>
  <div>
    <h3>Object 안의 값의 변경을 감지하기 위해서는 Deep옵션을 사용해야 한다.</h3>
    <h4>카운트가 0이되면 Alert창이 뜹니다.</h4>
    <v-btn @click="reset">
      리셋
    </v-btn>
    <div class="wrapper">
      <div>
        <h4>watch with deep</h4>
        <v-btn @click="decreaseWithDeep">카운트감소</v-btn>
        <p>{{ countWithDeep.value }}</p>
      </div>
      <div>
        <h4>watch without deep</h4>
        <v-btn @click="decreaseWithoutDeep">카운트감소</v-btn>

        <p>{{ countWithoutDeep.value }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countWithDeep: {
        value: 3,
      },
      countWithoutDeep: {
        value: 3,
      },
    };
  },
  methods: {
    decreaseWithDeep() {
      this.countWithDeep.value--;
    },
    decreaseWithoutDeep() {
      this.countWithoutDeep.value--;
    },
    reset() {
      this.countWithDeep.value = 3;
      this.countWithoutDeep.value = 3;
    },
  },
  watch: {
    countWithDeep: {
      deep: true,
      handler(newVal) {
        if (newVal.value == 0) {
          alert("값이 0이 되었습니다!");
          this.countWithDeep.value = 3;
        }
      },
    },
    countWithoutDeep: {
      handler(newVal) {
        if (newVal.value == 0) {
          alert("값이 0이 되었습니다!");
          this.countWithoutDeep.value = 3;
        }
      },
    },
  },
};
</script>

<style scoped>
* {
  margin-bottom: var(--basic-space);
}
.wrapper {
  display: flex;
  width: 20em;
  justify-content: space-between;
}
.wrapper > div {
  display: flex;
  flex-direction: column;
  height: 6em;
  justify-content: space-between;
}
</style>
