import { createStore } from 'vuex'

const store = createStore({
//state is stored in The store and is  shared component each other
state(){
    return {
      count : 0
    }
}
})
export default store