<template>
  <div class="messages-container">

    <div class="messages-header">
      <h4>Total Messages</h4>
      <h4>0</h4>
    </div>

    <AdminMessages
      v-for="message in messages"
      :key="message.id"
      :id="message.id"
      :name="message.name"
      :email="message.email"
      :message="message.message"
      :time="message.time"
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
              message: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. ",
              time:"13th Oct. 2019"
            },
            {
              id: "2",
              name: "Jane Rose",
              email: "janerose@email.com",
              message: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. ",
              time:"18th Sep. 2019"
            },
            {
              id: "3",
              name: "Jonathan Wanyama",
              email: "johnathan@email.com",
              message: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
              time:"3rd Aug. 2019"
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

  h1,h2,h3,h4,h5,h6,p{
    margin:0;
  }

  .messages-container{
    padding:5%;
    background-color: $light-gray;

    .messages-header{
      background-color: $white;
      display: flex;
      padding:1rem;
      justify-content: space-between;

      h4{
        font-size: 2rem;
      }
    }
  }

</style>
