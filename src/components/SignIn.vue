<template>
  <form action="action_page.php">
  <div class="container">
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    <hr>

    <label for="username"><b>Username</b></label>
    <input type="text" placeholder="Enter username" :maxlength="5" minlength="20" name="username" v-model="username" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" v-model="password1"  minlength="5" maxlength="8" required>

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" minlength="5" maxlength="8" name="psw-repeat" v-model="password2" required>
    <hr>
    <button type="submit" class="registerbtn" @click="submit($event)">Register</button>
    <hr>
    <p v-for="error in errors" :key="error">
      <span class='error'>{{error}} </span><br>
    </p>
  </div>

  <div class="container ">
    <p>Already have an account? <a href="#">Sign in</a>.</p>
  </div>
</form>
</template>

<script>
export default {
data(){
  return{
    username:'',
    password1:'',
    password2:'',
    errors:[]
  }
},
beforeUpdate(){
  console.log(this.username[0])
},
methods:{
  submit(e){
    e.preventDefault();
    this.errors = []
    if(this.password1.length<5 || this.password2.length <5 ){
     this.errors.push('password require min length : 5')
      return;
    }
    this.checkContain(this.password1)
    if(!(this.password1===this.password2)){
     this.errors.push('password confirm not match')
     return;
    }
  } ,
  checkContain(value){
    let upper_case_array=['A','B','C','D','E','F','G','H']
    if(upper_case_array.indexOf(value[0])==-1){
    this.errors.push('The fist letter of password must be uppercase')
     }
    return false;
  }
}
}
</script>

<style>
* {box-sizing: border-box}

/* Add padding to containers */
.container {
  padding: 16px;
  margin: auto;
  width: 50%;
}

/* Full-width input fields */
input[type=text], input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

/* Overwrite default styles of hr */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for the submit/register button */
.registerbtn {
  background-color: #04AA6D;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.registerbtn:hover {
  opacity:1;
}

/* Add a blue text color to links */
a {
  color: dodgerblue;
}

/* Set a grey background color and center the text of the "sign in" section */
.signin {
  background-color: #f1f1f1;
  text-align: center;
}
.error{
  color : red;
}
</style>