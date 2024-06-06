<template>
  <section
    class="bg-[#FAFAFC] mx-auto mt-0 bg-white-700 flex justify-center w-[100%] h-[460px] md:h-[600] 2xl:h-[960px] relative cursor-pointer"
    id="home"
  >
    <!-- Swiper -->
    <swiper
      :spaceBetween="30"
      :direction="'vertical'"
      :effect="'fade'"
      :navigation="false"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      :autoplay="{
        delay: 5000
      }"
      class="mySwiper h-[100%] w-[100%]"
      >
      <swiper-slide>
        <div class="relative h-[100%] bg-[#FAFAFC] py-0">
          <div
            class="relative h-[100%] flex justify-center text-center text-black py-0 px-3"
          >
            <div
              class="video-docker absolute left-[0%] 2xl:left-[15%] h-[100%] w-[100%] overflow-hidden"
            >
              <dotlottie-player
                src="https://lottie.host/c4484477-b903-45f0-9212-12f5e1266c0b/aSvvJ7AGuc.json"
                background="transparent"
                :speed="1"
                :loop="true"
                :autoplay="true"
                class="opacity-10 grayscale h-[90] w-[90] 2xl:h-[70%] 2xl:w-[70%]"
                style="z-index: -1"
              >
              </dotlottie-player>
            </div>
            <div class="video-content w-[1124px] mt-[130px]">
              <div class="h-16 w-6/12 
                   ml-[22%] sm:ml-[30%] md:ml-[34%] lg:ml-[37%] xl:ml-[37%] mb-8"
              >
                <FlipAnimation />
              </div>

              <div
                class="text-[20px] md:text-[60px] xl:text-[80px] 2xl:text-[110px]
                 text-[#212121]  font-b-medium font-semibold leading-none"
              >
                We Are Trusted By World Leading Brands<span
                  class="text-blue-700"
                  >.</span
                >
              </div>
              <div
                class="text-[12px] sm:text-[15px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[24px]
                 mt-[6%] sm:mt-[3%] md:mt-[2%] lg:mt-[50px] xl:mt-[50px] 2xl:mt-[50px] 
                 w-[300px] md:w-[600px] lg:w-[940px] xl:w-[970px]
                 ml-[15%] sm:ml-[26%] md:ml-[75px] lg:ml-[22px] xl:ml-[80px]
                text-[#6E6E73] font-normal"
              >
                Since our establishment, we have been delivering high-quality
                and sustainable software solutions for corporate purposes of
                worldwide businesses.
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="relative h-[100%] flex justify-center text-center text-black py-0 px-3"
        >
          <div
            class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden"
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
          <div class="video-content w-[1286px] mt-[100px]">
            <div
              class="text-[20px] text-[#212121] sm:text-[30px] md:text-[60px] lg:text-[70px] xl:text-[80px] 2xl:text-[110px] font-b-medium font-semibold leading-none"
            >
              Improve and Innovate The
              <span class="text-blue-700">SOFTZINO</span> Trends<span
                class="text-blue-700"
                >.</span
              >
            </div>
            <div
              class="text-[12px] sm:text-[15px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]
              mt-[50px] w-[350px] sm:w-[400px] md:w-[600px] lg:w-[900px] xl:w-[970px] 
              ml-[10%] sm:ml-[15%] md:ml-[10%] lg:ml-[4%] xl:ml-[12%] text-[#212121]"
            >
              Since our establishment, we have been delivering high-quality and
              sustainable software solutions for corporate purposes of worldwide
              businesses.
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="relative h-[100%] flex flex-col items-center justify-center text-center text-white py-0 px-3"
        >
          <div
            class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden"
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
        </div>
      </swiper-slide>
    </swiper>
    <MessageButton
      id="messageButton"
      class="absolute end-[1.7rem] bottom-[4rem]"
      style="z-index: 10"
    />
  </section>
</template>

<script setup>
import MessageButton from "../../buttons/MessageButton.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules

import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import FlipAnimation from "../animation/hero-section/FlipAnimation.vue";
import { onMounted } from "vue";
const modules = [EffectFade, Pagination, Autoplay];
</script>

<style>
.swiper-pagination-vertical.swiper-pagination-bullets,
.swiper-vertical > .swiper-pagination-bullets {
  left: 15px !important;
}

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
</style>
