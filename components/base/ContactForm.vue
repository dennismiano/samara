<template>
    <div class="contact-form-wrapper-element">
        <form>
          <div class="form-group">
            <input type="text" placeholder="your name" v-model="messageDetails.name">
          </div>

          <div class="form-group">
            <input type="email" placeholder="your email" v-model="messageDetails.email">
          </div>

          <div class="form-group">
            <textarea rows="7" placeholder="your message" v-model="messageDetails.message"></textarea>
          </div>

            <button  @click.prevent="sendMessage()">Send Message</button>
        </form>
    </div>
</template>

<script>
import axios from '~/plugins/axios.js';
    export default {
      data(){
        return{
           messageDetails:{
             name:'',
             email:'',
             message:''

           }
        }

      },
      methods:{
        sendMessage(){
          console.log('details is');
          console.log(this.messageDetails);

          return axios.post('/message/new/message',this.messageDetails).then(response=>{
              console.log(response.data);
              if (response.data.msg) {
                  this.messageDetails.email='';
                  this.messageDetails.name='';
                  this.messageDetails.message='';
                  alert(response.data.msg);

              }else if(response.data.error){
                console.log(response.data.error)

              }

           });

        }

      },
      mounted() {
            console.log('Component mounted.')
        }
    }
</script>

<style lang="scss" scoped>

@import "~/assets/sass/app.scss";

h1,h1,h3,h4,h5,h5,li,p,::placeholder, input, textarea, button{
  font-family:$primary-font;
  margin:0;
}

.contact-form-wrapper-element{
  color:$white;
  width:100%;

  h1{
    font-family: $primary-font;
    color: $secondary-color;
  }
}
  form{
    .form-group{
      display: flex;
    }
    input{
      @include form-inputs;
      margin-bottom: 1rem;

      &::placeholder{

      }
    }

    textarea{
      @include form-inputs;
      height: 7rem;
      padding-top: 1rem;

      &::placeholder{

      }
    }

    button{
      @include system-button($primary-color, $secondary-color);
      margin-top:1rem;
      padding-left:2rem;
      padding-right:2rem;
    }
  }
</style>
