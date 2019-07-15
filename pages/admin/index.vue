<template>
    <div class="dashboard-container">
        <!-- <img src="/svg/dashboard-image.svg">-->
        <h1>Admin Dashboard</h1>
        <p>This dashboard helps you, as the owner of the website to manage content on the website with increadible ease. Here, you can add, edit, delete, and share content on your website without much hustle.</p>
    </div>
</template>

<script>
    export default {
        layout: 'adminlayout',

        mounted() {
            console.log('Component mounted.')
        }
    }
</script>


<style lang="scss" scoped>

@import "~/assets/sass/app.scss";

  .dashboard-container{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    height: 100%;
    padding:5%;

    img{
      width:20rem;
      height: auto;

      @include breakpoint(tablet){
        width:15rem;
      }
    }

    h1{
      text-align: center;
    }

    p{
      text-align: center;
      width:50%;
      color: $gray;

      @include breakpoint(tablet){
        width:80%;
      }

      @include breakpoint(mobileonly){
        width:100%;
      }
    }
  }
</style>
