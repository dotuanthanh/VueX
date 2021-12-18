import { createStore } from 'vuex'
import cart from "./modules/cart/index"
const store = createStore({
 modules:{
    theCart : cart
 }
});
export default store