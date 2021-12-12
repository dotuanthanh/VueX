<template>
  <div>
    <h3 class="id" >id :{{id}}</h3>
    <h3 :class="{name : isActive}" >name :{{name}}</h3>
    <h3 :class="{age :true}" >age :{{age}}</h3>
    <h3>Is age less than 30 : {{checkAge}} </h3>
    <router-link class="router" :to="routerChild" >Detail hobbies </router-link>
    <hr>
  </div>
</template>

<script>
export default {
   data(){
       //run 2th
       console.log('This is data')
       return{
           isActive:true
       }
   } ,
props:{
  
    id:{
        type:Number,
        require:true
    },
        age:{
        type:Number,
        require:true
    },
        name:{
        type:String,
        require:true
    }
},
computed:{
    //run 4th
    checkAge(){
        console.log('This is computed')
        console.log(this)
        return this.age >=30
    },
    routerChild(){
        return {
            name:"user-detail-router",
            params : {userId : this.id}
        }
        //user router name for optimize when project become to bigger
        //nếu sửa chỉ cần sửa 1 chỗ ở router.js
        // return {name:'user-detail-router',params:{userId :this.id}}
    }
},
watch:{
    $router(router){
        console.log(router )
    }
},
created(){
     //run 3th
     console.log('This is created')
},
beforeCreate(){
    //run first 
    console.log('this is before created')
}
}
</script>

<style scoped>
h3{
    color: rebeccapurple;
    margin: auto;
}
.name {
    color: red;
}
.age{
    color: black;
}
.id{
    color : olivedrab;
}
.router{
    text-decoration: none;
}
</style>