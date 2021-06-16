<template>
  <div>
    <hr/>
    Child counter : {{ get_counter }} <br/>
      <button @click="addCounter">+</button>
      <button @click="subCounter">-</button>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
  data(){
    return {
      count :0,
    }
  },
  computed:{
    ...mapGetters('test',['get_counter']),
  },
  methods:{
    ...mapMutations('test',['addCounter','subCounter']),
  }
}
</script>

<style>

</style>