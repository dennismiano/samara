<template>
    <div class="slider-wrapper" >
      <div class="slides" v-for="number in [currentNumber]"  :key='number' @mouseover="stopSlider" @mouseleave="startSlider">

          <div class="slide" :style="{ backgroundImage: 'url('+ currentSlide.img + ')'}">
          <div class="slider-content-wrapper">

            <div class="slider-content-wrapper-text">
              <h3> {{ currentSlide.h3 }} </h3>

              <div class="slider-content-wrapper-text-bg">
              </div>
            </div>

          </div>
        </div>


      </div>

      <div class="nav-icons">
        <a @click="prev">
            <svg id="Capa_1" class="button-prev" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.88 90.5"><title>arrow-right</title><path class="cls-1" d="M15.91,88.28,8.84,81.21,27.63,45.5,8.84,9.79l7.07-7.07L55.15,42a5,5,0,0,1,0,7.07Z"/></svg>
        </a>
        <a @click="next">
            <svg id="Capa_1" class="button-next" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.88 90.5"><title>arrow-right</title><path class="cls-1" d="M15.91,88.28,8.84,81.21,27.63,45.5,8.84,9.79l7.07-7.07L55.15,42a5,5,0,0,1,0,7.07Z"/></svg>
        </a>
      </div>
    </div>
</template>

<script>
    export default {

      data(){
        return{

          slides: [
            {
              'h3': 'AMAZING DEALS ON ELECTRONICS',
              'img': '/img/home-slider.jpg'
            },

            {
              'h3': 'FURNITURE',
              'img': '/img/slider2.jpg'
            },

            {
              'h3': 'HOME & OFFICE APPLICANCES',
              'img': '/img/slider3.jpg'
            },

            {
              'h3': 'ALCOHOL',
              'img': '/img/slide4.jpg'
            }
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
           this.timer = setInterval(this.next, 3000);
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

  .slider-wrapper{
    height:60vh;
    position: relative;
    background-color: #989898;

    @include breakpoint(tablet){
      margin-left: 0;
      margin-right:0;
    }

    .slide{
      display: flex;
      background-position: center;
      background-size: cover;
      justify-content: center;
      background-image: url(/img/home-slider.jpg);
      align-items: center;
      flex-flow:column;
      font-family: $source-pro;
      height: 60vh;
    }

    .slider-content-wrapper{
      position: relative;
      padding: 2rem;
      width: 80%;
      display: flex;
      justify-content: center;
      align-items: center;


      @include breakpoint(tablet){
        width: 80%;
      }

      @include breakpoint(mobileonly){
        width: 90%;
      }
    }

    .slider-content-wrapper-text{
      position: relative;
      z-index: 999;
      width: 60%;
      padding: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;

      @include breakpoint(phablet){
        height: 15rem;
        width: 15rem;
      }


      h3{
        font-size: 4em;
        line-height: 4rem;
        color:$white;
        font-weight: 700;
        text-align: center;

        @include breakpoint(tablet){
          font-size: 3rem;
        }

        @include breakpoint(phablet){
          font-size: 3rem;
        }

        @include breakpoint(mobileonly){
          font-size: 3rem;
            line-height: 3rem;
        }
      }

      p{
        font-size: 2rem;
        color:$white;
        text-align: center;

        @include breakpoint(phablet){
          font-size: $primary-font-size;
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
      fill:#fff;
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
      right: 2rem;

      @include breakpoint(phablet){
          right: 1rem;
      }
    }

    .button-prev{
      position: absolute;
      top:50%;
      margin-top:-1.5rem;
      left: 2rem;
      transform:scaleX(-1);

      @include breakpoint(phablet){
          left: 1rem;
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
