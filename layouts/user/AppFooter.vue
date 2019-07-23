<template>

  <div class="footer-section">
      <div class="company-details-wrapper">
          <div class="company-over-view">
              <h1>Bulls Mega</h1>
              <p>We are an online market place that offers amazing deals for a wide variety of products. Its a one stop shop for all your household needs.</p>
          </div>

          <div class="company-contacts">
              <div class="phone-number">
                <svg class="contact-icon" id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 384"><title>phone</title><path d="M330,248a186.79,186.79,0,0,1-58.66-9.34c-9.18-3.13-20.47-.26-26.08,5.5l-37,27.93c-42.9-22.9-69.33-49.32-91.92-91.9l27.1-36A26.59,26.59,0,0,0,150,117.16a187.08,187.08,0,0,1-9.38-58.76A26.43,26.43,0,0,0,114.24,32H53.82a26.43,26.43,0,0,0-26.4,26.4C27.42,225.26,163.17,361,330,361a26.43,26.43,0,0,0,26.4-26.4V274.35A26.43,26.43,0,0,0,330,248Z"/><path d="M335.41,168.62h21C356.43,93.3,295.15,32,219.82,32V53A115.73,115.73,0,0,1,335.41,168.62Z"/><path d="M293.37,168.62h21A94.67,94.67,0,0,0,219.81,74v21A73.65,73.65,0,0,1,293.37,168.62Z"/><path d="M251.33,168.62h21a52.6,52.6,0,0,0-52.53-52.55v21A31.55,31.55,0,0,1,251.33,168.62Z"/></svg>
                <p>+254 710 123 255</p>
              </div>

              <div class="email-address">
                <svg class="contact-icon" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>email icon</title><path d="M255.57,299.57h.49a20.74,20.74,0,0,0,9.83-3,21.44,21.44,0,0,0,8-9.2L358,66.14a10.39,10.39,0,0,0-9-14,42.11,42.11,0,0,0-23.75,5.48L20.38,234.13A41.06,41.06,0,0,0,3.12,253.76,10.35,10.35,0,0,0,3.66,263a10.45,10.45,0,0,0,7.73,5.14l242.83,31.34A9.93,9.93,0,0,0,255.57,299.57Z"/><path d="M502,290.6,398.37,110.47a10.4,10.4,0,0,0-9.74-5.12,10.29,10.29,0,0,0-8.81,6.58L302.42,315.56l-1,1.93a40.8,40.8,0,0,1-36.45,22L263,339.4l-224.67-29a10.32,10.32,0,0,0-9.87,4.45A10.21,10.21,0,0,0,28,325.62L96,443.74H67.63A10.26,10.26,0,0,0,57.35,454v20.46a10.26,10.26,0,0,0,10.28,10.23H456.06a10.26,10.26,0,0,0,10.28-10.23V454a10.26,10.26,0,0,0-10.28-10.23H319l168.1-97.35A41,41,0,0,0,502,290.6Z"/></svg>
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

import ContactForm from '~/components/base/ContactForm.vue'

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

    .contact-icon{
      width:2rem;
      height: 2rem;
      fill:$secondary-color;
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
