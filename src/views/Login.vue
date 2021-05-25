<template>
  <div class="container">
    <h1>Welcome !</h1>
      <form class="form">
        <input v-model="userName" type="text" placeholder="Username" />
        <input v-model="passWord" type="password" placeholder="Password" />
        <button @click="login" class="login-button" type="submit">Login</button>
      </form>
    </div>
</template>

<script>
import store from '../store'

export default {
    name: 'Login',
    data(){
        return{
            userName: '',
            passWord: '',
        }
    },
    methods:{
        login(){
            if(store.state.username == this.userName && store.state.password == this.passWord ){
               console.log('process login');
               this.$router.push("/");
            }
        }
    },
}
</script>

<style socped>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-weight: 300;
    /* outline: 1px solid red; */
}
.container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 500px;
    height: 330px;
    background-color: rgba(218, 218, 218, 0.5);
    border: 1px solid lightgray;
    border-radius: 15px;
    box-shadow: 2px 2px 3px #e6e6e6;
    padding: 20px;
    box-sizing: border-box;
}
.container h1 {
    text-align: center;
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 35px;
    margin-top: 10px;
}
.form {
    width: 300px;
    height: 50px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
}
.form input {
    border: none;
    outline: none;
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 10px;
}
.login-button {
    margin-top: 20px;
    box-shadow: 1px 1px 3px #e6e6e6;
    border: 1px solid rgba(0, 0, 0, 0.205);
    background-color: #fff;
    outline: none;
    width: 300px;
    padding: 10px 0;
    border-radius: 10px;
    font-size: 20px;
}
</style>