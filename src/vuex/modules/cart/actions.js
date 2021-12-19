export default {
 addToCart(context , playload){
    //  const request ={
    //      id : playload.id,
    //      qty : +playload.qty,
    //      prices : playload.prices
    //  }
     context.commit('create', playload)
 },
 remove(contex,playload){
     contex.commit('delete',playload)
 }
}