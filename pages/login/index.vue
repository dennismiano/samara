<template>
    <div class="login-form-wrapper">
      <div class="form-wrapper">
        <h3>Login before you proceed</h3>
        <LoginForm/>
      </div>
    </div>
</template>

<script>
  import LoginForm from '~/components/base/Login.vue'

  export default{
    components:{
      LoginForm
    },
    data(){
      return{
        login_details:{
          username: '',
          password:''
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

@import "~/assets/sass/app.scss";

  h1,h2,h3,h4,h5,h6,p,button,input{
    margin:0;
    font-family: $primary-font;
  }

  .login-form-wrapper{
    height: auto;
    background-color: darken($light-gray, 5);
    display: flex;
    justify-content: center;
    padding-top: 4rem;
    padding-bottom:4rem;
    padding-right: 1rem;
    padding-left: 1rem;
  }

  .form-wrapper{
    width: 500px;
    padding-right: 1rem;
    padding-left: 1rem;
    padding-top: 2rem;
    padding-bottom:2rem;
    background-color: $white;

    h3{
      margin-bottom: 1rem;
    }
  }
</style>
