<template>
  <div>
     <!-- <div v-for="user in users" :key="user">
      <h3>Id : {{user.id}}</h3>
      <h3>Name : {{user.name}}</h3>
      <h3>Age : {{user.age}}</h3>
      <h3>Age is less than 30 : {{checkAge}}</h3>
      <router-link to="/use/"> Details</router-link>
      <hr> -->
     <!-- </div> -->
   <user-item v-for="user in users "  :id ="user.id" :name="user.name" :age="user.age"  :key="user.id" />
   </div>
</template> 
<script>
import userItem from "./UserItem.vue"
export default {
components:{ userItem },

inject:['users'],

}
</script>

<style>

</style>