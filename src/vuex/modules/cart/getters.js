export default {
 getQty(state,playload){
  const item = state.products.find(x =>x.id == playload.id)
  return item.qty || 0 
 },
 getTotal(state){
     let sum = 0 ;
     for(let i =0 ;i<state.products.length; i++ ){
     sum += parseInt(state.products[i].prices * state.products[i].qty)
     } 
     return sum ;
 },
 getItems(state){
    return state.products
 },
// getItem(state,playload){ 
// }
}
