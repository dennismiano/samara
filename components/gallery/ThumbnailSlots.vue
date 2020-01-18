<template>
    <div>
        <div class="images-wrapper">
          <div class="image-placeholder">
              <div class="placeholder1" :style="{ backgroundImage: 'url('+ placeholder1 + ')'}" @click="openImageViewer()">
              </div>

              <div class="second-thumbnail">
                <div class="placeholder2" :style="{ backgroundImage: 'url('+ placeholder2 + ')'}" @click="openImageViewer()">
                </div>

                <div class="third-thumbnail">
                  <div class="placeholder3" :style="{ backgroundImage: 'url('+ placeholder3 + ')'}" @click="openImageViewer()">
                  </div>

                  <div class="placeholder4" :style="{ backgroundImage: 'url('+ placeholder4 + ')'}" @click="openImageViewer()">
                  </div>
                </div>
              </div>
          </div>
        </div>
    </div>
</template>

<script>
  export default{
    props:['thumbnails'],
    data(){
      return{
        placeholder1:'',
        placeholder2:'',
        placeholder3:'',
        placeholder4:''
      }
    },

    methods:{
      sortThumbnails(){
        if(this.thumbnails.length !== 0){
          this.placeholder1 = this.thumbnails[0]
          this.placeholder2 = this.thumbnails[1]
          this.placeholder3 = this.thumbnails[2]
          this.placeholder4 = this.thumbnails[3]
        }
      },

      openImageViewer(){
        this.$emit('openviewer')
      }
    },
    mounted(){
      this.sortThumbnails()
    }
  }
</script>

<style lang="scss" scoped>
@import "~/assets/sass/app.scss";

h1,h2,h3,h4,h5,h5,li,p,input{
  font-family:$primary-font;
  margin:0;
}
  .images-wrapper{
    display: flex;
    justify-content: center;
    width:100%;
    height: auto;

  }

  .image-placeholder{
    display: flex;
    width: 100%;

    @include breakpoint(phablet){
      flex-wrap: wrap;
    }

    .placeholder1{
      width:49.5%;
      height: 26rem;
      background-color: $gray;
      background-position: center;
      background-size: cover;

      @include breakpoint(phablet){
        width:100%;
        flex-wrap: wrap;
        height: 13rem;
      }
    }

    .second-thumbnail{
      display: flex;
      flex-flow: column;
      width:49.5%;
      margin-left:1%;

      @include breakpoint(phablet){
        width:100%;
        margin-top: .5rem;
        margin-left:0;
        flex-flow: row;
      }

      .placeholder2{
        width:100%;
        height: 13rem;
        background-color: $gray;
        background-position: center;
        background-size: cover;

        @include breakpoint(phablet){
          width:49.5%;
        }
      }

      .third-thumbnail{
            margin-top: .2rem;
            display: flex;


            @include breakpoint(phablet){
              flex-flow: column;
              width:49.5%;
              margin-top: 0;
              margin-left: 1%;
            }

        .placeholder3{
          width:49.5%;
          height: 13rem;
          background-color: $gray;
          background-position: center;
          background-size: cover;

          @include breakpoint(phablet){
            width:100%;
            height: 6.3rem;
          }
        }

        .placeholder4{
          width:49.5%;
          height: 13rem;
          margin-left: 1%;
          background-color: $gray;
          background-position: center;
          background-size: cover;

          @include breakpoint(phablet){
            width:100%;
            height: 6.3rem;
            margin-left: 0;
            margin-top: .4rem;
          }
        }
      }
    }

  }
</style>
