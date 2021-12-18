export default {
  // update(state,playload){

  // },
  // delete(state,playload){

  // },
  create(state,playload){ 
    let productsState = state.products;
    let isExist = productsState.filter(item => item.id == playload.id)
    if(productsState.lenght == 0 || !isExist){
      productsState.push(playload) 
    }
    else{
      console.log('Da ton tai')
    }
  }
}