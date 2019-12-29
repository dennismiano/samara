<template>
    <div class="bookings-wrapper">

        <div class="booking-details">

          <svg version="1.1" @click="closeModal()" class="close-icon" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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

            <div class="booking-intro">
                <div class="booking-into-text">
                  <h2>Welcome to </br><span class="bold yellow"> Quality Living</span></h2>
                </div>

                <div class="bookings-logo">
                    <img src="/svg/logo-white.svg">
                </div>
            </div>

            <div class="booking-form">
                <h3>Complete Booking</h3>

                <div class="name">
                  <label>Name:</label>

                  <div class="form-group">
                    <input type="text" placeholder="name" v-model="booking_details.name">
                  </div>
                </div>

                <div class="email">
                  <label>Email:</label>

                  <div class="form-group">
                    <input type="text" placeholder="email" v-model="booking_details.email">
                  </div>
                </div>

                <div class="number">
                  <label>Phone Number:</label>

                  <div class="form-group">
                    <input type="text" placeholder="phone-number" v-model="booking_details.phone_number">
                  </div>
                </div>

                <div class="unit-details">
                    <h4>Unit Selected:</h4>
                    <p>3 Bedroom</p>
                </div>

                <div class="book-button">
                    <button type="button" @click.prevent="addBooking">Complete Booking</button>
                </div>
            </div>

            <div class="booking-form-background">
            </div>
        </div>

        <div @click="closeModal()" class="bookings-background">
        </div>
    </div>
</template>

<script>
import axios from '~/plugins/axios.js';
  export default{
    data(){
      return {
        booking_details:{
          name:'',
          email:'',
          phone_number:'',
          unit:'3 br'
        }
      };

    },
    methods:{
      closeModal(){
        this.$store.commit('status/closeBookingModal');
      }
      ,addBooking(){
        return axios.post('/house/add/booking',{details:this.booking_details}).then((res)=>{
          if (res.data.msg) {
            alert(res.data.msg);

          }
          if (res.data.error) {
            console.log('error',res.data.error);

          }

        }).catch( (e)=>{
          console.log('e',e);

        } ).finally( ()=>{



        } );

      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~/assets/sass/app.scss";

  h1,h2,h3,h4,h5,h5,li,p,input, label, ::placeholder, button{
    font-family:$primary-font;
    margin:0;
  }

  .bookings-wrapper{
    position: fixed;
    top:0;
    height: 100%;
    left:0;
    width:100%;
    z-index: 99999;
    display: flex;
    justify-content: center;
    align-items: center;

    .booking-details{
      width: 80%;
      background-color: $primary-color;
      padding: 5%;
      z-index: 999;
      position: relative;
      display: flex;

      .close-icon{
        position: absolute;
        right: -1.5rem;
        top:-1.5rem;
        width: 3rem;
        height: 3rem;
        fill: $white;
        z-index: 999999999;

        @include breakpoint(phablet){
          right: 1rem;
          top:1rem;
        }
      }

      @include breakpoint(phablet){
        width: 90%;
        flex-wrap: wrap;
        padding: 0;
        overflow-x: scroll;
      }

      .booking-intro{
        width: 50%;
        justify-content: space-between;
        flex-flow: column;
        display: flex;
        position: relative;
        z-index: 99;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 2rem;

        @include breakpoint(phablet){
          width: 100%;
        }

        .booking-into-text{
            padding-top: 1rem;

          h2{
            line-height: 2rem;
            font-size: 2.1rem;
            color:$secondary-color;
          }
        }

        .bookings-logo{
          width:13rem;
          height: auto;

          @include breakpoint(phablet){
            display: none;
          }
        }
      }

      .booking-form{
        background-color: $white;
        width:50%;
        padding: 1rem;
        position: relative;
        z-index: 99;

        @include breakpoint(phablet){
          margin-left: 1rem;
          margin-right: 1rem;
          margin-top: 1rem;
          margin-bottom: 1rem;
          width:100%;


        }

        .name, .email, .number{
          display: flex;
          flex-flow: column;
          margin-bottom: 1rem;

          .form-group{
            display: flex;
          }

          input{
            @include form-inputs;
            height: 3rem;
          }
        }

        .unit-details{
          background-color: $light-gray;
          padding:.5rem;
        }

        .book-button{
          margin-top: 1rem;

          button{
            @include system-button($primary-color, $white);
          }
        }
      }

      .booking-form-background{
        position: absolute;
        left: 0;
        width:50%;
        height: 100%;
        bottom: 0;
        background-position: left bottom;
        background-size: cover;
        background-image: url('/img/booking-form.jpg');
        background-blend-mode: darken;
        background-color: $primary-color;
      }
    }

    .bookings-background{
      background-color: $black;
      opacity: .8;
      position: absolute;
      left:0;
      top:0;
      width:100%;
      height: 100%;
    }
  }
</style>
