<template>
  <div class="subscriber-section">
      <h2>Be the first to know </h2>
      <p class="subscribe-intro">Leave your email here and we'll let you know whenever we have new products or amazing offers on some of our items. Dont miss out </p>

      <div class="subscriber-form">
        <input class="name-field" type="text" placeholder="name"  v-model="subscriberDetails.name">
        <input class="email-field" type="email" placeholder="email" v-model="subscriberDetails.email">
        <button class="subscriber-button" @click.prevent="addSubscriber()">Subscribe</button>
      </div>
  </div>
</template>

<script>
    export default {
        data(){
          return{
             subscriberDetails:{
               email:'',
               name:''
             }
          }
        },
        methods:{
          addSubscriber(){
            window.axios.post('/api/subscriber/new/subscriber',this.subscriberDetails).then(response=>{
               console.log(response.data);
               if (response.data.msg) {
                   this.subscriberDetails.email='';
                   this.subscriberDetails.name='';
                   alert(response.data.msg);

               }else{
                 console.log(response.data.error);
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


@import '~/assets/sass/app.scss';

p,h1,h2,h3,h4,h5,h6{
  margin: 0;
}
.subscriber-section{
  background-color: $primary-color;
  color:$white;
  padding:10% 15%;
  display: flex;
  flex-flow: column;
  align-items: center;
  font-family: $primary-font;

  @include breakpoint(tablet){
    padding:20% 3%;
  }

  h2{
    font-weight: 600;
    font-size: 3rem;
    text-align: center;
    color:$secondary-color;

    @include breakpoint(tablet){
      font-size: 2.3rem;

    }
  }
  p{
    font-size: 1.5rem;
    font-weight: 300;
    padding-left:10%;
    padding-right:10%;
    text-align: center;

    @include breakpoint(tablet){
      padding-left:3%;
      padding-right:3%;
    }
  }

  .subscribe-intro{
    width:80%;
    color:$white;
  }

  .subscriber-form{
    display: flex;
    align-items: center;
    width:60%;
    font-weight: 600;
    font-size: 1.7rem;
    margin-top: 1rem;

    @include breakpoint(tablet){
      width:80%;
    }

    @include breakpoint(phablet){
      width:90%;
      flex-wrap:wrap;
    }


    input{
      @include form-inputs();
      background-color:transparent;
      color:$secondary-color;
      font-size: $primary-font-size;
      height: 4rem;
      border-color: $secondary-color;

      @include breakpoint(phablet){
        width:100%;
        padding-left: 1rem;
        border-top-right-radius: .5rem;
        border-bottom-right-radius:.5rem;
      }
    }

    input::placeholder{
      color:$secondary-color;
      font-size: 1.5rem;
      font-weight: 400;

      @include breakpoint(phablet){
        font-size: $primary-font-size;
      }
    }

    button{
    	background-color: $secondary-color;
    	color:$primary-color;
    	display: flex;
    	align-items: center;
    	justify-content: center;
      height: 4rem;
      border: 1px solid $secondary-color;
      font-size: $primary-font-size;

      @include breakpoint(phablet){
        width:100%;
        margin-top:1rem;
        border-top-left-radius: .5rem;
        border-bottom-left-radius:.5rem;
      }
    }
  }
}
</style>
