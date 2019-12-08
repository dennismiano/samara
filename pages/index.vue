<template>

  <div class="home-wrapper">
    <div class="contents-holder">
      <div class="header">
        <div class="search-form">
            <input type="text" placeholder="search music">

            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               viewBox="0 0 511.999 511.999" style="enable-background:new 0 0 511.999 511.999;" xml:space="preserve">
                <g>
                  <g>
                    <path d="M508.874,478.708L360.142,329.976c28.21-34.827,45.191-79.103,45.191-127.309c0-111.75-90.917-202.667-202.667-202.667
                      S0,90.917,0,202.667s90.917,202.667,202.667,202.667c48.206,0,92.482-16.982,127.309-45.191l148.732,148.732
                      c4.167,4.165,10.919,4.165,15.086,0l15.081-15.082C513.04,489.627,513.04,482.873,508.874,478.708z M202.667,362.667
                      c-88.229,0-160-71.771-160-160s71.771-160,160-160s160,71.771,160,160S290.896,362.667,202.667,362.667z"/>
                  </g>
                </g>
            </svg>
        </div>

        <div class="user-details">
          <svg class="notification-icon" id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m450.201 407.453c-1.505-.977-12.832-8.912-24.174-32.917-20.829-44.082-25.201-106.18-25.201-150.511 0-.193-.004-.384-.011-.576-.227-58.589-35.31-109.095-85.514-131.756v-34.657c0-31.45-25.544-57.036-56.942-57.036h-4.719c-31.398 0-56.942 25.586-56.942 57.036v34.655c-50.372 22.734-85.525 73.498-85.525 132.334 0 44.331-4.372 106.428-25.201 150.511-11.341 24.004-22.668 31.939-24.174 32.917-6.342 2.935-9.469 9.715-8.01 16.586 1.473 6.939 7.959 11.723 15.042 11.723h109.947c.614 42.141 35.008 76.238 77.223 76.238s76.609-34.097 77.223-76.238h109.947c7.082 0 13.569-4.784 15.042-11.723 1.457-6.871-1.669-13.652-8.011-16.586zm-223.502-350.417c0-14.881 12.086-26.987 26.942-26.987h4.719c14.856 0 26.942 12.106 26.942 26.987v24.917c-9.468-1.957-19.269-2.987-29.306-2.987-10.034 0-19.832 1.029-29.296 2.984v-24.914zm29.301 424.915c-25.673 0-46.614-20.617-47.223-46.188h94.445c-.608 25.57-21.549 46.188-47.222 46.188zm60.4-76.239c-.003 0-213.385 0-213.385 0 2.595-4.044 5.236-8.623 7.861-13.798 20.104-39.643 30.298-96.129 30.298-167.889 0-63.417 51.509-115.01 114.821-115.01s114.821 51.593 114.821 115.06c0 .185.003.369.01.553.057 71.472 10.25 127.755 30.298 167.286 2.625 5.176 5.267 9.754 7.861 13.798z"/>
          </svg>

          <svg class="settings-icon" id="Capa_1" enable-background="new 0 0 551.13 551.13" height="512" viewBox="0 0 551.13 551.13" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m312.467 551.13h-73.803c-7.047 0-13.371-4.272-15.995-10.832l-14.397-35.993c-16.331-4.777-32.04-11.302-46.892-19.409l-35.623 15.272c-6.459 2.691-13.977 1.312-18.955-3.667l-52.19-52.173c-4.978-4.978-6.425-12.48-3.65-18.972l15.255-35.623c-8.124-14.902-14.633-30.611-19.409-46.858l-35.993-14.431c-6.526-2.623-10.815-8.947-10.815-15.978v-73.803c0-7.03 4.289-13.354 10.815-15.978l35.993-14.431c4.777-16.247 11.286-31.956 19.409-46.858l-15.255-35.623c-2.775-6.492-1.329-13.994 3.65-18.972l52.19-52.173c4.978-4.978 12.497-6.358 18.955-3.667l35.623 15.272c14.851-8.107 30.56-14.633 46.892-19.409l14.397-35.993c2.624-6.559 8.948-10.831 15.995-10.831h73.803c7.047 0 13.371 4.272 15.995 10.832l14.397 35.993c16.331 4.777 32.04 11.302 46.892 19.409l35.623-15.272c6.475-2.691 13.977-1.312 18.955 3.667l52.19 52.173c4.978 4.978 6.425 12.48 3.65 18.972l-15.255 35.623c8.124 14.902 14.633 30.611 19.409 46.858l35.993 14.431c6.526 2.624 10.815 8.948 10.815 15.978v73.803c0 7.03-4.289 13.354-10.815 15.978l-35.993 14.431c-4.777 16.247-11.286 31.956-19.409 46.858l15.255 35.623c2.775 6.492 1.329 13.994-3.65 18.972l-52.19 52.173c-4.978 4.978-12.48 6.358-18.955 3.667l-35.623-15.272c-14.851 8.107-30.56 14.633-46.892 19.409l-14.397 35.993c-2.624 6.559-8.948 10.831-15.995 10.831zm-62.147-34.445h50.491l13.237-33.1c2.052-5.113 6.408-8.948 11.757-10.293 19.09-4.878 37.271-12.413 54.023-22.403 4.76-2.826 10.546-3.162 15.608-1.043l32.781 14.061 35.707-35.69-14.044-32.764c-2.17-5.079-1.783-10.865 1.026-15.608 10.024-16.853 17.559-35.017 22.369-54.023 1.362-5.348 5.18-9.688 10.293-11.74l33.117-13.253v-50.525l-33.117-13.254c-5.113-2.052-8.931-6.391-10.293-11.74-4.81-19.006-12.345-37.17-22.369-54.023-2.809-4.743-3.196-10.529-1.026-15.608l14.044-32.764-35.707-35.69-32.781 14.061c-5.063 2.119-10.848 1.783-15.608-1.043-16.752-9.991-34.933-17.526-54.023-22.403-5.349-1.346-9.705-5.18-11.757-10.293l-13.237-33.1h-50.491l-13.237 33.1c-2.052 5.113-6.408 8.948-11.757 10.293-19.09 4.878-37.271 12.413-54.023 22.403-4.743 2.826-10.579 3.162-15.608 1.043l-32.781-14.061-35.707 35.69 14.044 32.764c2.17 5.079 1.783 10.865-1.026 15.608-10.024 16.853-17.559 35.017-22.369 54.023-1.362 5.348-5.18 9.688-10.293 11.74l-33.117 13.254v50.525l33.117 13.253c5.113 2.052 8.931 6.391 10.293 11.74 4.81 19.006 12.345 37.17 22.369 54.023 2.809 4.743 3.196 10.529 1.026 15.608l-14.044 32.764 35.707 35.69 32.781-14.061c5.029-2.119 10.865-1.783 15.608 1.043 16.752 9.991 34.933 17.526 54.023 22.403 5.348 1.346 9.705 5.18 11.757 10.293 0 0 13.237 33.1 13.237 33.1zm283.587-204.219h.336z"/><path d="m275.565 413.348c-75.972 0-137.783-61.794-137.783-137.783s61.81-137.783 137.783-137.783 137.783 61.794 137.783 137.783-61.81 137.783-137.783 137.783zm0-241.12c-56.983 0-103.337 46.354-103.337 103.337s46.353 103.337 103.337 103.337 103.337-46.354 103.337-103.337-46.353-103.337-103.337-103.337z"/>
          </svg>

            <div class="user-avatar">
            </div>
        </div>


      </div>

      <div class="content-wrapper">
          <div class="main-section">
              <Slider/>
          </div>

          <div class="side-section">
              <div class="playlist">
                  <h3>Playlist</h3>

                  <div class="playlist-music">
                      <Playlist
                        v-for="(song, index) in playlist"
                        :key = song.id
                        :song = "song"
                        :index = "index"
                      />
                  </div>
              </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>

import Slider from '~/components/base/Slider.vue'
import Playlist from '~/components/playlist/Playlist.vue'

export default {
  components: {
    Slider, Playlist
  },

  data(){
    return{
      playlist:[
        {
          'title': 'Walk With Me Lord',
          'name': 'John Munyesi',
          'img': '/img/cover1.jpg'
        },

        {
          'title': 'In Jesus Steps',
          'name': 'Carol Wainaina',
          'img': '/img/cover2.jpg'
        },

        {
          'title': 'Here I Am. Send Me.',
          'name': 'Carol Wainaina',
          'img': '/img/cover1.jpg'
        },

        {
          'title': 'Agape Love',
          'name': 'Mista C',
          'img': '/img/cover2.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

  @import "~/assets/sass/app.scss";

  h1,h1,h3,h4,h5,h5,li,p,input{
    font-family:$primary-font;
    margin:0;
  }

  body{
    margin:0;
  }

  .home-wrapper{
    background-color: lighten($primary-color, 5);
    width: calc(100% - 20rem);
    min-height: 100vh;
    position: absolute;
    right: 0;
    top:0;
    padding: 2rem;

    @include breakpoint(tablet){
      width:100%;
      position: relative;
    }

    .contents-holder{
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-wrap: wrap;
    }

    .header{
      width:100%;
      display: flex;
      align-items: center;
      height: 7rem;

      .search-form{
        background-color: $primary-color;
        display: flex;
        padding: .5rem;
        align-items: flex-end;
        justify-content: space-between;
        margin-bottom: 1rem;
        width: 70%;

        svg{
          height: 2rem;
          fill: $white;
          width:auto;
        }
        input{
          width: 100%;
          height: 2rem;
          font-size: 1.2rem;
          color: $white;
          background-color: transparent;
          border: none;
        }
      }

      .user-details{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 30%;

          svg{
            height: 1.5rem;
            width: auto;
            fill: $white;
            margin-right: .5rem;
          }

        .user-avatar{
          background-image: url('/img/avatar.jpg');
          width:3rem;
          height: 3rem;
          background-position: center;
          background-size: cover;
          border-radius: 50%;
        }
      }
    }

    .content-wrapper{
      width:100%;
      display: flex;
      flex-wrap: wrap;


      .main-section{
        width: 70%;

        @include breakpoint(mobileonly){
          width:100%;
          position: relative;
        }
      }

      .side-section{
        width: 30%;

        @include breakpoint(mobileonly){
          width:100%;
          position: relative;
        }
      }

      .playlist{
        padding:1rem;
        padding-top: 0;
        margin-left: 1rem;

        h3{
          color: $white;
          font-size: 1.6rem;
        }

        @include breakpoint(mobileonly){
            padding:0;
            margin-top:2rem;
            margin-left: 0;
        }
      }
    }

  }

</style>
