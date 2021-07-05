<template>
  <div id="transition1">
    <div>
      <button @click="show1 = !show1">Toggle1</button>
      <transition name="fade">
        <p v-if="show1">Hello</p>
      </transition>
    </div>
    <div>
      <button @click="show2 = !show2">Toggle2</button>
      <transition name="slide-fade">
        <p v-if="show2">Hello</p>
      </transition>
    </div>
    <div>
      <button @click="show3 = !show3">Toggle show</button>
      <transition name="bounce">
        <p v-if="show3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          facilisis enim libero, at lacinia diam fermentum id. Pellentesque
          habitant morbi tristique senectus et netus.
        </p>
      </transition>
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
    };
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

/* style */
button {
  border: solid 1px black;
  width: 100%;
  padding: 0.5em 0.5rem;
  box-sizing: border-box;
  text-align: center;
  margin-bottom: var(--basic-space);
}
#transition1 {
  margin: 0 auto;
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
}
#transition1 div {
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
