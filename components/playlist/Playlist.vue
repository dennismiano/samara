<template>
    <div class="playlist-song">
      <p class="title">{{ song.title }}</p>
      <p class="singer">{{ song.name }}</p>
    </div>
</template>

<script>
  export default{
    props:['song', 'index']
  }
</script>

<style lang="scss" scoped>

    @import "~/assets/sass/app.scss";

    h1,h1,h3,h4,h5,h5,li,p,input{
      font-family:$primary-font;
      margin:0;
    }

  .playlist-song{
      background-color: $primary-color;
      padding: 1rem;

      &:hover{
        background-color: $secondary-color;
      }
    .title{
      color: $secondary-color;

      &:hover{
        color: $primary-color;
      }
    }

    .singer{
      color: $white;
    }
  }
</style>
