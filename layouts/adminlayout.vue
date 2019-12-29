<template>
  <div class="admin-panel">
    <AdminMenu class="admin-menu-wrapper"/>
    <nuxt class="admin-contents" />
  </div>
</template>

<script>

import AdminMenu from '~/layouts/Admin/AdminMenu.vue'

export default {
  components: {
    AdminMenu
  }
}
</script>

<style lang="scss" scoped>

@import '~/assets/sass/app.scss';


  .admin-panel{
    display: flex;
    flex-flow: row nowrap;
    height: 100vh;


    @include breakpoint(tablet){
      flex-flow: wrap;
    }
  }
  .admin-menu-wrapper{
    width:20%;
    height: 100vh;

    @include breakpoint(tablet){
      width:100%;
      height: auto;
    }
  }
  .admin-contents{
    width:80%;
    overflow-y: auto;
    height: 100vh;

    @include breakpoint(tablet){
      width:100%;
    }
  }
</style>
