<template>
<main>
<router-view></router-view>
</main>
</template>

<script>
import product from "./dataProduct"
export default {
  name: 'App',
  components: {
     },
     provide:{
       products:product
     }
}
</script>

<style>
#app {
  
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
