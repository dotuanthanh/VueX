<template>
  <div>
      <h3>Not found 404</h3>
      <h3>Data get by getter in store of VUEX : {{this.$store.state.count}}</h3>
      <button @click="onclick">click</button>
      <button @click="redirect">Redirect to game</button>
  </div>
</template>

<script>
export default {
data(){
  return {
    data:0
  }
},
methods :{
  onclick(){
    //cannot get data like below becase multition is not allow return function 
    // this.data = this.$store.commit({
    //   type:'filter',
    //   value :10
    // })
    // console.log(this.data)
    console.log(this.$store.getters.getReturn)
  },
  redirect(){
    //redirect to specific components
    this.$router.push('/game')
    console.log(this.$router)
  }
}
}
</script >

<style>

</style>