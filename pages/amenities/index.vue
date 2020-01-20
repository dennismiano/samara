<template>
    <div>
        <div class="amenities-header">
        </div>

        <div class="amenities-content">
            <div class="container-wrapper">
                <div class="features">

                    <div class="features-header">
                        <h3>Features</h3>
                    </div>

                    <div class="feature">
                        <div class="feature-number">
                            <h4>1</h4>
                        </div>

                        <div class="feature-text">
                            <p>Proximity to quality schools such as Nova Academy, Wood Creek School, Sabis International school, International schools of Kenya and Crawford International School.</p>
                        </div>
                    </div>

                    <div class="feature">
                        <div class="feature-number">
                            <h4>2</h4>
                        </div>

                        <div class="feature-text">
                            <p>Great access to shopping malls and recreational facilities: 20 min drive from TRM mall shopping malls, easy access to Village Market, Two Rivers Mall, Ridgewa</p>
                        </div>
                    </div>

                    <div class="feature">
                        <div class="feature-number">
                            <h4>3</h4>
                        </div>

                        <div class="feature-text">
                            <p>14 minutes’ drive to Kiambu town, 35 minutes’ drive to both Nairobi CBD and Westlands</p>
                        </div>
                    </div>

                    <div class="feature">
                        <div class="feature-number">
                            <h4>4</h4>
                        </div>

                        <div class="feature-text">
                            <p>Proximity Migaa, a well thought out environmentally and sustainable mixed use development estate which accords you access to a breathtakingly beautiful 18-hole golf course.</p>
                        </div>
                    </div>

                    <div class="feature">
                        <div class="feature-number">
                            <h4>5</h4>
                        </div>

                        <div class="feature-text">
                            <p>Great prices, amazing serene environment, the designated address, The Samara Estate. Quality living and nothing less.</p>
                        </div>
                    </div>
                </div>

                <div class="amenities">

                    <div class="amenities-title">
                        <h3>Amenities</h3>
                    </div>

                    <div class="samara-amenities">

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

                      <div class="amenity">
                          <div class="amenity-icon">
                              <img class="amenity-icon-image" src="/svg/water.svg">
                          </div>
                          <div class="amenity-text">
                              <p>Water and electricity on site </p>
                          </div>
                      </div>

                      <div class="amenity">
                          <div class="amenity-icon">
                              <img class="amenity-icon-image" src="/svg/mall.svg">
                          </div>
                          <div class="amenity-text">
                              <p>A shopping centre with a supermarket </p>
                          </div>
                      </div>

                      <div class="amenity">
                          <div class="amenity-icon">
                              <img class="amenity-icon-image" src="/svg/banks.svg">
                          </div>
                          <div class="amenity-text">
                              <p>Banking spaces</p>
                          </div>
                      </div>

                      <div class="amenity">
                          <div class="amenity-icon">
                              <img class="amenity-icon-image" src="/svg/youth.svg">
                          </div>
                          <div class="amenity-text">
                              <p>A youth hub</p>
                          </div>
                      </div>


                      <div class="amenity">
                          <div class="amenity-icon">
                              <img class="amenity-icon-image" src="/svg/games.svg">
                          </div>
                          <div class="amenity-text">
                              <p>Gaming shops</p>
                          </div>
                      </div>

                      <div class="amenity">
                          <div class="amenity-icon">
                              <img class="amenity-icon-image" src="/svg/salon.svg">
                          </div>
                          <div class="amenity-text">
                              <p>Beauty parlour and barbershop</p>
                          </div>
                      </div>

                      <div class="amenity">
                          <div class="amenity-icon">
                              <img class="amenity-icon-image" src="/svg/swimming-pool.svg">
                          </div>
                          <div class="amenity-text">
                              <p>State of the art swimming pool</p>
                          </div>
                      </div>

                      <div class="amenity">
                          <div class="amenity-icon">
                              <img class="amenity-icon-image" src="/svg/basketball.svg">
                          </div>
                          <div class="amenity-text">
                              <p>2 basketball courts & 2 volley ball courts</p>
                          </div>
                      </div>

                      <div class="amenity">
                          <div class="amenity-icon">
                              <img class="amenity-icon-image" src="/svg/gym.svg">
                          </div>
                          <div class="amenity-text">
                              <p>Gym, a spa and sauna</p>
                          </div>
                      </div>

                      <div class="amenity">
                          <div class="amenity-icon">
                              <img class="amenity-icon-image" src="/svg/pavement.svg">
                          </div>
                          <div class="amenity-text">
                              <p>Internal cabro roads</p>
                          </div>
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
  import BookingForm from '~/components/bookings/BookingForm.vue'
  import Notification from '~/components/notifications/Notification.vue'

  export default{
    computed:{
      openModal(){
        return this.$store.state.status.modal_open;
      },

      openNotification(){
        return this.$store.state.status.notification_open;
      }
    },

    components:{
      BookingForm, Notification
    }
  }
</script>

<style lang="scss" scoped>

@import "~/assets/sass/app.scss";

h1,h2,h3,h4,h5,h5,li,p,input{
  font-family:$primary-font;
  margin:0;
}

  .amenities-header{
    width: 100%;
    height: 300px;
    background-image: url('/img/features-header.jpg');
    background-size: cover;
    background-position: center;
    background-color: $gray;

    @include breakpoint(tablet){
      height: 150px;
    }
  }

  .container-wrapper{
    max-width: 1020px;
    display: flex;

    @include breakpoint(tablet){
      flex-wrap: wrap;
    }

  }
  .amenities-content{
    display: flex;
    justify-content: center;
    margin-bottom: 5rem;

    @include breakpoint(phablet){

    }

    .features{
      width: 30%;
      background-color: $primary-color;
      padding: 1rem;
      padding-left: 0rem;
      margin-top: -3rem;

      @include breakpoint(tablet){
        width: 100%;
        padding-left: 1rem;
        margin-top: 0;
      }

      .features-header{
        margin-left: 2rem;
        color:$secondary-color;
        margin-bottom: .4rem;

        @include breakpoint(tablet){
          margin-left: 0;
        }

        h3{
          color: $secondary-color;
          font-size: 1.5rem;
        }

      }

      .feature{
        display: flex;
        margin-bottom: 1.5rem;

        &:last-child{
          margin-bottom: 1rem;
        }

        .feature-number{
          width:3rem;
          height: 3rem;
          min-width: 3rem;
          min-height: 3rem;
          display: flex;
          margin-left: -1.5rem;
          border-radius: 50%;
          border: 2px solid $white;
          justify-content: center;
          align-items: center;
          background-color: $secondary-color;

          @include breakpoint(tablet){
            margin-left: 0rem;
            border-radius: 50%;
          }
        }

        .feature-text{
          color:$white;
          margin-left: .5rem;
          font-size: .9rem;
          line-height: 1.2rem;

          @include breakpoint(mobileonly){
            font-size: .9rem;
          }
        }
      }
    }

    .amenities{
      width:70%;;
      padding: 1rem;
      margin-top: 3rem;

      @include breakpoint(tablet){
        width: 100%;
        margin-top: 1rem;
      }


      .amenities-title{
        font-size: 1.7rem;
        color: $primary-color;
      }

      .samara-amenities{
          display: flex;
          flex-flow: row wrap;

        .amenity{
          display: flex;
          align-items: center;
          width:32%;
          min-height: 4rem;
          margin-right: 2%;

          @include breakpoint(phablet){
            width: 49%;
            margin-right: 0;

            &:nth-child(2n){
              margin-left: 2%;
            }
          }

          &:nth-child(3n){
            margin-right: 0;
          }

          .amenity-icon{
            min-width: 3rem;
            width: 3rem;
            height: auto;
            display: flex;
            align-items: center;

            img{
              width: 3rem;
              height: auto;
            }
          }

          .amenity-text{
              line-height: 1.2rem;
              border-bottom: 1px solid $gray;
              min-height: 4rem;
              width:100%;
              display: flex;
              align-items: center;

              @include breakpoint(mobileonly){
                font-size: .9rem;
                line-height: 1rem;
              }
          }
        }
      }
    }
  }
</style>
