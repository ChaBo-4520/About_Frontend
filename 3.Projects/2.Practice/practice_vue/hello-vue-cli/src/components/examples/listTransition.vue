<template>
  <div class="wrapper">
    <h4>JavaScript라이브러리인 Lodash를 사용한 예제</h4>
    <a href="https://lodash.com/docs/4.17.15">Lodash Document</a>
    <div id="flip-list-demo1">
      <v-btn @click="add1">Add</v-btn>
      <v-btn @click="remove1">Remove</v-btn>
      <transition-group name="list" tag="p">
        <span v-for="item in example1.items" :key="item" class="list-item">
          {{ item }}
        </span>
      </transition-group>
    </div>
    <div id="flip-list-demo2" class="demo">
      <v-btn @click="shuffle2">Shuffle</v-btn>
      <v-btn @click="add2">Add</v-btn>
      <v-btn @click="remove2">Remove</v-btn>
      <transition-group name="list" tag="p">
        <li v-for="item in example2.items" :key="item" class="list-item">
          {{ item }}
        </li>
      </transition-group>
    </div>
  </div>
</template>
<script>
import { shuffle } from "lodash";
export default {
  data() {
    return {
      example1: {
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        nextNum: 10,
      },
      example2: {
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        nextNum: 10,
      },
    };
  },
  methods: {
    randomIndex1() {
      return Math.floor(Math.random() * this.example1.items.length);
    },
    add1() {
      this.example1.items.splice(
        this.randomIndex1(),
        0,
        this.example1.nextNum++
      );
    },
    remove1() {
      this.example1.items.splice(this.randomIndex1(), 1);
    },
    randomIndex2() {
      return Math.floor(Math.random() * this.example2.items.length);
    },
    add2() {
      this.example2.items.splice(
        this.randomIndex2(),
        0,
        this.example2.nextNum++
      );
    },
    remove2() {
      this.example2.items.splice(this.randomIndex2(), 1);
    },
    shuffle2() {
      this.example2.items = shuffle(this.example2.items);
    },
  },
};
</script>

<style scoped>
.wrapper * {
  margin-top: calc(var(--basic-space) / 2);
}
.wrapper > a {
  display: inline-block;
}
.wrapper button {
  margin-right: calc(var(--basic-space) / 2);
}
.list-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter {
  opacity: 0;
  transform: translateY(30px);
}
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-move {
  transition: transform 1s;
}
.list-leave-active {
  position: absolute;
}
</style>
