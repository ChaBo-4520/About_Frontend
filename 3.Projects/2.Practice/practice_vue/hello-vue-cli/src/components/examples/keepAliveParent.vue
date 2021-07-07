<template>
  <div id="keepAliveParent">
    <h4>
      keep-alive의 inclue에 포함한 1번 2번만 값이 유지되는 것을 볼 수 있다.
    </h4>
    <div class="btns">
      <v-btn @click="selectNum(1)">1</v-btn>
      <v-btn @click="selectNum(2)">2</v-btn>
      <v-btn @click="selectNum(3)">3</v-btn>
    </div>
    <keep-alive include="keepAliveChild2,keepAliveChild1">
      <component :is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import keepAliveChild1 from "./keepAliveChild1.vue";
import keepAliveChild2 from "./keepAliveChild2.vue";
import keepAliveChild3 from "./keepAliveChild3.vue";
export default {
  data() {
    return {
      selectedComponent: "keepAliveChild1",
    };
  },
  components: { keepAliveChild1, keepAliveChild2, keepAliveChild3 },
  methods: {
    selectNum(num) {
      this.selectedComponent = "keepAliveChild" + num;
    },
  },
};
</script>

<style scoped>
#keepAliveParent {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.btns {
  width: 40%;
  min-width: 35em;
  display: flex;
}
* {
  margin-top: calc(var(--basic-space) / 2);
}
</style>
