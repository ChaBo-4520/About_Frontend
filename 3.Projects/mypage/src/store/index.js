import Vue from "vue"
import Vuex from "vuex"
import moduletest from '@/store/test.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    count:0,
  },
  modules: {
    test: moduletest,
  }
})