<template>
  <div id="app">
      <div class="mainpage">
        <AppHeader class="app-menu" />
        <nuxt class="app-body" />
        <AppFooter class="app-footer" />
      </div>
  </div>
</template>

<script>
import AppHeader from '~/components/menu/AppHeader.vue'
import SubscriberForm from '~/components/base/SubscriberForm.vue'
import AppFooter from '~/components/menu/AppFooter.vue'

export default {
  components: {
    AppHeader,
    SubscriberForm,
    AppFooter
  }
}
</script>

<style lang="scss" scoped>

@import "~/assets/sass/app.scss";

h1,h1,h3,h4,h5,h5,li,p{
  font-family:$primary-font;
  margin:0;
}

body{
  margin:0;
}

.mainpage{
  position: relative;
  margin:0;

  .app-body{
    margin:0;
  }
}


</style>
