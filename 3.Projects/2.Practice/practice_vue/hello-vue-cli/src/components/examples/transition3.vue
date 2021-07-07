<template>
  <div>
    <v-btn @click="show = !show">Toggle</v-btn>
    <transition @before-enter="beforeEnter" @enter="enter" @leave="leave">
      <p v-if="show">Demo</p>
    </transition>
  </div>
</template>

<script>
import Velocity from "velocity-animate";
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.transformOrigin = "left center";
    },
    enter(el, done) {
      Velocity(el, { opacity: 1, fontSize: "1.4em" }, { duration: 300 });
      // 두번째 파라미터로 시작값을 강제로 설정해준다.
      // 그렇지 않으면 0부터 시작함
      Velocity(el, { fontSize: ["1em", "1.4em"] }, { complete: done });

      Velocity(el, { complete: done });
    },
    leave(el, done) {
      Velocity(el, { translateX: "15px", rotateZ: "50deg" }, { duration: 600 });
      Velocity(el, { rotateZ: "100deg" }, { loop: 2 });
      Velocity(
        el,
        {
          rotateZ: "45deg",
          translateY: "30px",
          translateX: "30px",
          opacity: 0,
        },
        { complete: done }
      );
    },
  },
};
</script>

<style scoped></style>
