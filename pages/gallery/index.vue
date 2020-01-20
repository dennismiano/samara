<template>
    <div>
        <div class="gallery-header">
          <div class="gallery-header-container">
            <h2>Gallery</h2>
          </div>
        </div>

        <div class="gallery-content">
          <div class="gallery-content-container">
            <div v-for="album in albums">
                <div class="album-header">
                  <h3>{{ album.title }}</h3>
                </div>

                <ThumbnailSlots
                  :thumbnails = "album.thumbnails"
                    @openviewer = "openViewer()"
                />

                <ImageViewer
                  v-if="viewer"
                  :images = "album.thumbnails"
                  :current_image = "current"
                  @closeviewer = "closeViewer()"
                />

            </div>
          </div>
        </div>
    </div>
</template>

<script>
  import ThumbnailSlots from '~/components/gallery/ThumbnailSlots.vue'
  import ImageViewer from '~/components/gallery/ImageViewer.vue'

  export default{
    components:{
      ThumbnailSlots, ImageViewer
    },

    data(){
      return{
        current: '',
        viewer: false,

        albums:[
          {
            title: 'The Samara Estate',

            thumbnails:[
              '/img/slider1.jpg',
              '/img/slider2.jpg',
              '/img/slider3.jpg',
              '/img/slider1.jpg',
            ]
          },
        ]
      }
    },

    methods:{
      openViewer(){
        this.viewer =  true
      },

      closeViewer(){
        this.viewer =  false
      }

    }
  }
</script>

<style lang="scss" scoped>
  @import "~/assets/sass/app.scss";

  h1,h2,h3,h4,h5,h5,li,p,input{
    font-family:$primary-font;
    margin:0;
  }

  .gallery-header{
    display: flex;
    height: 200px;
    justify-content: center;
    background-image: url('/img/album/images/image3.jpg');
    background-position: center;
    background-size: cover;

    @include breakpoint(phablet){
      height: 150px;
    }


    .gallery-header-container{
      width:1020px;
      display: flex;
      align-items:flex-end;
      margin-left: 1rem;
      margin-right: 1rem;

      h2{
        background-color: $secondary-color;
        padding: .5rem 2rem;
        color: $primary-color;
      }
    }
  }
  .gallery-content{
    display: flex;
    justify-content: center;

    .gallery-content-container{
      width: 920px;
      margin-top: 4rem;
      margin-bottom: 5rem;
      margin-left:1rem;
      margin-right:1rem;
      position: relative;

      .album-header{
        margin-bottom:.5rem;
        text-align: center;
        font-size: 1.5rem;
      }

      @include breakpoint(phablet){
        margin-top: 2rem;
      }
    }
  }
</style>
