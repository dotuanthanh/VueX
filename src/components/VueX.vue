<template>
  <div>
  <h3> VueX components :{{this.$store.state.count}}</h3>
  <button @click="addOne"> Click</button>
  </div>
</template>

<script>
export default {
methods:{
  addOne(){
     this.$store.commit('increment')
  }
}
}
</script>

<style>

</style>