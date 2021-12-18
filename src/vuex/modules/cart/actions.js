export default {
 addToCart(context , playload){
     const request ={
         id : playload.id,
         qty : +playload.qty
     }
     context.commit('create', request)
 }
}