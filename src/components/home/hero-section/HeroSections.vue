<template>
  <section
    class="bg-[#FAFAFC] mx-auto mt-0 bg-white-700 flex justify-center w-full h-[500px] md:h-[700] lg:h-[960px] relative cursor-pointer"
    id="home"
  >
    <!-- Swiper -->
    <swiper
      :spaceBetween="30"
      :direction="windowWidth"
      :effect="'fade'"
      :navigation="false"
      :pagination="{ clickable: true }"
      :modules="modules"
      class="mySwiper h-[100%] w-[100%]"
    >
      <swiper-slide>
        <div class="h-full w-full flex justify-center">
          <div
            class="video-docker flex justify-center items-center absolute h-[100%] w-[100%] overflow-hidden"
          >
            <dotlottie-player
              src="https://lottie.host/c4484477-b903-45f0-9212-12f5e1266c0b/aSvvJ7AGuc.json"
              background="transparent"
              :speed="1"
              :loop="true"
              :autoplay="true"
              class="opacity-10 grayscale h-[70%] w-[70%]"
              style="z-index: -1"
            >
            </dotlottie-player>
          </div>
          <div class="video-content h-full w-full grid grid-cols-1">
            <div class="flex justify-center items-center">
              <div class="relative">
                <div>
                  <!-- top -->
                  <div class="flex justify-center mt-[10rem] ml-[10%] sm:ml-[9%] md:ml-[7%] lg:ml-[0px]">
                    <div class="w-5/6 sm:w-4/6 md:w-3/6 lg:w-[35%]">
                      <div>
                        <FlipAnimation />
                      </div>
                    </div>
                  </div>
                  <!-- down -->
                  <div class="grid grid-rows-2 gap-y-10 relative pt-12">
                    <div class="row1 flex justify-center">
                      <div
                        class="px-[20px] md:px-[15px] lg:px-0 text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[110px] text-[#212121] font-r-b leading-none max-w-[1130px]"
                      >
                        We Are Trusted By World Leading Brands<span
                          class="text-blue-700"
                          >.</span
                        >
                      </div>
                    </div>
                    <div class="row2 flex justify-center">
                      <div
                        class="px-[20px] md:px-[15px] lg:px-0 text-center text-base sm:text-lg md:text-xl lg:text-[24px] text-[#6E6E73] max-w-[970px]"
                      >
                        Since our establishment, we have been delivering
                        high-quality and sustainable software solutions for
                        corporate purposes of worldwide businesses.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="h-full w-full flex justify-center">
          <div class="video-overlay"></div>
          <div
            class="video-docker flex justify-center items-center absolute h-[100%] w-[100%] overflow-hidden"
          >
            <video
              class="min-w-full min-h-full absolute object-cover"
              src="../../../assets/videos/hero_slider_video_2.mp4"
              type="video/mp4"
              autoplay
              muted
              loop
            ></video>
          </div>
          <div class="video-content h-full w-full grid grid-cols-1">
            <div class="flex justify-center items-center">
              <div class="grid grid-rows-2 gap-y-10 relative mt-[10%]">
                <div class="row1 flex justify-center">
                  <div
                    class="px-[20px] md:px-[15px] lg:px-0 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[110px] font-r-b leading-none max-w-[1290px] text-center"
                  >
                    Improve and Innovate The
                    <span class="text-blue-700">SOFTZINO</span> Trends<span
                      class="text-blue-700"
                      >.</span
                    >
                  </div>
                </div>
                <div class="row2 flex justify-center">
                  <div
                    class="px-[20px] md:px-[15px] lg:px-0 text-center text-base sm:text-lg md:text-xl lg:text-[24px] max-w-[970px]"
                  >
                    Since our establishment, we have been delivering
                    high-quality and sustainable software solutions for
                    corporate purposes of worldwide businesses.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="h-full w-full flex justify-center">
          <div
            class="video-docker flex justify-center items-center absolute h-[100%] w-[100%] overflow-hidden"
          >
            <video
              class="min-w-full min-h-full absolute object-cover"
              src="../../../assets/videos/hero_slider_video_1.mp4"
              type="video/mp4"
              autoplay
              muted
              loop
            ></video>
          </div>
          <div class="video-content h-full w-full grid grid-cols-1"></div>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup>
import FlipAnimation from "../animation/hero-section/FlipAnimation.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules

import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import { onMounted, ref } from "vue";
const modules = [EffectFade, Pagination, Autoplay];


const windowWidth = ref('vertical');

const handleResize  = () => {
  windowWidth.value = window.innerWidth < 768 ? 'horizontal' : 'vertical';
}

onMounted(() => {
  window.addEventListener('resize', handleResize);
})




</script>

<style scoped>
.video-docker video {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.video-docker::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
}

.video-content {
  z-index: 2;
}
.swiper-pagination-bullet {
  color: #fff;
}
.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  opacity: 0.6;
  z-index: 2;
}
</style>
