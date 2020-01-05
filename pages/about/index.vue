<template>
    <div class="about-samara">
        <div class="about-samara-header">
        </div>

        <div class="about-samara-content">
          <div class="about-samara-content-container">
            <div class="over-view">
                <h4>The Samara Estate</h4>
                <h2>Overview</h2>

                  <p>The captivatingly beautiful architectural designs were prepared by a leading architectural firm in the country. The units are brilliantly designed for comfort, luxury, giving you the opportunity to build your dream home. Samara Estate, in line with the government’s big 4 agenda on housing, is deliberate in putting up a gated community for affordable and adequate living.
                    The estate features an integrated lifestyle, creating synergy around all aspects of life. Migaa features hospitals, golf course, walking and running tracks, volleyball and basketball courts, a shopping centre, banking halls and restaurants all within reach. Have breakfast with your family, drop the kids to school then walk or take a drive to work.
                    Enjoy a touch of leafy country living and urban lifestyle paving way for a healthy and ideal environment for your family to easily thrive under.
                  </p>
            </div>

            <div class="about-samara">
                <h4>The Samara Estate, Migaa is a brilliantly thought out housing project tucked away in the beautiful, green, luscious Kiambu county. It is a project developed on 18.98 acres of land and set to house a total of 1824 units comprising of 2 bedroom and 3 bedroom apartments. </h4>
                <div class="about-samara-copy">
                  <p>The blocks are conveniently spaced to ensure ample natural light penetrates to every room of every unit.
                  Aptly located within a golf course, Samara is a private gated estate, proficiently designed to be a self-sufficient community, with every amenity you need carefully considered. The estate perfectly blends together aspects of nature, golf, family and luxurious living; all at an affordable cost.
                  Samara enjoys proximity to quality local and international schools such as Nova Academy, Wood Creek School, Sabis International school, International schools of Kenya and Crawford International School. It has great access to shopping malls and recreational facilities. It is a 25 min drive from Two rivers mall and enjoys easy access to Village Market, Ridgeways Mall, and Garden City.  In addition to this, it is a 15 minute drive from Kiambu town and a 35 minute drive from both the Nairobi CBD and Westlands.
                  At Samara, we believe all our residents are entitled to ample security at all times and for this reason, the estate will enjoy top-notch security. Features such as high perimeter walls, CCTV cameras, regular estate patrols in addition to a fortified gate with a modern gatehouse creates the estate’s identity, with the assurance of a comfortable good night sleep.
                  </p>
              </div>
            </div>
          </div>
        </div>

        <BookingForm
            v-if="openModal"
            @close_modal = "closeModal()"
        />
    </div>

</template>

<script>

import BookingForm from '~/components/bookings/BookingForm.vue'

  export default{
    computed:{
      openModal(){
        return this.$store.state.status.modal_open;
      }
    },

    components:{
      BookingForm
    }
  }
</script>

<style lang="scss" scoped>
    @import "~/assets/sass/app.scss";

    h1,h2,h3,h4,h5,h5,p,li,input{
      font-family:$primary-font;
      margin: 0;
    }



  .about-samara-header{
    width:100%;
    height: 250px;
    background-color: $gray;
    background-image: url('/img/about-samara-header.jpg');
    background-position: center;
    background-size: cover;
  }

  .about-samara-content{
    width:100%;
    display: flex;
    justify-content: center;
    margin-bottom: 8rem;
    border-top: 1rem solid $secondary-color;

    .about-samara-content-container{
      max-width: 1020px;
      display: flex;

      @include breakpoint(tablet){
        flex-flow: row wrap;
      }

      .over-view{
        width:30%;
        background-color: $primary-color;
        padding: 1rem;
        margin-top: -5rem;


        @include breakpoint(tablet){
          width: 100%;
          border-top: 1rem solid $secondary-color;
        }

        h4{
          color:$secondary-color;
          font-size: 1.3rem;
          color:$white;
          margin-bottom: 1rem
        }

        h2{
          color:$secondary-color;
          font-size: 2rem;
          margin-top: -.5rem;

        }

        p{
          color: $white;
          line-height: 1.2rem;

            @include breakpoint(phablet){
              font-size: .9rem;
              text-align: justify;
              text-align: left;
            }
        }
      }

      .about-samara{
        width:70%;
        padding-left: 3rem;
        margin-top:3rem;
        padding-right: 1rem;

        @include breakpoint(tablet){
          width: 100%;
          padding-left: 1rem;
          margin-top:3rem;
          padding-right: 1rem;
        }

        h4{
          font-size: 1.4rem;
          line-height: 1.6rem;

          @include breakpoint(phablet){
            font-size: 1.2rem;
            line-height: 1.4rem;
            color:$primary-color;
          }
        }


        .about-samara-copy{

          column-count: 2;
          margin-top: 1rem;
          text-align: justify;

          @include breakpoint(phablet){
            column-count: 1;
          }


          p{
            text-align: left;
            line-height: 1.2rem;
            text-align: justify;
            font-size: .9rem;

            @include breakpoint(phablet){
              text-align: left;
            }
          }
        }


      }
    }
  }
</style>
