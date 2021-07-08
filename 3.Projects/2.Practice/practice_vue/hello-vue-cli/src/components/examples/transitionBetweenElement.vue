<template>
  <div class="wrapper">
    <h3>적용할 transition에 따라 적절한 mode를 설정해야한다.</h3>
    <div style="display:flex; flex-direction:row">
      <div class="example1">
        <div class="buttons" id="ex1">
          <h4>mode : out-in</h4>
          <transition name="buttons-fade" mode="out-in">
            <button v-if="show1" @click="show1 = !show1" key="on">on</button>
            <button v-else @click="show1 = !show1" key="off">off</button>
          </transition>
        </div>
        <div class="buttons" id="ex2">
          <h4>mode : x</h4>
          <transition name="buttons-fade">
            <button v-if="show2" @click="show2 = !show2" key="on">on</button>
            <button v-else @click="show2 = !show2" key="off">off</button>
          </transition>
        </div>
        <div class="buttons" id="ex3">
          <h4>mode : in-out</h4>
          <transition name="buttons-fade" mode="in-out">
            <button v-if="show3" @click="show3 = !show3" key="on">on</button>
            <button v-else @click="show3 = !show3" key="off">off</button>
          </transition>
        </div>
      </div>
      <div class="example2">
        <div class="buttons" id="ex1">
          <h4>mode : out-in</h4>
          <transition name="buttons-change" mode="out-in">
            <button v-if="show4" @click="show4 = !show4" key="on">on</button>
            <button v-else @click="show4 = !show4" key="off">off</button>
          </transition>
        </div>
        <div class="buttons" id="ex2">
          <h4>mode : x</h4>
          <transition name="buttons-change">
            <button v-if="show5" @click="show5 = !show5" key="on">on</button>
            <button v-else @click="show5 = !show5" key="off">off</button>
          </transition>
        </div>
        <div class="buttons" id="ex3">
          <h4>mode : in-out</h4>
          <transition name="buttons-change" mode="in-out">
            <button v-if="show6" @click="show6 = !show6" key="on">on</button>
            <button v-else @click="show6 = !show6" key="off">off</button>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show1: true,
      show2: true,
      show3: true,
      show4: true,
      show5: true,
      show6: true,
    };
  },
};
</script>

<style scoped>
button {
  width: 5em;
  border: solid 1px black;
  padding: 0.5em 1rem;
  border-radius: 10%;
  text-align: center;
  background-color: #eeeeee;
}
.wrapper * {
  margin-bottom: var(--basic-space-small);
}
.buttons {
  height: 5em;
}
.example1,
.example2 {
  display: flex;
  flex-direction: column;
  width: 20em;
  margin-right: calc(var(--basic-space) * 4);
}
/* fade */
.buttons-fade-enter-active,
.buttons-fade-leave-active {
  transition: opacity 1s;
}
.buttons-fade-enter,
.buttons-fade-leave-to {
  opacity: 0;
}

/* Change */
.example2 .buttons button {
  position: absolute;
}
.buttons-change-enter-active,
.buttons-change-leave-active {
  transition: all 1s;
}
.buttons-change-enter {
  opacity: 0;
  transform: translateX(5em);
  position: absolute;
}
.buttons-change-leave-to {
  opacity: 0;
  transform: translateX(-5em);
  position: absolute;
}
</style>
