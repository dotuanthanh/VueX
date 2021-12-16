import { createStore } from 'vuex'
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"
const cart = createStore({
state : {
   products:{ 
   id : '',
   qty : 0,
   price :0
},
total :0 
},
getters,
mutations,
actions
})
export default cart 
