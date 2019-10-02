<template>
    <div class="login-form-wrapper">
      <div class="form-wrapper">
        <h3>Login before you proceed</h3>

        <div class="form">
          <div class="form-group">
            <input type="email" placeholder="email" v-model="login_details.username">
          </div>

          <div class="form-group">
            <input type="password" placeholder="password" v-model="login_details.password">
          </div>

          <div class="form-group">
            <button>Login</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default{
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

  .form-group{
    display: flex;
  }

  .form{
    width:100%;
    display: flex;
    flex-flow: column;

    input{
      @include form-inputs;
      height: 3rem;
    }

    input[type=text]{

    }

    input[type=password]{
      border-top: none;
      margin-bottom: 1rem;
    }

    button{
      @include system-button($primary-color, $white);
      padding-left:2rem;
      padding-right: 2rem;
      height: 3rem;
    }
  }
</style>
