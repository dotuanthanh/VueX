export default {
  update(state,playload){
   let item = state.products.find(item => item.id === playload.id)
   item.qty = item.qty + 1  
   console.log('update')
  },
  delete(state,playload){
    console.log(playload)
    state.products = state.products.filter(item => item.id != playload.id)
    console.log('remove')
    console.log( state.products)
  },
  create(state,playload){ 
    let productsState = state.products;
    let isExist = productsState.find(item => item.id === playload.id)
    console.log(isExist)
    if(productsState.length == 0 || !isExist){
      productsState.push(playload) 
    }
    else{
      let item = state.products.find(item => item.id === playload.id)
      item.qty = item.qty + 1 
      console.log(productsState)
    }
  }
}