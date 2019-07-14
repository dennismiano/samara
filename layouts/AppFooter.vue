<template>

  <div class="footer-section">
      <div class="company-details-wrapper">
          <div class="company-over-view">
              <h1>Bulls Mega</h1>
              <p>We are an online market place that offers amazing deals for a wide variety of products. Its a one stop shop for all your household needs.</p>
          </div>

          <div class="company-contacts">
              <div class="phone-number">
                <img src="/svg/phone-white.svg">
                <p>+254 710 123 255</p>
              </div>

              <div class="email-address">
                <img src="/svg/email-white.svg">
                <p>info@bullsmega.com</p>
              </div>
          </div>

          <div class="social-icons">
            <a href=""><img src="/svg/facebook-white.svg"></a>
            <a href=""><img src="/svg/twitter-white.svg"></a>
            <a href=""><img src="/svg/linkedin-white.svg"></a>
          </div>
      </div>

      <div class="contact-form-wrapper">
        <ContactForm/>
      </div>
  </div>
</template>

<script>

import ContactForm from '~/components/ContactForm.vue'

    export default {

      components: {
        ContactForm
      },

        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

<style lang="scss" scoped>

@import "~/assets/sass/app.scss";

.footer-section{
  background-color: $black-gray;
  padding: 5% 10%;
  display: flex;

  @include breakpoint(tablet){
    flex-wrap:wrap;
    padding:10% 5%;
  }

  .company-details-wrapper{
    width:50%;
    padding:1rem;
    color:$white;
    font-family: $primary-font;

    @include breakpoint(tablet){
        width:100%;
        padding:0;
    }

    h1{
      font-size: 2rem;
      margin-bottom: 1rem;
      color:$secondary-color;
    }

    img{
      width:3rem;
      height: 3rem;
    }

    p{
      padding-right:4rem;
      font-size: $primary-font-size;

      @include breakpoint(tablet){
          padding-right:0;
      }
    }
    .company-contacts{
      padding-top: 1rem;
      margin-top: 2rem;
      border-top:1px solid $white;
      padding-bottom: 1rem;
      border-bottom:2px solid $white;
      margin-right:5rem;

      @include breakpoint(tablet){
          margin-right:0;
      }
    }

    .phone-number{
      display: flex;
      align-items: center;
      margin-bottom: 1rem;

      p{
        padding-left: 1rem;
          font-size: 1.3rem;
      }
    }

    .email-address{
      display: flex;
      align-items: center;

      p{
        padding-left: 1rem;
        font-size: 1.3rem;
      }
    }
  }

  .social-icons{
    padding-top:2rem;

    img{
      margin-right:1rem;
    }
  }

  .contact-form-wrapper{
    width:50%;

    @include breakpoint(tablet){
      margin-top:3rem;
      width:100%;
    }
  }

}

</style>
