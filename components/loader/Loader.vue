<template >
  <div class="loader-container">
      <div class="loader">

      </div>

  </div>




</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>

    @import "~/assets/sass/app.scss";

    h1,h2,h3,h4,h5,h6,p{
      margin:0;
      font-family: $primary-font;
    }

    .loader-container{
      padding-top:4rem;
      padding-bottom: 4rem;
    }

    .loader {
     border: 6px solid $gray;
     border-radius: 50%;
     border-top: 5px solid $primary-color;
     width: 2rem;
     height: 2rem;
     -webkit-animation: spin 2s linear infinite; /* Safari */
     animation: spin 1s linear infinite;
     margin:auto;
    }

    img.crp{
     max-width: 100%;
    }


    /* Safari */
    @-webkit-keyframes spin {
     0% { -webkit-transform: rotate(0deg); }
     100% { -webkit-transform: rotate(360deg); }
    }

    @keyframes spin {
     0% { transform: rotate(0deg); }
     100% { transform: rotate(360deg); }
    }

</style>
