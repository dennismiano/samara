<template>
    <div class="slider-wrapper" >
      <div class="slides" v-for="number in [currentNumber]"  :key='number' @mouseover="stopSlider" @mouseleave="startSlider">

          <div class="slide" :style="{ backgroundImage: 'url('+ currentSlide.img + ')'}">

            <div class="slide-bg-transition">
            </div>

            <div class="slider-content-wrapper-text">
              <div class="slider-text">
                  <h2> {{ currentSlide.h2 }} </h2>
                  <p> {{ currentSlide.p }} </p>
                  <button @click="openBookingModal()">BOOK UNIT</button>
              </div>

              <div class="slider-content-wrapper-text-bg">
              </div>
            </div>

        </div>


      </div>
<!--
      <div class="nav-icons">
        <a @click="prev">
          <svg class="button-prev" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <title>next</title><circle class="cls-1" cx="256" cy="256" r="251"/>
            <path class="cls-2" d="M276,239.34,156.06,149.39V362.61L276,272.66v76.62h80V162.72H276Zm-93.28,70V202.7L253.78,256ZM302.64,189.37h26.65V322.63H302.64Z"/>
          </svg>
        </a>
        <a @click="next">
          <svg class="button-next" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <title>next</title><circle class="cls-1" cx="256" cy="256" r="251"/>
            <path class="cls-2" d="M276,239.34,156.06,149.39V362.61L276,272.66v76.62h80V162.72H276Zm-93.28,70V202.7L253.78,256ZM302.64,189.37h26.65V322.63H302.64Z"/>
          </svg>
        </a>
      </div>
    -->

    </div>
</template>

<script>
    export default {

      data(){
        return{

          slides: [
            {
              'h2': 'The Samara Estate',
              'p': 'Quality living',
              'img': '/img/slider1.jpg'
            },

            {
              'h2': 'The Samara Estate',
              'p': 'Property boasts of a modern gym facility within the shopping mall ',
              'img': '/img/slider2.jpg'
            },

            {
              'h2': 'The Samara Estate',
              'p': 'Incorporates the finest aspects of luscious green grass, scattered trees and beautiful architecture.',
              'img': '/img/slider3.jpg'
            },

/*
            'http://i.imgur.com/vYdoAKu.jpg',
            'http://i.imgur.com/PUD9HQL.jpg',
            'http://i.imgur.com/Lfv18Sb.jpg',
            'http://i.imgur.com/tmVJtna.jpg',
            'http://i.imgur.com/ZfFAkWZ.jpg'

            */
          ],
          currentNumber: 0,
          timer: null
          /*

          slider1 :{
            h1: 'THIS IS SLIDER 1',
            p:'This is slider 1 content'
          },

          slider2 :{
            h1: 'THIS IS SLIDER 2',
            p:'This is slider 1 content'
          },

          slider3 :{
            h1: 'THIS IS SLIDER 3',
            p:'This is slider 1 content'
          }

          */
        }
      },

        methods: {
          startSlider() {
           this.timer = setInterval(this.next, 4000);
          },

          stopSlider() {
           clearTimeout(this.timer);
           this.timer = null;
          },

          next() {
           this.currentNumber += 1
         },

         prev() {
           this.currentNumber -= 1
         },

         openBookingModal(){
           this.$store.commit('status/openBookingModal')
         }


        },

        computed: {

          currentSlide() {
          	return this.slides[Math.abs(this.currentNumber) % this.slides.length];
          }

          /*
          currentImage() {
          	return this.images[Math.abs(this.currentNumber) % this.images.length];
          }
          */
        },

        mounted() {
            this.startSlider();
            console.log('Component mounted.')
        }
    }
</script>

<style lang="scss" scoped>

    @import "~/assets/sass/app.scss";

    h1,h2,h3,h4,h5,h5,li,p{
      font-family:$primary-font;
      margin:0;
    }


  .slider-wrapper{
    height:60vh;
    position: relative;
    background-color: #989898;

    @include breakpoint(tablet){
      margin-left: 0;
      margin-right:0;
      height:60vh;
    }

    .slide{
      display: flex;
      background-position: left center;
      background-size: cover;
      background-image: url(/img/home-slider.jpg);
      font-family: $source-pro;
      height: 60vh;
      position: relative;
      justify-content: center;

      @include breakpoint(tablet){
        height:60vh;
      }

      .slide-bg-transition{
        position: absolute;
        bottom:0;
        right: 0;
        width: 100%;
        background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9864146342130602) 36%, rgba(0,0,0,0.8771709367340687) 53%, rgba(0,0,0,0.34215693113182777) 85%, rgba(0,0,0,0) 100%);
        height: 50%;
        opacity: .7;
      }
    }

    .slider-content-wrapper-text{
      position: relative;
      z-index: 9;
      width: 1020px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

          @include breakpoint(phablet){
              align-items: flex-end;
              justify-content: flex-start;
          }


      svg{
        fill: $secondary-color;
        width: 3rem;
        height: 3rem;
      }

      @include breakpoint(phablet){
        width:100%;
      }


      .slider-text{
          padding: 1rem;
          margin-bottom: 5rem;
          display: flex;
          flex-flow: column;
          align-items: center;
          margin-top:10rem;

          @include breakpoint(phablet){
            align-items: flex-start;
          }

        h2{
          font-size: 2rem;
          line-height: 2.2rem;
          color:$white;
          font-weight: 700;
          background-color: $secondary-color;
          padding:.3rem;


          @include breakpoint(tablet){
            font-size: 3rem;
          }

          @include breakpoint(phablet){
            font-size: 3rem;
          }

          @include breakpoint(mobileonly){
            font-size: 1.4rem;
            line-height: 1.3rem;
          }
        }

        p{
          color:$primary-color;
          margin-bottom: 1rem;
          line-height: 1.3rem;
          background-color: $white;
          padding:.3rem;
          margin-top: .5rem;

          @include breakpoint(phablet){
            font-size: .9rem;
            line-height: 1rem;
            margin-top: 0rem;
          }
        }

        button{
          @include system-button($white, $primary-color);
        }
      }

    }
/*
    .slider-content-wrapper-bg{
      background-color: $black;
      opacity: 0.5;
      position: absolute;
      left: 0;
      top:0;
      width:100%;
      height:100%;
    }
*/
    h1,h2,h3,h4,h5,h6,p{
      margin:0;
    }

    .image-slider{
      position: absolute;
      left: 0;
      top:0;
      width:100%;
      height: auto;

    }



    .button-next, .button-prev{

      .cls-1{
        fill:$secondary-color;
      }
      .cls-2{
        fill:$primary-color;
      }

      height: 3rem;
      width:auto;
      cursor: pointer;

      @include breakpoint(phablet){
          height: 2rem;
      }
    }
    .button-next{
      position: absolute;
      top:50%;
      margin-top:-1.5rem;
      right: -1.5rem;

      @include breakpoint(phablet){
          right: -1.5rem;
      }
    }

    .button-prev{
      position: absolute;
      top:50%;
      margin-top:-1.5rem;
      left: -1.5rem;
      transform:scaleX(-1);

      @include breakpoint(phablet){
          left: -1.5rem;
      }
    }


    //TRANSITIONS
      .fade-enter-active, .fade-leave-active {
       transition: all 0.8s ease;
       overflow: hidden;
       visibility: visible;
       opacity: 1;
       position: absolute;
      }
      .fade-enter, .fade-leave-to {
       opacity: 0;
       visibility: hidden;
      }
  }
</style>
