<template>
<user-list />
<router-view></router-view>
</template>

<script>
import UserList from './UserList.vue'
export default {
  components: { UserList },
data(){
return {
user:[{id:1,name:"Thanh",age:10},
     {id:2,name:"Thanh2",age:20},
     {id:3,name:"Thanh3",age:30},]
}
},
provide(){
    return {users : this.user }
}
}
</script>

<style>

</style>