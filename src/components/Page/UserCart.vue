<template>
<button @click="test">Cliclaaa </button>
  <section>
    <h2>Your Cart</h2>
    <h3>Total Amount: <base-badge mode="elegant">${{cartTotal}}</base-badge></h3>
    <ul>
      <cart-item
        v-for="item in items"
        :key="item.productId"
        :prod-id="item.id"
        :title="item.title"
        :image="item.image"
        :price="item.prices"
        :qty="item.qty"
      ></cart-item>
    </ul>
  </section>
</template>

<script>
import CartItem from '../Shop/cart/CartItem.vue';
import {mapGetters} from "vuex"
export default {
// data (){
//   return {
//     cartTotal : 0,
//     products :[]
//   }
// },
  components: {
    CartItem,
  },

//code below is not reactive when use vueX ??

// methods :{
//   init(){
//    this.products = this.$store.getters['theCart/getItems'] 
//    this.cartTotal = this.$store.getters['theCart/getTotal'].toFixed(2)
//   },
//   test(){
//     console.log(this.products)
//     console.log(this.$store.getters['theCart/getItems'] )
//     console.log(this.products==this.$store.getters['theCart/getItems'])
//   }
// },
//   created(){
//   this.init()
//   },
  computed:{
   ...mapGetters({
        items: 'theCart/getItems'
    }),
    cartTotal(){
      return this.$store.getters['theCart/getTotal'].toFixed(2)
    }
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
}

h2 {
  color: #292929;
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 1rem;
}

h3 {
 text-align: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>