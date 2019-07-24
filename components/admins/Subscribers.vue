<template>
    <div class="subscriber-container">


        <div class="">
          <h3> {{ name }} </h3>
          <p> {{ email }}</p>
        </div>

    </div>
</template>

<script>
  export default{
    props:['id', 'name', 'email', 'time']
  }
</script>

<style lang="scss" scoped>

@import '~/assets/sass/app.scss';
h1,h2,h3,h4,h5,h6,p{
  margin:0;
}

.subscriber-container{
  background-color: $white;
  padding:1rem;
  margin-top:1rem;
}

</style>
