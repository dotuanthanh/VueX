import { createStore } from 'vuex'

const store = createStore({
  //state is stored in The store and is  shared component each other
  state() {
    return {
      count: 0,
      numbers: [0, 1, 2, 3, 4],
    };
  },
  //mutation like setter 
  mutations: {
    increment(state) {
      ++state.count;
    },
    //playload like value we want to set
    filter(state, playload) {
      state.count += playload.value;
    },
  },
  getters: {
    fiterNumber(state, k) {
      return state.numbers.find((x) => x == k);
    },
    getReturn(state) {
      return state.count;
    },
  },
});
export default store