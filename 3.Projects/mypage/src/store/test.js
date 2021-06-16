// Vuex테스트용 상태 관리 저장소

const test = {
  namespaced: true,
  state:{
    counter:0
  },
  getters:{
    get_counter(state){
      return state.counter
    },
  },
  mutations: {
    addCounter(state){
      state.counter++;
    },
    subCounter(state){
      state.counter--;
    }
  }
}

export default test