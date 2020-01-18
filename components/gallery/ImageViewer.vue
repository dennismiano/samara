<template>
    <div class="viewer-holder">

        <div class="viewer-wrapper">
          <img class="viewer-image" :src=" currentImage ">

          <div class="nav-buttons">
            <svg @click="prevImage()" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            	 viewBox="0 0 455 455" style="enable-background:new 0 0 455 455;" xml:space="preserve">
            <path d="M227.5,0C101.855,0,0,101.855,0,227.5S101.855,455,227.5,455S455,353.145,455,227.5S353.145,0,227.5,0z M199.476,355.589
            	l-21.248-21.178L284.791,227.5L178.228,120.589l21.248-21.178L327.148,227.5L199.476,355.589z"/>
            </svg>


            <svg @click="nextImage()" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            	 viewBox="0 0 455 455" style="enable-background:new 0 0 455 455;" xml:space="preserve">
            <path d="M227.5,0C101.855,0,0,101.855,0,227.5S101.855,455,227.5,455S455,353.145,455,227.5S353.145,0,227.5,0z M199.476,355.589
            	l-21.248-21.178L284.791,227.5L178.228,120.589l21.248-21.178L327.148,227.5L199.476,355.589z"/>
            </svg>

          </div>

          <svg @click="closeViewer()" class="close-button" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
            <g>
            	<g>
            		<path d="M256,0C114.844,0,0,114.844,0,256s114.844,256,256,256s256-114.844,256-256S397.156,0,256,0z M359.54,329.374
            			c4.167,4.165,4.167,10.919,0,15.085L344.46,359.54c-4.167,4.165-10.919,4.165-15.086,0L256,286.167l-73.374,73.374
            			c-4.167,4.165-10.919,4.165-15.086,0l-15.081-15.082c-4.167-4.165-4.167-10.919,0-15.085l73.374-73.375l-73.374-73.374
            			c-4.167-4.165-4.167-10.919,0-15.085l15.081-15.082c4.167-4.165,10.919-4.165,15.086,0L256,225.832l73.374-73.374
            			c4.167-4.165,10.919-4.165,15.086,0l15.081,15.082c4.167,4.165,4.167,10.919,0,15.085l-73.374,73.374L359.54,329.374z"/>
            	</g>
            </g>
            </svg>

        </div>

        <div class="viewer-background">
        </div>
    </div>
</template>

<script>
  export default{
    props:['current_image', 'images'],

    data(){
      return{
        current_number: 0
      }
    },

    computed:{
      currentImage(){
        return this.images[this.current_number]
      }
    },

    methods:{
      closeViewer(){
        this.$emit('closeviewer')
      },

      prevImage(){
        if(this.current_number > 0){
          this.current_number -= 1
        }
      },

      nextImage(){
        if(this.current_number < (this.images.length - 1)){
          this.current_number += 1
        }
      }
    },

    mounted(){
      //this.current = this.current_image
    }
  }
</script>

<style lang="scss" scoped>
@import "~/assets/sass/app.scss";

h1,h2,h3,h4,h5,h5,li,p,input{
  font-family:$primary-font;
  margin:0;
}

  .viewer-holder{

    z-index: 999999999;
    height: 100%;
    width:100%;
    position: fixed;
    top:0;
    left:0;
    display: flex;
    justify-content: center;
    align-items: center;

    .viewer-background{
      position: fixed;
      top:0;
      left:0;
      z-index: 9999999;
      height: 100%;
      width:100%;
      background-color: $black;
      opacity: .7;
    }


    .viewer-wrapper{
      z-index: 9999999999;
      height: 80vh;
      width: 80%;
      display: flex;
      align-items: center;
      position: relative;

      .close-button{
        position: absolute;
        top:0%;
        right: 1rem;
        width:2.5rem;
        height: 2.5rem;
        fill:$white;
      }

      @include breakpoint(phablet){
        width:90%
      }

      .nav-buttons{

        svg{
          width:2rem;
          height: 2rem;
          position: absolute;
          right: -2rem;
          top:50%;
          fill:$white;
          margin-top: 1rem;
          margin-right: 1rem;
          z-index: 9999999999;

          @include breakpoint(phablet){
            width:1.5rem;
            height:1.5rem;
            right: -2rem;
            margin-top: 0;
          }

          &:first-child{
            left:-2rem;
            transform: scaleX(-1);

              @include breakpoint(phablet){
                left:-1rem;
              }
          }
        }


      }

      .viewer-image{
        width:100%;
        height: auto;
      }
    }

  }
</style>
