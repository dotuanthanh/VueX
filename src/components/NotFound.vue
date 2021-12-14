<template>
  <div>
      <h3 class="abc">Not found 404</h3>
  </div>
</template>

<script>
export default {
   beforeRouteLeave(to, from, next) {
      console.log(to ,from)
      alert("Before router leave")
      next()
  }
};
</script >

<style>
.abc {
  color :rgba(1,2,3,4)
}
</style>