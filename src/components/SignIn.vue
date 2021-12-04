<template>
  <div>
    <h1>SigIn components {{count}}</h1>
<button @click="increment">Add</button>
      <div>
     <form action="/abc" method="GET" >
    <section>
          <label for="userName">
              username
          </label>
          <input type="text" name="" @input="username($event)" id="userName">
      </section>
    <section>
          <label for="password">
              password
          </label>
          <input type="text" name="" @input="password1($event)" id="password">
    </section>
     <section class="submit">
          <button @click="submitForm($event)">Submit</button>
      </section>
      </form>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      count :0
    }
  },
  methods: {
    username(e){
        console.log(e.target.value)
    },
    password1(e){
        console.log(e.target.value)
    },
    increment(){
      this.count = ++this.$store.state.count;
    }
  },
  //cannot change is data in computed => because side effect
  // =>explain neee : https://eslint.vuejs.org/rules/no-side-effects-in-computed-properties.html
  // computed:{
  //   increment2(){
  //     let x = ++this.$store.state.count;
  //     return x
  //   }
// }
}
</script>

<style>

</style>