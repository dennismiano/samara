<template lang="html">
  <div class="">
      <div class="" v-if="bookings.length != 0">
        <div class="" v-for="booking in bookings" :key="booking.id">
            <div class="">
              <p>{{booking.name}}</p>
              <p>{{booking.email}}</p>
              <p>{{booking.phone_number}}</p>
              <p>{{booking.unit}}</p>
              <button type="button" name="button" @click.prevent="deleteBooking(booking.id)">Delete</button>

            </div>

        </div>

      </div>
      <div class="" v-else>
        <p>Oops.no bookings yet.</p>

      </div>

  </div>

</template>

<script>
import axios from '~/plugins/axios.js';
export default {
  data(){
    return {
      bookings:[]

    };

  },
  methods:{
    viewBookings(){
      return axios.post('/house/view/bookings').then((res)=>{
        console.log('res data',res.data);
        if (res.data.booking_details) {
          this.bookings=res.data.bookings;

        }
        if (res.data.error){
          console.log('error',res.data.error);

        }


      }).catch((e)=>{
        console.log('e',e);

      } ).finally( ()=>{

      });

    },
    deleteBooking(payload){
      return axios.post('/house/delete/booking',{id:payload}).then((res)=>{
        if (res.data.msg) {
          alert(res.data.msg);

        }
        if (res.data.error) {
          console.log('error',res.data.error);

        }

      } ).catch().finally();

    }


  },
  created(){
    this.viewBookings();
  }
}
</script>

<style lang="css" scoped>
</style>
