//It need refactoring the CSS and convetions

<template>
  
  <div v-swiper:mySwiper="swiperOption" class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><span class="channelDefault"></span></div>
      <div class="swiper-slide"><span class="channelDefault"></span></div>
      <div class="swiper-slide"><span class="channelDefault"></span></div>      
      <div class="swiper-slide"><span class="channelDefault"></span></div>
      <div class="swiper-slide"><img src="~/assets/img/zoome-logo-150.png" width="100px"/></div>
      <div class="swiper-slide"><span class="channelDefault"></span></div>      
      <div class="swiper-slide"><span class="channelDefault"></span></div>
      <div class="swiper-slide"><span class="channelDefault"></span></div>
      <div class="swiper-slide"><span class="channelDefault"></span></div>      
      <div class="swiper-slide"><span class="channelDefault"></span></div>
      <div class="swiper-slide"><span class="channelDefault"></span></div>
      <div class="swiper-slide"><span class="channelDefault"></span></div>      
      <div class="swiper-slide"><span class="channelDefault"></span></div>
      <div class="swiper-slide"><span class="channelDefault"></span></div>
      <div class="swiper-slide"><span class="channelDefault"></span></div>      
    </div>
    <div class="swiper-pagination swiper-pagination-bullets"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        swiperOption: {
          //loop: true,
          //loopedSlides: true,
          initialSlide: 4,
          slidesPerView: 9,
          centeredSlides: true,
          spaceBetween: 10,
          grabCursor: true,
          on: {
            slideChange() {
              console.log('onSlideChangeEnd', this);
            },
            tap() {
              console.log('onTap', this);
            }
          }
        }
      }
    },
    mounted() {
    }
  }
</script>


<style lang="scss" scoped>
.swiper-container {
  padding: 30px 0 0 0;
  height: 300px;
  width: 1010px;
  //margin-left: 3%;
}

.zoome-channel {
  background-image: url("~/assets/img/zoome-logo-150.png");
  background-position: center;
}

.swiper-wrapper {
}

.swiper-slide {
  border: 3px solid transparent;
  width: 100px !important;
  height: 100px !important;
  border-radius: 100px;
  text-align: center;
  font-size: 38px;
  //background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: width 0.3s, height 0.3s, margin 0.3s; 
  overflow: hidden;
}

.swiper-slide img {
  transition: transform 0.8s;
}

.channelDefault {
  display: block;
  width: 100px;
  height: 100px;
  background: url("~/assets/img/profile-example.png");
  background-position: center;
  border-radius: 100px;  
  transition: transform 1s;  
}

.swiper-slide-active {
  width: 160px !important;
  height: 160px !important;
  margin-top: -25px;
  border: 4px solid $featuredColor;
}

.swiper-slide-active span,
.swiper-slide-active img, {
  transform: scale(1.30);
}



</style>