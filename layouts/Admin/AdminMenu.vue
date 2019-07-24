<template>
    <div class="admin-menu-wrapper">
      <div class="admin-menu-header">
        <img src="/svg/admin-logo.svg">


<!--MOBILE TOGGLE BUTTON SVG -->
        <svg id="Objects" @click="toggleMenu()" class="mobile-menu-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.5 36.13">
          <title>menu-icon</title><line class="cls-1" x1="2.63" y1="5.54" x2="34.13" y2="5.54"/>
          <line class="cls-1" x1="2.63" y1="17.77" x2="34.13" y2="17.77"/><line class="cls-1" x1="2.63" y1="30" x2="34.13" y2="30"/>
        </svg>
      </div>
<!--MOBILE TOGGLE BUTTON SVG -->



      <div class="admin-menu-links" v-bind:style="{ display: display }">
        <nuxt-link to="/admin" class="router-links-wrapper">
    <!--DASHBOARD ICON SVG -->
            <svg id="Capa_1" class="admin-menu-icon" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>dashboard-icon</title><path d="M420,132.25a18.48,18.48,0,0,0-23.47-2.2c-27.65,18.84-166.32,113.6-181.22,128.5a55.43,55.43,0,0,0,78.39,78.39C308.6,322,403.36,183.36,422.2,155.72A18.48,18.48,0,0,0,420,132.25ZM267.56,310.81a18.48,18.48,0,0,1-26.13-26.13c5.79-5.72,45.16-33.8,93.6-67.47C301.36,265.65,273.29,305,267.56,310.81Z"/><path d="M103.21,383.68,80.4,394.81A198.62,198.62,0,0,1,67.94,226.9l26.14,12.54a18.48,18.48,0,1,0,16-33.32l-25.8-12.38A199.8,199.8,0,0,1,236,99v27.79a18.48,18.48,0,0,0,37,0V99a197.26,197.26,0,0,1,63.53,16.74,18.48,18.48,0,1,0,15.2-33.68A236.31,236.31,0,0,0,58.07,429a18.47,18.47,0,0,0,23.46,6.34l37.88-18.48a18.48,18.48,0,1,0-16.2-33.21Z"/><path d="M470.15,200.53a18.48,18.48,0,1,0-33.68,15.2,198.9,198.9,0,0,1-7.95,179.21l-23.81-11.34A18.48,18.48,0,0,0,388.83,417l38.8,18.48a18.47,18.47,0,0,0,23.3-6.41,235.94,235.94,0,0,0,19.22-228.5Z"/></svg>
      <!--MOBILE TOGGLE BUTTON SVG -->
            <p class="link-router"> Dashboard </p>
        </nuxt-link>

<!--
        <router-link to="/products" class="router-links-wrapper">
    <!--DASHBOARD ICON SVG

            <svg id="Capa_1" class="admin-menu-icon" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>shop</title><path d="M297.78,397.55h64a36.33,36.33,0,0,0,36.28-36.29V312.15a36.32,36.32,0,0,0-36.28-36.28h-64a36.33,36.33,0,0,0-36.29,36.28v49.11A36.33,36.33,0,0,0,297.78,397.55ZM366,361.26a4.17,4.17,0,0,1-4.16,4.16h-64a4.17,4.17,0,0,1-4.16-4.16V312.15a4.17,4.17,0,0,1,4.16-4.16h64a4.17,4.17,0,0,1,4.16,4.16Z"/><path d="M500.66,183.18,430.56,59.91a16.08,16.08,0,0,0-13.93-8.15H108.54a15.9,15.9,0,0,0-13.93,8.15l-70,123.31a16,16,0,0,0-2.11,7.87,72.47,72.47,0,0,0,40.45,64.7V456.22A16.08,16.08,0,0,0,79,472.28H446.19a16.08,16.08,0,0,0,16.06-16.06V255.94a72.64,72.64,0,0,0,40.55-64.85A15.09,15.09,0,0,0,500.66,183.18ZM407.26,84l49.68,87.39H68.32L117.9,84ZM204.66,275.86H171A44.13,44.13,0,0,0,127,319.95V440.25H95V263.2a71.49,71.49,0,0,0,55.59-26.78,72,72,0,0,0,112.09,0,71.84,71.84,0,0,0,111.92,0,71.49,71.49,0,0,0,55.5,26.78v177H248.74V319.95A44.13,44.13,0,0,0,204.66,275.86Zm114-44.88a39.9,39.9,0,0,1-38-27.59h76A39.91,39.91,0,0,1,318.68,231Zm-112,0a40.1,40.1,0,0,1-38.06-27.59h76A39.91,39.91,0,0,1,206.68,231Zm-74-27.59A40,40,0,0,1,94.56,231h-.19a39.74,39.74,0,0,1-37.78-27.59Zm26.52,116.55a12,12,0,0,1,12-12h33.61a12,12,0,0,1,12,12V440.16H159.17ZM392.7,203.49h76a40,40,0,0,1-76,0Z"/>
            </svg>

    <!--MOBILE TOGGLE BUTTON SVG

          <p class="link-router"> Shop</p>
        </router-link>
-->
          <nuxt-link to="/admin/messages" class="router-links-wrapper">

              <svg id="Capa_1" class="admin-menu-icon" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>messages-icon</title><path d="M419.85,91.47H103.3C76.13,91.47,54,112.69,54,138.78V359.42c0,26.09,22.1,47.31,49.27,47.31H419.85c27.17,0,49.27-21.22,49.27-47.31V138.78C469.11,112.69,447,91.47,419.85,91.47Zm0,273.5H103.3c-4,0-7.5-2.59-7.5-5.54V168L239,288.83a16.31,16.31,0,0,0,10.51,3.84h24.18a16.32,16.32,0,0,0,10.51-3.84L427.34,168V359.42C427.34,362.37,423.84,365,419.85,365ZM261.57,251.2l-139.25-118h278.5Z"/></svg>

                 <p class="link-router">Messages</p>
          </nuxt-link>

          <nuxt-link to="/admin/subscribers" class="router-links-wrapper">

              <svg class="admin-menu-icon" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>subscribers</title><path d="M126.62,187a50.68,50.68,0,1,0-50.68-50.68A50.74,50.74,0,0,0,126.62,187Zm0-75.49a24.81,24.81,0,1,1-24.81,24.81,24.83,24.83,0,0,1,24.81-24.81Zm0,0"/><path d="M255.11,155.74a60.37,60.37,0,1,0-60.37-60.37,60.44,60.44,0,0,0,60.37,60.37Zm0-94.87a34.5,34.5,0,1,1-34.5,34.5,34.53,34.53,0,0,1,34.5-34.5Zm0,0"/><path d="M421.72,202.27H349a33.35,33.35,0,0,0-12.52,2.43,38.87,38.87,0,0,0-35.67-23.52H209.44a38.85,38.85,0,0,0-35.41,23,33.35,33.35,0,0,0-11-1.88H90.28a33.56,33.56,0,0,0-33.52,33.52V303A33.44,33.44,0,0,0,73.88,332.3V430a12.94,12.94,0,0,0,12.94,12.94h79.64A12.94,12.94,0,0,0,179.39,430V332.3c.63-.35,1.24-.72,1.84-1.11a38.51,38.51,0,0,0,10.93,8.08V464.06A12.94,12.94,0,0,0,205.09,477H305.18a12.94,12.94,0,0,0,12.94-12.94V339.28a38.61,38.61,0,0,0,11.61-8.81,33.92,33.92,0,0,0,2.89,1.84V430a12.94,12.94,0,0,0,12.94,12.94h79.64A12.94,12.94,0,0,0,438.12,430V332.3A33.44,33.44,0,0,0,455.24,303V235.79a33.56,33.56,0,0,0-33.52-33.52ZM170.63,303.14a7.73,7.73,0,0,1-6.36,7.44,12.94,12.94,0,0,0-10.76,12.75v93.72H99.75V323.34A12.94,12.94,0,0,0,89,310.59,7.73,7.73,0,0,1,82.63,303V235.79a7.66,7.66,0,0,1,7.65-7.65H163a7.66,7.66,0,0,1,7.64,7.56Zm143.12,1.37A13.06,13.06,0,0,1,303,317.26,12.94,12.94,0,0,0,292.24,330V451.12H218V330a12.94,12.94,0,0,0-10.76-12.75,13.07,13.07,0,0,1-10.76-12.75v-1.33s0-.09,0-.14V235.79c0-.06,0-.12,0-.18V220a13,13,0,0,1,12.94-12.94h91.38A13,13,0,0,1,313.76,220ZM429.37,303a7.73,7.73,0,0,1-6.36,7.54,12.93,12.93,0,0,0-10.76,12.75v93.72H358.49V323.34a12.94,12.94,0,0,0-10.76-12.75,7.73,7.73,0,0,1-6.36-7.54V235.79a7.66,7.66,0,0,1,7.65-7.65h72.71a7.66,7.66,0,0,1,7.65,7.65V303Zm0,0"/><path d="M385.35,187a50.68,50.68,0,1,0-50.68-50.68A50.74,50.74,0,0,0,385.35,187Zm0-75.49a24.81,24.81,0,1,1-24.81,24.81,24.84,24.84,0,0,1,24.81-24.81Zm0,0"/>
              </svg>

                 <p class="link-router">Subscribers</p>
          </nuxt-link>


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
            display : '',
            height:''
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

        }
      },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

<style lang="scss" scoped>
//CHECKING

@import '~/assets/sass/app.scss';


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
      background-color: $black-gray;
      justify-content: center;
      align-items: center;
      display: flex;
      padding:1rem;
      height: 13vh;

      @include breakpoint(tablet){
        justify-content: space-between;
        height: 7rem;
      }

      img{
        height: 4rem;
        width:auto;
      }

      .mobile-menu-icon {
        fill:none;
        display: none;
        stroke:$primary-color;
        stroke-miterlimit:10;
        stroke-width:5px;
        width:3rem;

        @include breakpoint(tablet){
          display: block;
        }
      }
    }
  }

    .admin-menu-links{
      height: 87vh;
      background-color: $black-gray;

      @include breakpoint(tablet){
        display: none;
        position: absolute;
        left:0;
        height: calc(100% - 7em);
        top: 7rem;
        width:100%;
      }

    .router-links-wrapper{

      display: flex;
      align-items: center;
      padding: 1rem;
      border-top: 1px solid $gray;
      border-bottom: 1px solid $gray;

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
        padding-left:1rem;
        color:$white;
      }

    }
  }

</style>
