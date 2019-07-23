<template>
  <div>
    <AppHeader/>
    <nuxt />
    <SubscriberForm/>
    <AppFooter/>
  </div>
</template>

<script>
import AppHeader from '~/layouts/user/AppHeader.vue'
import SubscriberForm from '~/components/base/SubscriberForm.vue'
import AppFooter from '~/layouts/user/AppFooter.vue'

export default {
  components: {
    AppHeader,
    SubscriberForm,
    AppFooter
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

</style>
