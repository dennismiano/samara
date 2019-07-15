<template>
  <div>
    <AdminMenu/>
    <nuxt/>
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
