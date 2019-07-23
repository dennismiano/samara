<template>
    <div class="message-container">


        <div class="blog-content-wrapper">
          <h3> {{ name }} </h3>
          <p> {{ email }}</p>
          <p> {{ message }}</p>
        </div>

    </div>
</template>

<script>
  export default{
    props:['id', 'name', 'email', 'message']
  }
</script>

<style lang="scss" scoped>
  .blog-container{
    display: flex;
  }
  .blogimage{
    width:50%;
    height: 20rem;
  }

  .blog-content-wrapper{
    width:50%;
    height: auto;
    display: flex;
    flex-flow: column;
    justify-content: center;
  }
</style>
