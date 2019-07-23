<template>
  <div class="admin-panel">
    <AdminMenu class="admin-menu-wrapper"/>
    <nuxt class="admin-contents" />
  </div>
</template>

<script>

import AdminMenu from '~/layouts/admin/AdminMenu.vue'

export default {
  components: {
    AdminMenu
  }
}
</script>

<style lang="scss" scoped>
  .admin-panel{
    display: flex;
    flex-flow: row nowrap;
  }
  .admin-menu-wrapper{
    width:20%;
  }
  .admin-contents{
    width:80%;
  }
</style>
