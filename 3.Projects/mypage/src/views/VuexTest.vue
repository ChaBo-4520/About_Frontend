<template>
  <div id="app">
    <div style="display:flex; justify-content:left;">
      <div style= "border:1px solid black; padding:5px;">
        Parent counter : {{ counter }} <br>
        <button @click="addCounterP">+</button>
        <button @click="subCounterP">-</button>
        <propschild :num="counter"></propschild>
      </div>
      <div style= "border:1px solid black; padding:5px;">
        Vuex counter : {{ get_counter }}  <br>
        <button @click="addCounter">+</button>
        <button @click="subCounter">-</button>
        <vuexchild></vuexchild>
      </div>
      <!-- Child 컴포넌트를 등록하고 counter 데이터 속성을 props로 전달한다. -->
    </div>

  </div>
</template>

<script>
import PropsTestChildVue from '../components/PropsTestChild.vue';
import VuexTestChildVue from '../components/VuexTestChild.vue'
import { mapGetters, mapMutations } from 'vuex'
export default {
  components:{
    propschild : PropsTestChildVue,
    vuexchild : VuexTestChildVue,
  },
  data(){
    return{
      counter: 0
    };
  },
  methods: {
    addCounterP(){
      this.counter++;
    },
    subCounterP(){
      this.counter--;
    },
    ...mapMutations('test',['addCounter','subCounter']),
  },
  computed:{
    ...mapGetters('test',['get_counter']),
  }
};
</script>

<style>

</style>