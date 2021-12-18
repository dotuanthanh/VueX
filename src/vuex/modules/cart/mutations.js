export default {
  update(state,playload){
   let item = state.products.find(item => item.id === playload.id)
   item.qty = playload.qty
  },
  delete(state,playload){
    state.products = state.products.filter(item => item.id != playload.id)
  },
  create(state,playload){ 
    let productsState = state.products;
    let isExist = productsState.find(item => item.id === playload.id)
    console.log(isExist)
    if(productsState.length == 0 || !isExist){
      productsState.push(playload) 
    }
    else{
      console.log('Da ton tai')
      console.log(productsState)
      console.log(playload)
    }
  }
}