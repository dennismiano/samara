<template>
    <div class="message-container">

        <div class="message-content-wrapper">
          <h3> {{ name }} </h3>
          <div class="messenger-contact">
            <svg class="messenger-email-icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
               viewBox="0 0 483.3 483.3" style="enable-background:new 0 0 483.3 483.3;" xml:space="preserve">
              <g>
                <g>
                  <path d="M424.3,57.75H59.1c-32.6,0-59.1,26.5-59.1,59.1v249.6c0,32.6,26.5,59.1,59.1,59.1h365.1c32.6,0,59.1-26.5,59.1-59.1
                    v-249.5C483.4,84.35,456.9,57.75,424.3,57.75z M456.4,366.45c0,17.7-14.4,32.1-32.1,32.1H59.1c-17.7,0-32.1-14.4-32.1-32.1v-249.5
                    c0-17.7,14.4-32.1,32.1-32.1h365.1c17.7,0,32.1,14.4,32.1,32.1v249.5H456.4z"/>
                  <path d="M304.8,238.55l118.2-106c5.5-5,6-13.5,1-19.1c-5-5.5-13.5-6-19.1-1l-163,146.3l-31.8-28.4c-0.1-0.1-0.2-0.2-0.2-0.3
                    c-0.7-0.7-1.4-1.3-2.2-1.9L78.3,112.35c-5.6-5-14.1-4.5-19.1,1.1c-5,5.6-4.5,14.1,1.1,19.1l119.6,106.9L60.8,350.95
                    c-5.4,5.1-5.7,13.6-0.6,19.1c2.7,2.8,6.3,4.3,9.9,4.3c3.3,0,6.6-1.2,9.2-3.6l120.9-113.1l32.8,29.3c2.6,2.3,5.8,3.4,9,3.4
                    c3.2,0,6.5-1.2,9-3.5l33.7-30.2l120.2,114.2c2.6,2.5,6,3.7,9.3,3.7c3.6,0,7.1-1.4,9.8-4.2c5.1-5.4,4.9-14-0.5-19.1L304.8,238.55z"
                    />
                </g>
              </g>
            </svg>

            <p> {{ email }}</p>
          </div>

          <div class="message-content">
            <h4>Message</h4>
            <p> {{ message }}</p>
            <p>{{ time }}</p>
          </div>

          <div class="message-actions">
            <button>Delete</button>
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

@import "~/assets/sass/app.scss";

h1,h1,h3,h4,h5,h5,li,p{
  font-family:$primary-font;
  margin:0;
}

.message-content-wrapper{
  background-color: $white;
  padding:1rem;
  margin-top: 1rem;

  h3{
    font-size: 1.5rem;
    font-weight: 300;
    color:$primary-color;
  }

  .messenger-contact{
    display: flex;
    margin-bottom: 1rem;
    align-items: center;

    .messenger-email-icon{
      width: 1.5rem;
      height: auto;
      fill: $dark-gray;
    }

    p{
      padding-left:.5rem;
      color: $dark-gray;
    }
  }

  .message-content{
    background-color: darken($light-gray, 10);
    padding: .5rem;
    border-left: 3px solid $primary-color;

    p{
      &:last-child{
        color: $dark-gray;
        font-size: .9rem;
        margin-top: 1rem;
      }
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
    justify-content: flex-end;

    button{
      @include system-button($primary-color, $white);
      height: 2.5rem;
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
}

</style>
