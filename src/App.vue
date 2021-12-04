<template>
<sign-in />
<vue-x/>
</template>

<script>
import SignIn from './components/SignIn.vue'
import VueX from './components/VueX.vue'

export default {
  name: 'App',
  components: {
    SignIn,
    VueX

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
