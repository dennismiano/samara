<template>
  <div class="home-wrapper">
      <slider
      />

      <div class="intro">
          <div class="container-wrapper">
            <div class="intro-text">
                <h3>Introduction</h3>
                <p>The Samara Estate, Migaa is a brilliantly thought out housing project tucked away in the beautiful, green, luscious Kiambu county. It is a project developed on 18.98 acres of land and set to house a total of 1824 units comprising of 2 bedroom and 3 bedroom apartments. The blocks are conveniently spaced to ensure ample natural light penetrates to every room of every unit</p>
                <p>Aptly located within a golf course, Samara is a private gated estate, proficiently designed to be a self-sufficient community, with every amenity you need carefully considered. The estate perfectly blends together aspects of nature, golf, family and luxurious living; all at an affordable cost.</p>
                <nuxt-link to="/about"><p>Read More...</p></nuxt-link>

                <div class="intro-text-background">

                </div>
            </div>

            <div class="amenities">
                <h2>Amenities</h2>

                <div class="amenities-wrapper">
                    <div class="amenity">
                        <div class="amenity-icon">
                            <img class="amenity-icon-image" src="/svg/perimeter-wall.svg">
                        </div>
                        <div class="amenity-text">
                            <p>Well-designed stone perimeter wall</p>
                        </div>
                    </div>

                    <div class="amenity">
                        <div class="amenity-icon">
                            <img class="amenity-icon-image" src="/svg/camera.svg">
                        </div>
                        <div class="amenity-text">
                            <p>CCTV cameras & 24/7 on ground security</p>
                        </div>
                    </div>


                    <div class="amenity">
                        <div class="amenity-icon">
                            <img class="amenity-icon-image" src="/svg/restaurants.svg">
                        </div>
                        <div class="amenity-text">
                            <p>Restaurants and eating spaces</p>
                        </div>
                    </div>


                    <div class="amenity">
                        <div class="amenity-icon">
                            <img class="amenity-icon-image" src="/svg/street-lights.svg">
                        </div>
                        <div class="amenity-text">
                            <p>Solar street lighting</p>
                        </div>
                    </div>

                    <div class="amenity">
                        <div class="amenity-icon">
                            <img class="amenity-icon-image" src="/svg/parking.svg">
                        </div>
                        <div class="amenity-text">
                            <p>Ample parking space</p>
                        </div>
                    </div>
                </div>
                <div class="more-amenities">
                  <nuxt-link to="/amenities"><p>View all amenities</p></nuxt-link>
                </div>

            </div>
          </div>
      </div>

      <div class="house-designs" id="houses">
          <div class="house-designs-container">
              <div class="house-designs-intro">
                <h2>House Designs</h2>
                <p>Choose between 1Br & 2Br</p>
              </div>

              <div class="house-design-wrapper">
                  <div class="house-design">
                      <div class="house-design1-image">
                      </div>

                      <div class="house-design-content">
                          <h3>2 Bedroom (57sqm)</h3>
                          <p>KES. 2.75M</p>
                      </div>

                      <div class="book-button">
                          <button @click="openBookingModal(), book2Br()">Book Unit</button>
                      </div>
                  </div>

                  <div class="center-border">

                  </div>

                  <div class="house-design">
                      <div class="house-design2-image">
                      </div>

                      <div class="house-design-content">
                          <h3>3 Bedroom (74.5sqm)</h3>
                          <p>KES. 3,75M</p>
                      </div>

                      <div class="book-button">
                          <button @click="openBookingModal(), book3Br()">Book Unit</button>
                      </div>
                  </div>

              </div>
          </div>
      </div>

      <BookingForm
          v-if="openModal"
          @close_modal = "closeModal()"
      />

      <Notification
        v-if="openNotification"
      />
  </div>
</template>

<script>
import Slider from '~/components/base/Slider.vue'
import BookingForm from '~/components/bookings/BookingForm.vue'
import Notification from '~/components/notifications/Notification.vue'

export default {
  data(){
    return{
      selected_unit:'',
      message: 'Booking has been successful'
    }
  },

  computed:{
    openModal(){
      return this.$store.state.status.modal_open;
    },

    openNotification(){
      return this.$store.state.status.notification_open;
    }
  },

  components:{
    Slider, BookingForm, Notification
  },

  methods:{
    toggleModal(){
      this.$store.commit('status/openBookingModal')
    },
    book2Br(){
      this.selected_unit = '2 Bedroom'
      this.$store.commit('status/setSelectedUnit', this.selected_unit)
    },

    book3Br(){
      this.selected_unit = '3 Bedroom'
      this.$store.commit('status/setSelectedUnit', this.selected_unit)
    },
    openBookingModal(){
      this.$store.commit('status/openBookingModal')
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


  .intro{
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: darken($light-gray, 5);
    position: relative;
    border-top: 1rem solid $secondary-color;

    .container-wrapper{
      width: 1020px;
      display: flex;
      padding-bottom: 3rem;
      padding-left: 1rem;
      padding-right: 1rem;


      @include breakpoint(tablet){
        width:100%;
        flex-flow: row wrap;
      }

      .intro-text{
        width: 69%;
        padding-top: 10%;
        padding-bottom: 10%;
        position: relative;
        z-index: 99999;

        @include breakpoint(tablet){
          width:100%;
          order:2;
        }

        h3{
          font-size: 2rem;
          border-bottom: 1px solid $white;
          position: relative;
          z-index: 999;
          color: $primary-color;

          @include breakpoint(phablet){
            font-size: 1.5rem;
          }
        }

        p{
          margin-bottom: 1rem;
          position: relative;
          z-index: 999;

          @include breakpoint(phablet){
            font-size: .9rem;
            line-height: 1.2rem;
            padding-top: .5rem;
          }
        }

        .intro-text-background{
          position: absolute;
          bottom: 0rem;
          z-index: 99;
          background-image: url('/img/apartment.jpg');
          width:100%;
          height: 100%;
          background-repeat: no-repeat;
          background-position: bottom center;
          opacity: 0.1;
          background-blend-mode: multiply;
        }
      }

      .amenities{
        width: 29%;
        margin-left: 2%;
        margin-top: -4rem;
        background-color: $primary-color;
        padding-top: calc(10% + 2rem);
        padding-left: 2rem;
        padding-right:2rem;

        @include breakpoint(tablet){
          width:100%;
          order:1;
          margin-left: 0;
          padding-top: 2rem;
          padding-bottom: 1rem;
          padding-left: 1rem;
          padding-right:1rem;
        }

        h2{
          color: $secondary-color;
          font-size: 2rem;

          @include breakpoint(phablet){
            font-size: 1.5rem;
          }
        }

        .amenities-wrapper{
            .amenity{
              display: flex;
              align-items: center;


              .amenity-icon{
                display: flex;
                align-items: center;
                background-color: $white;
                border-radius: 50%;

                .amenity-icon-image{
                  width:3.5rem;
                  height: 3.5rem;
                }
              }

              .amenity-text{
                padding-left: 1rem;
                color: $white;
                border-top:1px solid lighten($primary-color, 10);
                height: 4rem;
                display: flex;
                align-items: center;
                width: 100%;

                p{
                  font-size: .9rem;
                  line-height: 1.2rem;
                }
              }

              &:last-child{

                .amenity-text{
                  border-bottom:1px solid lighten($primary-color, 10);
                }
              }
            }
        }

        .more-amenities{
          margin-top: 1rem;

          p{
            color: $white;
            text-decoration: underline;
          }
        }
      }

    }
  }

  .house-designs{
    width: 100%;
    display: flex;
    justify-content: center;

    .house-designs-container{
      width:1020px;
      padding-top: 10%;
      padding-bottom: 10%;

      .house-designs-intro{
        width:100%;
        text-align: center;

        h2{
          color: $primary-color;
          font-size: 2rem;
        }
        p{
          font-size: 1.3rem;
        }
      }

      .house-design-wrapper{
          display: flex;
          position: relative;

          @include breakpoint(phablet){
            flex-wrap: wrap;
          }

        .house-design{
          width: 50%;
          padding: 1rem;

          @include breakpoint(phablet){
            width: 100%;
          }

          .house-design1-image{
            background-color: $gray;
            width:100%;
            background-image: url('/img/2br.jpg');
            background-size: cover;
            background-position: center;
            height: 20rem;

            @include breakpoint(phablet){
              height: 15rem;
            }
          }

          .house-design2-image{
            background-color: $gray;
            background-image: url('/img/3br.jpg');
            background-size: cover;
            background-position: center;
            width:100%;
            height: 20rem;

            @include breakpoint(phablet){
              height: 15rem;
            }
          }

          .house-design-content{
            padding-top: 1rem;
          }

          .book-button{
            button{
              @include system-button($primary-color, $white);
            }
          }
        }

        .center-border{
          position: absolute;
          left: 50%;
          top:0;
          height: 100%;
          width: 2px;

          background: rgb(0,0,0);
          background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(101,37,36,0.0018207966780462437) 0%, rgba(101,37,36,1) 26%, rgba(101,37,36,1) 74%, rgba(0,0,0,0.06064432608981096) 100%);

          @include breakpoint(phablet){
            position: relative;

            background: rgb(0,0,0);
            background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(101,37,36,0.0018207966780462437) 0%, rgba(101,37,36,1) 26%, rgba(101,37,36,1) 74%, rgba(0,0,0,0.06064432608981096) 100%);
            height: 2px;
          }

        }
      }
    }
  }
</style>
