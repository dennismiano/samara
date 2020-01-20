<template>
  <div class="menu-wrapper">
    <div class="container-wrapper">

      <div class="logo">
        <img @click="goToHome()" class="logo-icon" src="/svg/logo.svg">

        <div  class="mobile-icon">
          <svg v-if="toggle_open"  @click="toggleMenu()" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             width="495.398px" height="495.398px" viewBox="0 0 495.398 495.398" style="enable-background:new 0 0 495.398 495.398;"
             xml:space="preserve">
              <g>
                <g>
                  <g>
                    <path d="M487.083,225.514l-75.08-75.08V63.704c0-15.682-12.708-28.391-28.413-28.391c-15.669,0-28.377,12.709-28.377,28.391
                      v29.941L299.31,37.74c-27.639-27.624-75.694-27.575-103.27,0.05L8.312,225.514c-11.082,11.104-11.082,29.071,0,40.158
                      c11.087,11.101,29.089,11.101,40.172,0l187.71-187.729c6.115-6.083,16.893-6.083,22.976-0.018l187.742,187.747
                      c5.567,5.551,12.825,8.312,20.081,8.312c7.271,0,14.541-2.764,20.091-8.312C498.17,254.586,498.17,236.619,487.083,225.514z"/>
                    <path d="M257.561,131.836c-5.454-5.451-14.285-5.451-19.723,0L72.712,296.913c-2.607,2.606-4.085,6.164-4.085,9.877v120.401
                      c0,28.253,22.908,51.16,51.16,51.16h81.754v-126.61h92.299v126.61h81.755c28.251,0,51.159-22.907,51.159-51.159V306.79
                      c0-3.713-1.465-7.271-4.085-9.877L257.561,131.836z"/>
                  </g>
                </g>
              </g>
          </svg>

        </div>
      </div>

      <div class="header-content-wrapper">
        <div class="contacts">
          <div class="phone">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                <g>
                  <g>
                    <path d="M436.992,74.953c-99.989-99.959-262.08-99.935-362.039,0.055s-99.935,262.08,0.055,362.039s262.08,99.935,362.039-0.055
                      c48.006-48.021,74.968-113.146,74.953-181.047C511.986,188.055,485.005,122.951,436.992,74.953z M387.703,356.605
                      c-0.011,0.011-0.022,0.023-0.034,0.034v-0.085l-12.971,12.885c-16.775,16.987-41.206,23.976-64.427,18.432
                      c-23.395-6.262-45.635-16.23-65.877-29.525c-18.806-12.019-36.234-26.069-51.968-41.899
                      c-14.477-14.371-27.483-30.151-38.827-47.104c-12.408-18.242-22.229-38.114-29.184-59.051
                      c-7.973-24.596-1.366-51.585,17.067-69.717l15.189-15.189c4.223-4.242,11.085-4.257,15.326-0.034
                      c0.011,0.011,0.023,0.022,0.034,0.034l47.957,47.957c4.242,4.223,4.257,11.085,0.034,15.326c-0.011,0.011-0.022,0.022-0.034,0.034
                      l-28.16,28.16c-8.08,7.992-9.096,20.692-2.389,29.867c10.185,13.978,21.456,27.131,33.707,39.339
                      c13.659,13.718,28.508,26.197,44.373,37.291c9.167,6.394,21.595,5.316,29.525-2.56l27.221-27.648
                      c4.223-4.242,11.085-4.257,15.326-0.034c0.011,0.011,0.022,0.022,0.034,0.034l48.043,48.128
                      C391.911,345.502,391.926,352.363,387.703,356.605z"/>
                  </g>
                </g>
            </svg>

            <div class="contact-details">
                <p>020 205 0853/+254 723 335 909</p>
            </div>
          </div>
        </div>

        <div class="links" v-bind:style="{ display: display }">
            <h3>MENU</h3>
            <p @click="toggleMenu(), goToHome()">HOME</p>
            <p @click="toggleMenu(), goToAbout()">ABOUT US</p>
            <p @click="toggleMenu(), goToProjects()">PROJECT</p>
            <p @click="toggleMenu(), goToGallery()">GALLERY</p>
            <p @click="toggleMenu(), goToAbout()">CONTACTS</p>
            <button @click="toggleMenu(), toggleModal(), bookUnit()">BOOK UNIT</button>
        </div>
      </div>

        <div class="links-background" @click="toggleMenu()" v-bind:style="{ display: display }">
        </div>

      <svg class="close-icon"  v-if="toggle_close"  @click="toggleMenu()" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 32 32" xml:space="preserve">
          <g>
            <g id="x_x5F_alt">
              <path style="fill:#030104;" d="M16,0C7.164,0,0,7.164,0,16s7.164,16,16,16s16-7.164,16-16S24.836,0,16,0z M23.914,21.086
                l-2.828,2.828L16,18.828l-5.086,5.086l-2.828-2.828L13.172,16l-5.086-5.086l2.828-2.828L16,13.172l5.086-5.086l2.828,2.828
                L18.828,16L23.914,21.086z"/>
            </g>
          </g>
      </svg>

    </div>
  </div>
</template>

<script>
    export default {
      data(){
        return{
          display:'',
          toggle_open : true,
          toggle_close: false,
          selected_unit:''
        }
      },

      methods:{
        goToHome(){
          this.$router.replace('/')
        },

        goToAbout(){
          this.$router.replace('/about')
        },

        goToProjects(){
          this.$router.replace('/projects')
        },

        goToGallery(){
          this.$router.replace('/gallery')
        },
        toggleMenu(){
          const mq = window.matchMedia( "(min-width: 50em)" );

          if (mq.matches) {
            //window is more than 500px;

            } else {
              if(this.display == '' || this.display == 'none'){
                this.display = 'block';

                this.toggle_close = !this.toggle_close
                this.toggle_open = !this.toggle_open
              }
              else {
                this.display = 'none';
                this.toggle_open = !this.toggle_open
                this.toggle_close = !this.toggle_close
              }
            }
        },

        toggleOpen(){
          this.toggle_close = !this.toggle_close
          this.toggle_open = !this.toggle_open
        },

        toggleClose(){

          const mq = window.matchMedia( "(min-width: 50em)" );

          if (mq.matches) {
            //window is more than 500px;

            } else {
              this.toggle_close = !this.toggle_close
              this.toggle_open = !this.toggle_open
              this.display = 'none';
            }

        },

        bookUnit(){
          this.$store.commit('status/setSelectedUnit', this.selected_unit)
        },

        toggleModal(){
          this.$store.commit('status/openBookingModal')
        }
      }
    }
</script>

<style lang="scss" scoped>
  @import "~/assets/sass/app.scss";

  h1,h1,h3,h4,h5,h5,li,p{
    font-family:$primary-font;
    margin:0;
  }



  .menu-wrapper{
    width: 100%;
    background-color: $white;
    height: auto;
    display: flex;
    justify-content: center;

    z-index: 99999;

    @include breakpoint(tablet){

    }

    .container-wrapper{
      padding-left: 5%;
      padding-right: 5%;
      display: flex;
      width:100%;
      position: relative;
      justify-content: space-between;

      @include breakpoint(tablet){
        justify-content: space-between;
        flex-flow: row wrap;
      }

      .header-content-wrapper{
        display: flex;
        flex-flow: column;
        justify-content: center;
      }

      .contacts{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-bottom: .5rem;

        @include breakpoint(tablet){
          display: none;
        }

        .phone{

          display: flex;

          svg{
            width:1.5rem;
            height: 1.5rem;
          }

          .contact-details{
            margin-left: .5rem;
          }
        }
      }

      .logo{
        width: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: .5rem;
        padding-bottom: .5rem;

        @include breakpoint(tablet){
          justify-content: space-between;
          width: 100%;
        }

        .logo-icon{
          height: 7rem;
          width: auto;

          @include breakpoint(tablet){
            height: 4rem;
          }
        }

        .mobile-icon{
          display: none;

          @include breakpoint(tablet){
            display: block;
          }

          svg{
            height: 2rem;
            width: auto;
            fill: $primary-color;
          }
        }

      }

      .links{
        display: flex;
        align-items: center;
        justify-content: flex-end;

        @include breakpoint(tablet){
          display: none;
          width:17rem;
          position: fixed;
          left:0;
          top:0;
          height: 100%;
          background-color: $white;
          z-index: 9999999;
          padding-left: 1rem;
          padding-top:3rem;

          p{
            margin-bottom: 1rem;
          }

        }

        h3{
          display: none;
          border-bottom: 1px solid $primary-color;
          margin-bottom: 1rem;

          @include breakpoint(tablet){
            display: block;
          }
        }

        p{
          padding-right: 1rem;
        }

        button{
          @include system-button($primary-color, $white);
        }
      }

      .links-background{
        display: none;
        position: fixed;
        left:0;
        top:0;
        height: 100%;
        width:100%;
        z-index: 999999;
        background-color: $black;
        opacity: .8;
      }

      .close-icon{
        position: fixed;
        left:14rem;
        width:2.5rem;
        height: 2.5rem;
        top:1rem;
        fill:$primary-color;
        z-index: 99999999;
      }
    }
  }

</style>
