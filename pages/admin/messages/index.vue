<template>
  <div class="messages-container">
    <div v-if="!loading">
      <div class="" v-if="messages != undefined">
        <div class="messages-header">
          <h4>Total Messages</h4>
          <h4>{{ messages.length }}</h4>
        </div>

        <AdminMessages
          v-for="message in messages"
          :key="message.id"
          :id="message.id"
          :name="message.name"
          :email="message.email"
          :message="message.message"
          :time="message.created_at"
        />

      </div>
      <div class="" v-else>
        <p>No messages yet.</p>
      </div>
    </div>


    <div class="" v-if="loading">
      <div class="" is="loader">
      </div>
    </div>

  </div>
</template>

<script>

import AdminMessages from "~/components/admins/AdminMessages"
import axios from '~/plugins/axios.js'
import loader from '~/components/loader/Loader.vue'

export default {

  layout: 'adminlayout',

  components:{
    AdminMessages, loader
  },

  /*asyncData(){
    return new Promise((resolve, reject) =>{


  },*/
  data(){
    return{
      messages:undefined,
      loading: true
    }
  },
  methods:{
    viewMessages(){
      return axios.post('/message/view/messages').then((res)=>{
        if (res.data.messages) {
          console.log(res.data);
          this.messages=res.data.messages;
          this.loading = false

        }
        if (res.data.error) {
          console.log('error',res.data.error);

        }

      }).catch(  (e)=>{
        console.log('e',e);

      } ).finally( ()=>{

      } );
    }

  },
  created(){
    this.viewMessages();
  }

}

</script>

<style lang="scss" scoped>
  @import '~/assets/sass/app.scss';

  @import "~/assets/sass/app.scss";

  h1,h1,h3,h4,h5,h5,li,p{
    font-family:$primary-font;
    margin:0;
  }

  .messages-container{
    padding:5%;
    background-color: darken($light-gray, 5%);

    .messages-header{
      background-color: $white;
      display: flex;
      padding:1rem;
      justify-content: space-between;

      h4{

      }
    }
  }

</style>
