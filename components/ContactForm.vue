<template>
    <div class="contact-form-wrapper-element">
        <h1>Contact Us</h1>

        <form>
            <input type="text" placeholder="your name" v-model="messageDetails.name">
            <input type="email" placeholder="your email" v-model="messageDetails.email">
            <textarea rows="7" placeholder="your message" v-model="messageDetails.message"></textarea>
            <button  @click.prevent="sendMessage()">Send Message</button>
        </form>
    </div>
</template>

<script>
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

           window.axios.post('/api/message/new/message',this.messageDetails).then(response=>{
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

.contact-form-wrapper-element{
  color:$white;
  width:100%;

  h1{
    font-family: $primary-font;
    color: $secondary-color;
  }
}
  form{

    textarea, input{
      font-family: $primary-font;
    }

    input{
      @include form-inputs;
      border:none;
      border-bottom:1px solid $white;
      background-color: transparent;
      margin-bottom: 2rem;

      &::placeholder{
        color:$white;
        font-size:$primary-font-size;
      }
    }

    textarea{
      width:100%;
      border:none;
      border-bottom:1px solid $white;
      background-color: transparent;
      padding-left: 1rem;
      padding-right:1rem;


      &::placeholder{
        color:$white;
        font-size:$primary-font-size;
      }
    }

    button{
      @include system-button($primary-color, $secondary-color);
      margin-top:2rem;
      padding-left:2rem;
      padding-right:2rem;
      font-size: $primary-font-size;
      font-family: $primary-font;
    }
  }
</style>
