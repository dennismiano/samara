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
                <div class="name">
                  <label>Name:</label>

                  <div class="form-group">
                    <input type="text" placeholder="full name" v-model="booking_details.name">
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
                    <input type="text" placeholder="e.g +254 720 000 000" v-model="booking_details.phone_number">
                  </div>
                </div>

                <div class="unit-details">
                  <div v-if="selected">
                    <h4>Unit Selected:</h4>
                    <p>{{ selectedUnit }}</p>
                  </div>

                  <div class="select-form" v-if="!selected">
                    <h4>Select Unit</h4>

                      <div class="form-select">
                        <div @click="selectTwoBr()" class="two-bedroom">
                          <div class="two-bedroom-content">
                            <h4>2 Bedroom</h4>
                            <p class="sq-space">57 Sqm</p>
                          </div>

                          <svg v-if="two_bedroom_selected" class="active-tick" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                          	 viewBox="0 0 496.158 496.158" style="enable-background:new 0 0 496.158 496.158;" xml:space="preserve">
                            <path class="tick-circle" d="M496.158,248.085c0-137.021-111.07-248.082-248.076-248.082C111.07,0.003,0,111.063,0,248.085
                            	c0,137.002,111.07,248.07,248.082,248.07C385.088,496.155,496.158,385.087,496.158,248.085z"/>
                            <path class="tick-mark" style="fill:#FFFFFF;" d="M384.673,164.968c-5.84-15.059-17.74-12.682-30.635-10.127c-7.701,1.605-41.953,11.631-96.148,68.777
                            	c-22.49,23.717-37.326,42.625-47.094,57.045c-5.967-7.326-12.803-15.164-19.982-22.346c-22.078-22.072-46.699-37.23-47.734-37.867
                            	c-10.332-6.316-23.82-3.066-30.154,7.258c-6.326,10.324-3.086,23.834,7.23,30.174c0.211,0.133,21.354,13.205,39.619,31.475
                            	c18.627,18.629,35.504,43.822,35.67,44.066c4.109,6.178,11.008,9.783,18.266,9.783c1.246,0,2.504-0.105,3.756-0.322
                            	c8.566-1.488,15.447-7.893,17.545-16.332c0.053-0.203,8.756-24.256,54.73-72.727c37.029-39.053,61.723-51.465,70.279-54.908
                            	c0.082-0.014,0.141-0.02,0.252-0.043c-0.041,0.01,0.277-0.137,0.793-0.369c1.469-0.551,2.256-0.762,2.301-0.773
                            	c-0.422,0.105-0.641,0.131-0.641,0.131l-0.014-0.076c3.959-1.727,11.371-4.916,11.533-4.984
                            	C385.405,188.218,389.034,176.214,384.673,164.968z"/>
                          </svg>

                          <svg v-if="!two_bedroom_selected" class="inactive-tick" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                          	 viewBox="0 0 55.702 55.702" style="enable-background:new 0 0 55.702 55.702;" xml:space="preserve">
                          		<g>
                          			<g>
                          				<path d="M27.851,0C12.494,0,0,12.494,0,27.851s12.494,27.851,27.851,27.851s27.851-12.494,27.851-27.851
                          					C55.701,12.494,43.208,0,27.851,0z M27.851,51.213c-12.882,0-23.362-10.48-23.362-23.363c0-12.882,10.48-23.362,23.362-23.362
                          					s23.362,10.481,23.362,23.363S40.733,51.213,27.851,51.213z"/>
                          			</g>
                          		</g>
                          </svg>

                        </div>

                        <div @click="selectThreeBr()" class="three-bedroom">
                          <div class="three-bedroom-content">
                            <h4>3 Bedroom</h4>
                            <p class="sq-space">74.5  Sqm</p>
                          </div>

                          <svg v-if="three_bedroom_selected" class="active-tick" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                          	 viewBox="0 0 496.158 496.158" style="enable-background:new 0 0 496.158 496.158;" xml:space="preserve">
                            <path class="tick-circle" d="M496.158,248.085c0-137.021-111.07-248.082-248.076-248.082C111.07,0.003,0,111.063,0,248.085
                            	c0,137.002,111.07,248.07,248.082,248.07C385.088,496.155,496.158,385.087,496.158,248.085z"/>
                            <path class="tick-mark" style="fill:#FFFFFF;" d="M384.673,164.968c-5.84-15.059-17.74-12.682-30.635-10.127c-7.701,1.605-41.953,11.631-96.148,68.777
                            	c-22.49,23.717-37.326,42.625-47.094,57.045c-5.967-7.326-12.803-15.164-19.982-22.346c-22.078-22.072-46.699-37.23-47.734-37.867
                            	c-10.332-6.316-23.82-3.066-30.154,7.258c-6.326,10.324-3.086,23.834,7.23,30.174c0.211,0.133,21.354,13.205,39.619,31.475
                            	c18.627,18.629,35.504,43.822,35.67,44.066c4.109,6.178,11.008,9.783,18.266,9.783c1.246,0,2.504-0.105,3.756-0.322
                            	c8.566-1.488,15.447-7.893,17.545-16.332c0.053-0.203,8.756-24.256,54.73-72.727c37.029-39.053,61.723-51.465,70.279-54.908
                            	c0.082-0.014,0.141-0.02,0.252-0.043c-0.041,0.01,0.277-0.137,0.793-0.369c1.469-0.551,2.256-0.762,2.301-0.773
                            	c-0.422,0.105-0.641,0.131-0.641,0.131l-0.014-0.076c3.959-1.727,11.371-4.916,11.533-4.984
                            	C385.405,188.218,389.034,176.214,384.673,164.968z"/>
                          </svg>

                          <svg v-if="!three_bedroom_selected" class="inactive-tick" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                          	 viewBox="0 0 55.702 55.702" style="enable-background:new 0 0 55.702 55.702;" xml:space="preserve">
                          		<g>
                          			<g>
                          				<path d="M27.851,0C12.494,0,0,12.494,0,27.851s12.494,27.851,27.851,27.851s27.851-12.494,27.851-27.851
                          					C55.701,12.494,43.208,0,27.851,0z M27.851,51.213c-12.882,0-23.362-10.48-23.362-23.363c0-12.882,10.48-23.362,23.362-23.362
                          					s23.362,10.481,23.362,23.363S40.733,51.213,27.851,51.213z"/>
                          			</g>
                          		</g>
                          </svg>
                        </div>
                      </div>
                  </div>
                </div>

                <div class="book-button">
                    <button type="button" @click.prevent="addBooking">{{ button_status }}</button>
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
      return{
        two_br_select: false,
        three_br_select: true,

        two_bedroom_selected: false,
        three_bedroom_selected: true,
        button_status: 'Book',

        booking_details:{
          name:'',
          email:'',
          phone_number:'',
          unit:'3 Bedroom'
        },
        payload:{
          type: '',
          message:''
        }
      }
    },

    computed:{
      selectedUnit(){
        return this.$store.state.status.selected_unit
      },

      selected(){
        return this.$store.state.status.selected
      },

      twoBrSelect(){
        //return this.two_bedroom_selected
      },

      threeBrSelect(){
        //return this.three_bedroom_selected
      }
    },
    methods:{
      closeModal(){
        this.$store.commit('status/closeBookingModal');
      },
      selectTwoBr(){
        if(this.two_bedroom_selected === false){
          this.two_bedroom_selected = true
          this.three_bedroom_selected = false
          this.booking_details.unit = '2 Bedroom'
        }
      },

      selectThreeBr(){
        if(this.three_bedroom_selected === false){
          this.two_bedroom_selected = false
          this.three_bedroom_selected = true
          this.booking_details.unit = '3 Bedroom'
        }
      },

      addBooking(){
        this.button_status = 'Booking'
        return axios.post('/house/add/booking',{details:this.booking_details}).then((res)=>{

            this.button_status = 'Book'

          if (res.data.msg) {

            this.payload.type = 'success'
            this.payload.message = res.data.msg
            this.$store.commit('status/closeBookingModal');
            this.$store.commit('status/openNotificationModal', this.payload);

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
      width: 1020px;
      background-color: $primary-color;
      padding: 2rem;
      z-index: 999;
      position: relative;
      display: flex;
      margin-left: 1rem;
      margin-right: 1rem;

      .close-icon{
        position: absolute;
        right: 1.3rem;
        top:1.2rem;
        width: 3rem;
        height: 3rem;
        fill: $secondary-color;
        z-index: 9999999;

        @include breakpoint(phablet){
          right: .5rem;
          top:.5rem;
          width: 2.5rem;
          height: 2.5rem;
        }
      }

      @include breakpoint(phablet){
        width: 90%;
        flex-wrap: wrap;
        padding: 0;
        overflow-y: auto;
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

            @include breakpoint(phablet){
              padding-top: 0;
            }

          h2{
            line-height: 2.2rem;
            font-size: 2rem;
            color:$secondary-color;

            @include breakpoint(phablet){
              line-height: 1.4rem;
              font-size: 1.3rem;
            }
          }
        }

        .bookings-logo{
          width:10rem;
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
          margin-top: 1rem;
          margin-bottom: .5rem;
          width:100%;
          padding-left: 1rem;
          padding-right: 1rem;
        }
        .name, .email, .number{
          display: flex;
          flex-flow: column;
          margin-bottom: 1rem;

          @include breakpoint(phablet){
            margin-bottom: .5rem;
          }

          .form-group{
            display: flex;
          }

          input{
            @include form-inputs;
            height: 2.5rem;

            &::placeholder{
              margin-left: 0;
            }
          }
        }

        .unit-details{
          background-color: $light-gray;
          padding:.5rem;
          border-left: 3px solid $primary-color;

          .select-form{

            .form-select{
              display: flex;

              @include breakpoint(phablet){
                flex-wrap: wrap;
              }

              .sq-space{
                color:$dark-gray;
              }

              .two-bedroom{
                display: flex;
                justify-content: space-between;
                background-color: darken($light-gray, 10);
                align-items: center;
                width: 49%;
                padding: .2rem .5rem;

                @include breakpoint(phablet){
                  width: 100%;
                  margin-bottom: .5rem;
                }

                .active-tick{
                  width: 2rem;
                  height: 2rem;

                  .tick-circle{
                    fill: $primary-color;
                  }

                  .tick-mark{
                    fill: $white;
                  }
                }

                .inactive-tick{
                  width: 2rem;
                  height: 2rem;
                  fill: $primary-color;
                }
              }

              .three-bedroom{
                display: flex;
                justify-content: space-between;
                background-color: darken($light-gray, 10);
                align-items: center;
                width: 49%;
                margin-left: 2%;
                padding: .2rem .5rem;

                @include breakpoint(phablet){
                  width: 100%;
                  margin-left: 0;
                }

                .inactive-tick{
                  width: 2rem;
                  height: 2rem;
                  fill: $primary-color;
                }

                .active-tick{
                  width: 2rem;
                  height: 2rem;

                  .tick-circle{
                    fill: $primary-color;
                  }

                  .tick-mark{
                    fill: $white;
                  }
                }

              }
            }
          }
        }

        .book-button{
          margin-top: .5rem;

          button{
            @include system-button($primary-color, $white);
            height: 2.5rem;
            padding-left:3rem;
            padding-right:3rem;
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
