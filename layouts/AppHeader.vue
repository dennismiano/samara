<style lang="scss" scoped>

@import "~/assets/sass/app.scss";

  .showClass{
    display: block;
  }

  .hideClass{
    display: none;
  }

  .menu-wrapper{

      @include breakpoint(tablet){
        flex-wrap: wrap;
        height: auto;
      }


    .menu-contacts-wrapper{
      display: flex;
      justify-content: flex-start;
      font-family: $primary-font;
      padding-left: 5%;
      padding-top:1rem;
      padding-bottom: 1rem;
      padding-right: 5%;
      background-color: $gray;


      img{
        width:2rem;
        height: 2rem;
      }

      .phone, .email{
        display: flex;
        align-items: center;

        p{
          padding-left:.5rem;
          font-size: $body-font;
          margin:0;
        }
      }

      .email{
        padding-left: 2rem;

        .contact-email{
          @include breakpoint(mobileonly){
            display: none;
          }
        }
      }


      @include breakpoint(tablet){
        align-items: flex-start;
        justify-content: flex-start;
        display: none;
      }
    }

    .menu-contents-wrapper{
        display: flex;
        flex-wrap:wrap;
        padding-left:5%;
        padding-right:5%;
        padding-top:2rem;
        padding-bottom:2rem;

        @include breakpoint(tablet){
          order:3;
          justify-content: space-between;
          padding-top:1rem;
          padding-bottom:1rem;
        }

        @include breakpoint(mobileonly){
          padding-top:.5rem;
          padding-bottom:.5rem;
          padding-left:1rem;
          padding-right:1rem;
        }

      .logo{
        width:25%;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        @include breakpoint(tablet){
          height: 10vh;
        }

        .logo-icon{
          height: 6rem;
          width:auto;

          @include breakpoint(tablet){
            height: 4rem;
            margin-left: .5rem;
          }
        }
      }

      .search-bar{
        width:50%;
        display: flex;
        align-items: center;

        @include breakpoint(tablet){
          order:3;
          width:100%;
        }

          input{
            @include form-inputs();
            width:70%;
            height: 4rem;
          }

          button{
            @include system-button($primary-color, $white);
            width:30%;
            height: 4rem;
          }
      }

      .menu-icons{

        width:25%;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        .cart-details{

          position: relative;

          .cart-icon{
            min-width:3.2rem;
            max-width: 3.2rem;
            height: auto;
            fill:$primary-color;
            margin-right: .5rem;
            transform: scaleX(-1);
          }

          .cart-badge{
            background-color: $black;
            padding:.25rem .5rem;
            border-radius: 1rem;
            position: absolute;
            top:0;
            left:0;
            color:$white;

          }
        }

        .mobile-menu-icon2{

          min-width:3.2rem;
          max-width: 3.2rem;
          height: auto;
          cursor: pointer;

          .cls-1{
            fill:#cb2027;
          }
          .cls-2{
            fill:#fff;
          }

        }

        .mobile-menu-icon{
          min-width:3.2rem;
          max-width: 3.2rem;
          height: auto;
          display: none;
          cursor: pointer;

          .cls-1{
            fill: $primary-color;
          }
          .cls-2{
            fill:#fff;
          }

          @include breakpoint(tablet){
            display: block;
          }
        }
      }

    }


      @include breakpoint(tablet){
        order: 1;
        width:100%;
        justify-content: space-between;
      }

    }

    .site-links{
      width: 100%;
      display: flex;
      justify-content: center;
      list-style: none;
      background-color:$primary-color;
      padding-top: 1rem;
      padding-bottom:1rem;

      @include breakpoint(tablet){
          width: 100%;
          background-color: $gray;
          display:none;
          flex-flow: column;
          height: 100vh;
          align-items: flex-start;
          border-top:1px solid $primary-color;
      }

      .site-link{
        padding-left:2rem;
        padding-right:2rem;
        color: $white;
        text-decoration: none;
        font-size: 1.7rem;
        font-family: $primary-font;


          @include breakpoint(tablet){
            color: $primary-color;
            padding-top:1rem;
            padding-bottom:1rem;
            display: block;
          }

        &:hover{
          text-decoration: underline;
        }
      }
    }


</style>


<template>
  <div>
    <div class="menu-wrapper">

          <div class="menu-contacts-wrapper">
            <div class="phone">
              <img src="/svg/phone.svg">
              <p> {{ contacts.phone }}</p>
            </div>

            <div class="email">
              <img src="/svg/email.svg">
              <p class="contact-email"> {{ contacts.email }}</p>
            </div>
          </div>

      <div class="menu-contents-wrapper">

          <div class="logo">
              <router-link to="/" class="site-link"><img class="logo-icon" src="/svg/logo.svg"></router-link>
          </div>

          <div class="search-bar">
            <input type="text" class="search-field" placeholder="search"/>
            <button class="search-button">Search</button>
          </div>
<!--
          <div class="menu-icons">
            <router-link to="shopping-cart"><div class="cart-details">
              <svg id="Layer_1" class="cart-icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46.84 45.33"><title>cart</title><path d="M15.17,34.56a4,4,0,1,0,4,4A4,4,0,0,0,15.17,34.56Zm-12-32v4h4l7.19,15.19-2.8,4.8a7.22,7.22,0,0,0-.4,2,4,4,0,0,0,4,4h24v-4H16a.42.42,0,0,1-.4-.4v-.2l1.8-3.4h14.8a3.66,3.66,0,0,0,3.4-2l7.2-13a1.11,1.11,0,0,0,.4-1,1.89,1.89,0,0,0-1.77-2H11.57l-1.79-4Zm32,32a4,4,0,1,0,4,4A4,4,0,0,0,35.17,34.56Z"/></svg>
              <p class="cart-badge">{{ inCart.length }}</p>
            </div></router-link>
-->

            <svg v-if="toggle_open" id="Layer_1" class="mobile-menu-icon" @click="toggleMenu(), toggleOpen()" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93.6 90.1"><title>mobile-icon</title><path class="cls-1" d="M16.15,8.2H79.45A5.68,5.68,0,0,1,85,14V76.08a5.68,5.68,0,0,1-5.53,5.82H16.15a5.68,5.68,0,0,1-5.53-5.82V14A5.68,5.68,0,0,1,16.15,8.2Z"/><path class="cls-2" d="M71,29.77H24.6a4.51,4.51,0,0,1,0-9H71a4.51,4.51,0,1,1,0,9Z"/><path class="cls-2" d="M71,50.07H24.6a4.51,4.51,0,0,1,0-9H71a4.51,4.51,0,1,1,0,9Z"/><path class="cls-2" d="M71,70.36H24.6a4.51,4.51,0,0,1,0-9H71a4.51,4.51,0,0,1,0,9Z"/>
            </svg>

            <svg v-if="toggle_close" id="Layer_1" class="mobile-menu-icon2" @click="toggleMenu(), toggleClose()" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93.6 90.1"><title>menu-close</title><circle class="cls-1" cx="46.96" cy="44.56" r="39.13"/><path class="cls-2" d="M57.21,28,47,38.2,36.29,27.53a4.51,4.51,0,0,0-6.36,6.36L40.6,44.57,29.93,55.24a4.51,4.51,0,0,0,6.36,6.36L47,50.93,57.21,61.17a4.51,4.51,0,1,0,6.36-6.36L53.32,44.57,63.57,34.32A4.51,4.51,0,1,0,57.21,28Z"/></svg>
          </div>
      </div>

      <div class="site-links hideClass" v-bind:style="{ display: display }">
        <router-link to="/" class="site-link">  home </router-link>
        <router-link to="/products" class="site-link">products </router-link>
        <router-link to="/poultry-farming" class="site-link"> poultry farming </router-link>
        <router-link to="/blog" class="site-link"> contact us </router-link>
        <!--<router-link :to="{ name: 'BlogPage', params: { guest } }" class="site-link">blog</router-link>-->
      </div>
    </div>
  </div>
</template>

<script>
    export default {

      data(){
        return{

          guest : true,

          contacts : {
            phone : '+254 710 959 864/+254 770 735 558 ',
            email : 'info@nemitypoultry.com',
          },

          display : '',
          toggle_open : true,
          toggle_close: false
        }
      },

      methods: {
        toggleMenu(){
          if(this.display == '' || this.display == 'none'){
            this.display = 'block';
          }
          else {
            this.display = 'none';
          }
        },

        toggleOpen(){
          this.toggle_close = !this.toggle_close
          this.toggle_open = !this.toggle_open
        },

        toggleClose(){
          this.toggle_close = !this.toggle_close
          this.toggle_open = !this.toggle_open
        }


        /*
        toggleMenu(){
          if(this.show_menu == '' || this.show_menu == false) {
            this.show_menu = true;
            this.hide_menu = false
          }
          else if(this.show_menu == true){
            this.show_menu = false;
            this.hide_menu = true
          }
        }
        */
      },

      computed: {
        inCart() { return this.$store.getters.inCart; }
      },


        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
