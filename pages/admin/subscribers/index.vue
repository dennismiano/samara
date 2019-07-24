<template>
  <div class="subscribers-container">

    <Subscriber
      v-for="subscriber in subscribers"
      :key="subscriber.id"
      :id="subscriber.id"
      :name="subscriber.name"
      :email="subscriber.email"
      :time="subscriber.time"
    />


  </div>
</template>

<script>

import Subscriber from "~/components/admins/Subscribers"

export default {

  layout: 'adminlayout',

  components:{
    Subscriber
  },

  asyncData(){
    return new Promise((resolve, reject) =>{
      setTimeout(()=>{
        resolve({
          subscribers: [
            {
              id: "1",
              name: "John Doe 1",
              email: "johndoe@email.com",
              time: "13th June 2019"
            },
            {
              id: "2",
              name: "Jane Rose",
              email: "janerose@email.com",
              time: "5th Aug 2019"
            },
            {
              id: "3",
              name: "Jonathan Wanyama",
              email: "johnathan@email.com",
              time: "2nd Sep 2019"
            }
          ],
        })
      }, 1500)
    })

  },

}

</script>

<style lang="scss" scoped>

  @import '~/assets/sass/app.scss';

  .subscribers-container{
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    padding: 5%;
    background-color: $light-gray;
  }
</style>
