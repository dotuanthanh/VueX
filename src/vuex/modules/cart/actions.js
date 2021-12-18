export default {
 addToCart(context , playload){
     const request ={
         id : playload.id
     }
     context.commit('create', request)
 }
}