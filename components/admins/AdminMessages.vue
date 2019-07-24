<template>
    <div class="message-container">

        <div class="message-content-wrapper">
          <h3> {{ name }} </h3>
          <div class="messenger-contact">
            <svg class="messenger-email-icon" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54.63 48.5"><title>email</title><path d="M7.45,16.84l5.62,3.91q4.69,3.25,7.19,5l1.17.84q.89.65,1.48,1c.39.27.87.56,1.43.89a8.28,8.28,0,0,0,1.58.74,4.37,4.37,0,0,0,1.37.25h.05a4.37,4.37,0,0,0,1.37-.25,8.4,8.4,0,0,0,1.58-.74c.56-.33,1-.63,1.43-.89s.89-.61,1.48-1l1.17-.84,12.84-8.92a13,13,0,0,0,3.35-3.37A7.25,7.25,0,0,0,51.9,9.32a4.21,4.21,0,0,0-1.3-3.1,4.24,4.24,0,0,0-3.09-1.29H7.12A3.92,3.92,0,0,0,3.86,6.36,5.54,5.54,0,0,0,2.73,9.93a6.41,6.41,0,0,0,1.51,3.75,13.6,13.6,0,0,0,3.21,3.17Zm0,0"/><path d="M49.15,19.78q-9,6.09-13.66,9.47Q33.93,30.4,33,31a15.45,15.45,0,0,1-2.59,1.32,7.9,7.9,0,0,1-3,.67h-.05a7.89,7.89,0,0,1-3-.67A15.54,15.54,0,0,1,21.67,31q-1-.64-2.54-1.8Q15.43,26.53,5.5,19.78a14.55,14.55,0,0,1-2.77-2.39V39.18A4.23,4.23,0,0,0,4,42.28a4.23,4.23,0,0,0,3.1,1.29H47.51a4.4,4.4,0,0,0,4.39-4.39V17.39a15.2,15.2,0,0,1-2.74,2.39Zm0,0"/>
            </svg>

            <p> {{ email }}</p>
          </div>
          <p> {{ message }}</p>

          <div class="message-actions">
            <p>sent on {{ time }}</p>
            <svg class="delete-icon" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 263 273"><title>delete</title><rect x="114.28" y="145.47" width="103.39" height="17.46" transform="translate(5.79 314.4) rotate(-87.9)"/><path d="M177.17,59.47V40.55A14.57,14.57,0,0,0,162.62,26h-57A14.57,14.57,0,0,0,91,40.55V59.47H30.2V76.93H48.4L62.83,241a8.73,8.73,0,0,0,8.7,8H196.38a8.73,8.73,0,0,0,8.7-8l14.44-164H238V59.47Zm-68.68-16h51.22v16H108.49Zm79.89,188H79.52L65.92,76.93H202Z"/><rect x="93.5" y="102.51" width="17.46" height="103.39" transform="translate(-5.57 3.84) rotate(-2.1)"/><rect x="125.37" y="102.54" width="17.46" height="103.32"/>
            </svg>
          </div>

        </div>
    </div>
</template>

<script>
  export default{
    props:['id', 'name', 'email', 'message', 'time']
  }
</script>

<style lang="scss" scoped>

@import '~/assets/sass/app.scss';

h1,h2,h3,h4,h5,h6,p{
  margin:0;
}

.message-content-wrapper{
  background-color: $white;
  padding:1rem;
  margin-top: 1rem;

  h3{
    font-size: 2rem;
    font-weight: 300;
  }

  .messenger-contact{
    border-top:1px solid $gray;
    border-bottom:1px solid $gray;
    padding-top:1rem;
    padding-bottom:1rem;
    display: flex;
    margin-bottom: 1rem;

    .messenger-email-icon{
      width: 1.7rem;
      height: auto;
      fill: $dark-gray;
    }

    p{
      padding-left:1rem;
    }
  }

  p{
    color:$black-gray;
  }

  .message-actions{
    padding-top:1rem;
    margin-top:1rem;
    border-top: 1px solid $gray;
    display: flex;
    justify-content: space-between;

    p{
      color:$gray;
    }
    .delete-icon{
      width:2rem;
      height: auto;
    }
  }
}

</style>
