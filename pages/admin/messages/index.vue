<template>
    <div class="messages-wrapper">


        <div class="empty-messages" v-if="no_messages">
            <svg class="empty-inbox-icon" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 682 682"><title>sad-message</title><path class="cls-1" d="M533,123.66H169a69.09,69.09,0,0,0-69,69V415.41a69.09,69.09,0,0,0,68.77,69V585.51L314,484.43H533a69.1,69.1,0,0,0,69-69V192.67A69.09,69.09,0,0,0,533,123.66Zm39.6,291.76A39.65,39.65,0,0,1,533,455H304.8L198.18,529.21V455H169a39.65,39.65,0,0,1-39.6-39.6V192.67a39.64,39.64,0,0,1,39.6-39.6H533a39.64,39.64,0,0,1,39.6,39.6Z"/><path class="cls-1" d="M351,321.92A113,113,0,0,0,276.48,350l-12,10.55,21.11,24,12-10.55a81.12,81.12,0,0,1,106.82-.08l12,10.55,21.11-24-12-10.56A112.85,112.85,0,0,0,351,321.92Z"/><path class="cls-1" d="M271,242h32v32H271Z"/><path class="cls-1" d="M399,242h32v32H399Z"/></svg>
            <p>inbox is empty!</p>
        </div>

        <div v-if="!no_messages" class="posted-messages-wrapper">

          <div class="total-messages">
            <h4>Total Messages</h4>
            <h4></h4>
          </div>


        </div>
    </div>
</template>
<script>
export default{
    layout: 'adminlayout'
}
</script>

<style  lang="scss" scoped>

@import '~/assets/sass/app.scss';


  .empty-messages{
    width:100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;

    .empty-inbox-icon{
      width: 15rem;
      height: 15rem;
    }
    .cls-1{fill:#a0a0a0;}

    p{
      margin:0;
      font-size: 1.5rem;
    }
  }

  .posted-messages-wrapper{
    background-color: $light-gray;
    padding:5%;
    min-height: 100vh;

    .total-messages{
      width:100%;
      background-color: $white;
      padding:1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .messagesDiv{
    margin-top:2rem;
  }



</style>
