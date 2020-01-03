<template>
    <div class="admin-menu-wrapper">
      <div class="admin-menu-header">
        <img src="/svg/logo-white.svg">


<!--MOBILE TOGGLE BUTTON SVG -->
        <svg id="Objects" @click="toggleMenu()" class="mobile-menu-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.5 36.13">
          <title>menu-icon</title><line class="cls-1" x1="2.63" y1="5.54" x2="34.13" y2="5.54"/>
          <line class="cls-1" x1="2.63" y1="17.77" x2="34.13" y2="17.77"/><line class="cls-1" x1="2.63" y1="30" x2="34.13" y2="30"/>
        </svg>
      </div>
<!--MOBILE TOGGLE BUTTON SVG -->



      <div class="admin-menu-links" v-bind:style="{ display: display }">
        <div @click="gotoDashboard(), toggleMenu()" class="router-links-wrapper">
    <!--DASHBOARD ICON SVG -->
            <svg id="Capa_1" class="admin-menu-icon" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>dashboard-icon</title><path d="M420,132.25a18.48,18.48,0,0,0-23.47-2.2c-27.65,18.84-166.32,113.6-181.22,128.5a55.43,55.43,0,0,0,78.39,78.39C308.6,322,403.36,183.36,422.2,155.72A18.48,18.48,0,0,0,420,132.25ZM267.56,310.81a18.48,18.48,0,0,1-26.13-26.13c5.79-5.72,45.16-33.8,93.6-67.47C301.36,265.65,273.29,305,267.56,310.81Z"/><path d="M103.21,383.68,80.4,394.81A198.62,198.62,0,0,1,67.94,226.9l26.14,12.54a18.48,18.48,0,1,0,16-33.32l-25.8-12.38A199.8,199.8,0,0,1,236,99v27.79a18.48,18.48,0,0,0,37,0V99a197.26,197.26,0,0,1,63.53,16.74,18.48,18.48,0,1,0,15.2-33.68A236.31,236.31,0,0,0,58.07,429a18.47,18.47,0,0,0,23.46,6.34l37.88-18.48a18.48,18.48,0,1,0-16.2-33.21Z"/><path d="M470.15,200.53a18.48,18.48,0,1,0-33.68,15.2,198.9,198.9,0,0,1-7.95,179.21l-23.81-11.34A18.48,18.48,0,0,0,388.83,417l38.8,18.48a18.47,18.47,0,0,0,23.3-6.41,235.94,235.94,0,0,0,19.22-228.5Z"/></svg>
      <!--MOBILE TOGGLE BUTTON SVG -->
            <p class="link-router"> Dashboard </p>
        </div>

<!--
        <router-link to="/products" class="router-links-wrapper">
    <!--DASHBOARD ICON SVG

            <svg id="Capa_1" class="admin-menu-icon" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>shop</title><path d="M297.78,397.55h64a36.33,36.33,0,0,0,36.28-36.29V312.15a36.32,36.32,0,0,0-36.28-36.28h-64a36.33,36.33,0,0,0-36.29,36.28v49.11A36.33,36.33,0,0,0,297.78,397.55ZM366,361.26a4.17,4.17,0,0,1-4.16,4.16h-64a4.17,4.17,0,0,1-4.16-4.16V312.15a4.17,4.17,0,0,1,4.16-4.16h64a4.17,4.17,0,0,1,4.16,4.16Z"/><path d="M500.66,183.18,430.56,59.91a16.08,16.08,0,0,0-13.93-8.15H108.54a15.9,15.9,0,0,0-13.93,8.15l-70,123.31a16,16,0,0,0-2.11,7.87,72.47,72.47,0,0,0,40.45,64.7V456.22A16.08,16.08,0,0,0,79,472.28H446.19a16.08,16.08,0,0,0,16.06-16.06V255.94a72.64,72.64,0,0,0,40.55-64.85A15.09,15.09,0,0,0,500.66,183.18ZM407.26,84l49.68,87.39H68.32L117.9,84ZM204.66,275.86H171A44.13,44.13,0,0,0,127,319.95V440.25H95V263.2a71.49,71.49,0,0,0,55.59-26.78,72,72,0,0,0,112.09,0,71.84,71.84,0,0,0,111.92,0,71.49,71.49,0,0,0,55.5,26.78v177H248.74V319.95A44.13,44.13,0,0,0,204.66,275.86Zm114-44.88a39.9,39.9,0,0,1-38-27.59h76A39.91,39.91,0,0,1,318.68,231Zm-112,0a40.1,40.1,0,0,1-38.06-27.59h76A39.91,39.91,0,0,1,206.68,231Zm-74-27.59A40,40,0,0,1,94.56,231h-.19a39.74,39.74,0,0,1-37.78-27.59Zm26.52,116.55a12,12,0,0,1,12-12h33.61a12,12,0,0,1,12,12V440.16H159.17ZM392.7,203.49h76a40,40,0,0,1-76,0Z"/>
            </svg>

    <!--MOBILE TOGGLE BUTTON SVG

          <p class="link-router"> Shop</p>
        </router-link>
-->
          <div @click="gotoBookings(), toggleMenu()" class="router-links-wrapper">

            <svg class="admin-menu-icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               width="380.832px" height="380.832px" viewBox="0 0 380.832 380.832" style="enable-background:new 0 0 380.832 380.832;"
               xml:space="preserve">
                <g>
                  <g>
                    <path d="M320.159,30.864h-47.243V12.5c0-6.904-5.597-12.5-12.5-12.5s-12.5,5.596-12.5,12.5v18.364h-45V12.5
                      c0-6.904-5.597-12.5-12.5-12.5c-6.903,0-12.5,5.596-12.5,12.5v18.364h-45V12.5c0-6.904-5.597-12.5-12.5-12.5
                      s-12.5,5.596-12.5,12.5v18.364H60.673c-6.903,0-12.5,5.597-12.5,12.5v324.968c0,6.903,5.597,12.5,12.5,12.5h259.486
                      c6.903,0,12.5-5.597,12.5-12.5V43.364C332.659,36.461,327.062,30.864,320.159,30.864z M307.659,355.832H73.173V55.864h34.743
                      v14.59c0,6.904,5.597,12.5,12.5,12.5s12.5-5.596,12.5-12.5v-14.59h45v14.59c0,6.904,5.597,12.5,12.5,12.5
                      c6.903,0,12.5-5.596,12.5-12.5v-14.59h45v14.59c0,6.904,5.597,12.5,12.5,12.5s12.5-5.596,12.5-12.5v-14.59h34.743V355.832z"/>
                    <path d="M264.416,139.758h-148c-6.903,0-12.5,5.597-12.5,12.5c0,6.903,5.597,12.5,12.5,12.5h148c6.903,0,12.5-5.597,12.5-12.5
                      C276.916,145.355,271.319,139.758,264.416,139.758z"/>
                    <path d="M264.416,209.758h-148c-6.903,0-12.5,5.598-12.5,12.5c0,6.903,5.597,12.5,12.5,12.5h148c6.903,0,12.5-5.597,12.5-12.5
                      C276.916,215.355,271.319,209.758,264.416,209.758z"/>
                    <path d="M264.416,279.758h-148c-6.903,0-12.5,5.598-12.5,12.5c0,6.903,5.597,12.5,12.5,12.5h148c6.903,0,12.5-5.597,12.5-12.5
                      C276.916,285.355,271.319,279.758,264.416,279.758z"/>
                  </g>
                </g>
            </svg>

                 <p class="link-router">Bookings</p>
          </div>

          <div @click="gotoMessages(), toggleMenu()" class="router-links-wrapper">

              <svg id="Capa_1" class="admin-menu-icon" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>messages-icon</title><path d="M419.85,91.47H103.3C76.13,91.47,54,112.69,54,138.78V359.42c0,26.09,22.1,47.31,49.27,47.31H419.85c27.17,0,49.27-21.22,49.27-47.31V138.78C469.11,112.69,447,91.47,419.85,91.47Zm0,273.5H103.3c-4,0-7.5-2.59-7.5-5.54V168L239,288.83a16.31,16.31,0,0,0,10.51,3.84h24.18a16.32,16.32,0,0,0,10.51-3.84L427.34,168V359.42C427.34,362.37,423.84,365,419.85,365ZM261.57,251.2l-139.25-118h278.5Z"/></svg>

                 <p class="link-router">Enquiries</p>
          </div>
        </div>

        <div @click="toggleMenu()" class="admin-menu-background" v-bind:style="{ display: display }">
        </div>


         <!-- <div class="subscriber-menu">
            <router-link to="" class="router-links-wrapper">
                 <p class="link-router">Subscribers</p>
            </router-link>

        </div> -->

      </div>
    </div>
</template>

<script>
    export default {

      data(){
        return {
            display : ''
        }
      },

      methods: {
        toggleMenu(){
          const mq = window.matchMedia( "(min-width: 50em)" );

          if (mq.matches) {
            //window is more than 500px;

            } else {
              if(this.display == '' || this.display == 'none'){
                this.display = 'block';

                //this.toggle_close = !this.toggle_close
                //this.toggle_open = !this.toggle_open
              }
              else {
                this.display = 'none';
                //this.toggle_open = !this.toggle_open
                //this.toggle_close = !this.toggle_close
              }
            }
        },

        gotoDashboard(){
          this.$router.replace('/admin')
        },

        gotoBookings(){
          this.$router.replace('/admin/bookings')
        },

        gotoMessages(){
          this.$router.replace('/admin/messages')
        }
      },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

<style lang="scss" scoped>
//CHECKING

  @import "~/assets/sass/app.scss";

  h1,h1,h3,h4,h5,h5,li,p{
    font-family:$primary-font;
    margin:0;
  }

  .admin-menu-wrapper{
    overflow-y: auto;

    @include breakpoint(tablet){
      width:100%;
      z-index: 9;
      height: 100%;
      z-index: 9999;
      position: static;
    }

    .admin-menu-header{
      background-color: #30373a;
      justify-content: center;
      align-items: center;
      display: flex;
      padding:1rem;
      height: 13vh;

      @include breakpoint(tablet){
        justify-content: space-between;
        height: auto;
      }

      img{
        height: 4rem;
        width:auto;

        @include breakpoint(tablet){
          height: 3rem;
          width:auto;
        }
      }

      .mobile-menu-icon {
        fill:none;
        display: none;
        stroke:$secondary-color;
        stroke-miterlimit:10;
        stroke-width:5px;
        height:2rem;
        width: auto;

        @include breakpoint(tablet){
          display: block;
        }
      }
    }
  }

    .admin-menu-links{
      height: 87vh;
      background-color: #30373a;

      @include breakpoint(tablet){
        display: none;
        position: fixed;
        left:0;
        height: 100vh;
        top: 0;
        width:12rem;
        z-index: 9999;
        padding-top: 3rem;
      }

    .router-links-wrapper{

      display: flex;
      align-items: center;
      padding: .5rem 1rem;

      &:hover{
        background-color:lighten($black-gray, 10);
      }
      p{
        margin:0;
      }

      .admin-menu-icon{
        fill:$secondary-color;
        width: 2rem;
        height: auto;
      }

      .link-router{
        padding-left:.5rem;
        color:$white;
      }

    }
  }

  .admin-menu-background{
    display: none;
    position: fixed;
    top:0;
    left: 0;
    width:100%;
    height: 100vh;
    z-index: 999;
    opacity: .7;
    background-color: $black;
  }

</style>
