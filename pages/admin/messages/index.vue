<template>
  <div class="messages-container">

    <AdminMessages
      v-for="message in messages"
      :key="message.id"
      :id="message.id"
      :name="message.name"
      :message="message.message"
    />


  </div>
</template>

<script>

import AdminMessages from "~/components/admins/AdminMessages"

export default {

  layout: 'adminlayout',

  components:{
    AdminMessages
  },

  asyncData(){
    return new Promise((resolve, reject) =>{
      setTimeout(()=>{
        resolve({
          messages: [
            {
              id: "1",
              name: "John Doe 1",
              email: "johndoe@email.com",
              message: "This message was delivered to you courtesy of... "
            },
            {
              id: "2",
              name: "Jane Rose",
              email: "janerose@email.com",
              message: "This message was delivered to you courtesy of... "
            },
            {
              id: "3",
              name: "Jonathan Wanyama",
              email: "johnathan@email.com",
              message: "This message was delivered to you courtesy of... "
            }
          ],
        })
      }, 1500)
    })

  },

}

</script>

<style lang="scss" scoped>
  .messages-container{
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
  }
</style>
