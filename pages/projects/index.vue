<template>
    <div>
        <div class="projects-header">
            <div class="headers-container">
              <h2>Projects</h2>
            </div>
        </div>

        <div class="projects-content-holder">
          <div class="projects-content-container">
            <div class="project">
                <h4 class="project-title"> 2 Bedroom Apartment</h4>

                <div class="project-content-wrapper1">
                  <div class="project-slider1">
                  </div>

                  <div class="project-content">
                      <div class="status">
                          <h4>Status:</h4>
                          <div class="status-slider">
                            <div class="status-background">
                              <div class="status-bar">
                                  <p class="status-label">
                                      10%
                                  </p>
                              </div>

                              <p class="status-bar-label">
                                Development
                              </p>
                            </div>
                          </div>
                      </div>

                      <div class="project-space">
                          <h4>Space:</h4>
                          <p>55 Square Metres</p>
                      </div>

                      <div class="project-price">
                          <h4>Price:</h4>
                          <p>KES. 2.75M</p>
                      </div>
                  </div>
                </div>
            </div>

            <div class="project">
                <h4 class="project-title"> 3 Bedroom Apartment</h4>

                <div class="project-content-wrapper2">
                  <div class="project-slider2">
                  </div>

                  <div class="project-content">
                      <div class="status">
                          <h4>Status:</h4>
                          <div class="status-slider">
                            <div class="status-background">
                              <div class="status-bar">
                                <p class="status-label">
                                    10%
                                </p>
                              </div>

                              <p class="status-bar-label">
                                Development
                              </p>
                            </div>
                          </div>
                      </div>

                      <div class="project-space">
                          <h4>Space:</h4>
                          <p>75.5 Square Metres</p>
                      </div>

                      <div class="project-price">
                          <h4>Price:</h4>
                          <p>KES. 3.75M</p>
                      </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
  export default{

  }
</script>

<style lang="scss" scoped>
  @import "~/assets/sass/app.scss";

  h1,h2,h3,h4,h5,h5,li,p,input{
    font-family:$primary-font;
    margin:0;
  }

  .projects-header{
    height: 200px;
    display: flex;
    justify-content: center;
    background-color: $gray;
    background-image: url('/img/projects-cover.jpg');
    background-position: center;
    background-size: cover;

    @include breakpoint(phablet){
      height: 150px;
    }

    .headers-container{
      width:1020px;
      display: flex;
      align-items: flex-end;
      margin-left: 1rem;
      margin-right: 1rem;

      h2{
        background-color: $secondary-color;
        padding: .5rem 1rem;
        color: $primary-color;
      }
    }
  }

  .projects-content-holder{
    margin-top: 5rem;
    margin-bottom: 7rem;
    display: flex;
    justify-content: center;
    width: 100%;

    @include breakpoint(phablet){
      margin-top: 2rem;
      margin-bottom: 2rem;
    }

    .projects-content-container{
      width: 1020px;
      margin-left: 1rem;
      margin-right: 1rem;
    }

      .project{
        margin-bottom: 2rem;

        .project-title{
          text-align: center;
          padding-bottom: .5rem;
          font-size: 1.5rem;
          color: $primary-color;
        }

        .project-content-wrapper1, .project-content-wrapper2{
          display: flex;

          @include breakpoint(phablet){
            flex-flow: wrap;
          }

            .project-slider1, .project-slider2{
              width:50%;
              background-color: $gray;
              min-height: 18rem;
              background-position: center;
              background-size: cover;

              @include breakpoint(phablet){
                width:100%;
              }

              @include breakpoint(mobileonly){
                min-height: 15rem;
              }
            }
            .project-slider1{
              background-image: url('/img/2br.jpg');
            }

            .project-slider2{
              background-image: url('/img/3br.jpg');
            }
            .project-content{
              width:50%;
              background-color: $light-gray;
              padding-top:2rem;
              padding-bottom: 2rem;

              @include breakpoint(phablet){
                width:100%;
              }

              @include breakpoint(mobileonly){
                padding-top:1rem;
                padding-bottom: 1rem;
              }

              .status{
                padding-left: 2rem;
                padding-right: 2rem;

                @include breakpoint(mobileonly){
                  padding-left: 1rem;
                  padding-right: 1rem;
                }

                  h4{
                    color:$primary-color;
                  }

                .status-slider{
                  position: relative;

                  .status-background{
                    background-color: $secondary-color;
                    height: 2rem;
                  }

                  .status-bar{
                    background-color: $primary-color;
                    width:20%;
                    height: 2rem;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;

                    .status-label{
                      padding-right: .5rem;
                      color: $white;
                    }
                  }
                  .status-bar-label{
                    position: absolute;
                    top:.5rem;
                    right: .5rem;
                  }
                }
              }

              .project-space{
                margin-top: .5rem;
                padding-left: 2rem;
                padding-right: 2rem;

                @include breakpoint(mobileonly){
                  padding-left: 1rem;
                  padding-right: 1rem;
                }

                h4{
                  color: $primary-color;
                }
              }
              .project-price{
                margin-top: .5rem;
                padding-left: 2rem;
                padding-right: 2rem;

                @include breakpoint(mobileonly){
                  padding-left: 1rem;
                  padding-right: 1rem;
                }

                h4{
                  color: $primary-color;
                }
              }
            }
          }

          .project-content-wrapper2{
            flex-flow: row-reverse;

            @include breakpoint(phablet){
              flex-flow: row wrap;
            }
          }
        }
  }

</style>
