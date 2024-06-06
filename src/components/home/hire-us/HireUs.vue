<template>
  <section class="bg-[#FAFAFC] pt-16 pb-4" id="hireus">
    <section class="container mx-auto px-6 sm:px-24">
      <div class="grid grid-cols-1 pt-2 sm:pt-6">
        <div
          class="text-center font-r-semibold text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-[40px] text-[#6E6E73]"
        >
          Hire us
        </div>
        <div
          class="text-center text-5xl sm:text-6xl md:text-7xl lg:text-[84px]font-semibold pt-6 font-r-b text-ellipsis"
        >
          Want to work with Softzino?
        </div>
      </div>
    </section>
    <div class="flex justify-center bg-[#FAFAFC] pb-8 md:pb-16 pt-12">
      <div class="w-[90%]">
        <!-- :slidesPerView="'auto'" -->
        <!-- :autoplay="{ delay: 1000 }" -->
        <Swiper
          :effect="'coverflow'"
          :grabCursor="true"
          :centeredSlides="true"
          :slides-per-view="3"
          :coverflowEffect="{
            rotate: 50,
            stretch: 0,
            slideShadows: false,
          }"
          :pagination="true"
          :ActiveIndex="2"
          :modules="[EffectCoverflow, Pagination, Autoplay]"
          :initialSlide="2"
          height="666px"
          :breakpoints="{
            '100': {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            '200': {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            '400': {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            '640': {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            '768': {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            '1024': {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            '1280': {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            '1536': {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            '1920': {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }"
        >
          <!-- 1 -->
          <swiper-slide>
            <div class="p-6 rounded-3xl bg-white mainDiv">
              <div class="flex justify-start pb-[60px]">
                <div class="">
                  <dotlottie-player
                    src="https://lottie.host/042e20f5-8e9f-446c-b2e1-acd8db3d2c6b/zt6ockObxG.json"
                    background="transparent"
                    style="width: 200px; height: 200px"
                    :speed="1"
                    :loop="true"
                    :autoplay="true"
                  ></dotlottie-player>
                </div>
              </div>
              <div class="">
                <p
                  class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-6 font-r-b"
                >
                  Recruit
                </p>

                <p class="py-2 text-lg sm:text-xl md:text-2xl pt-4 md:pt-6">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text .
                </p>
              </div>
              <div class="flex justify-end px-4 pt-[80px] expandableBtnShow ">
                <ExpandableButton />
              </div>
            </div>
          </swiper-slide>
          <!-- 2 -->
          <swiper-slide>
            <div class="p-6 rounded-3xl bg-white mainDiv">
              <div class="flex justify-start pb-[60px]">
                <div class="">
                  <dotlottie-player
                    src="https://lottie.host/57e3714b-1f00-4340-834b-e48d7bb9193f/zva1GkuvOu.json"
                    background="transparent"
                    style="width: 200px; height: 200px"
                    :speed="1"
                    :loop="true"
                    :autoplay="true"
                  ></dotlottie-player>
                </div>
              </div>
              <div class="">
                <p
                  class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-6 font-r-b"
                >
                  Single Hire
                </p>
                <p class="py-2 text-lg sm:text-xl md:text-2xl pt-4 md:pt-6">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text .
                </p>
              </div>
              <div class="flex justify-end px-4 pt-[80px] expandableBtnShow">
                <ExpandableButton />
              </div>
            </div>
          </swiper-slide>
          <!-- 3 -->
          <swiper-slide>
            <div class="p-6 rounded-3xl bg-white mainDiv">
              <div class="flex justify-start pb-[60px]">
                <div class="">
                  <dotlottie-player
                    src="https://lottie.host/7ba4dfd2-fb62-4561-a9b2-739eef0dcf36/M36zUO0iw1.json"
                    background="transparent"
                    style="width: 200px; height: 200px"
                    :speed="1"
                    :loop="true"
                    :autoplay="true"
                  ></dotlottie-player>
                </div>
              </div>
              <div class="">
                <p
                  class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-6 font-r-b"
                >
                  Project Hire
                </p>
                <p class="py-2 text-lg sm:text-xl md:text-2xl pt-4 md:pt-6">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text .
                </p>
              </div>
              <div class="flex justify-end px-4 pt-[80px] expandableBtnShow">
                <ExpandableButton />
              </div>
            </div>
          </swiper-slide>
          <!-- 4 -->
          <swiper-slide>
            <div class="p-6 rounded-3xl bg-white mainDiv">
              <div class="flex justify-start pb-[60px]">
                <div class="">
                  <dotlottie-player
                    src="https://lottie.host/042e20f5-8e9f-446c-b2e1-acd8db3d2c6b/zt6ockObxG.json"
                    background="transparent"
                    style="width: 200px; height: 200px"
                    :speed="1"
                    :loop="true"
                    :autoplay="true"
                  ></dotlottie-player>
                </div>
              </div>
              <div class="">
                <p
                  class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-6 font-r-b"
                >
                  Recruit
                </p>

                <p class="py-2 text-lg sm:text-xl md:text-2xl pt-4 md:pt-6">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text .
                </p>
              </div>
              <div class="flex justify-end px-4 pt-[80px] expandableBtnShow">
                <ExpandableButton />
              </div>
            </div>
          </swiper-slide>
        </Swiper>
      </div>
    </div>
  </section>
</template>
<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import "@dotlottie/player-component";
// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import ExpandableButton from "../../buttons/ExpandableButton.vue";
</script>
<style scoped>
.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  /* height: 550px; */
}

.swiper-slide img {
  display: block;
  width: 100%;
}

.swiper-slide-prev > .mainDiv > .expandableBtnShow {
  display: none;
  border: 2px solid green;
}

.swiper-slide-next > .mainDiv > .expandableBtnShow {
  border: 2px solid yellow;
  display: none

}

</style>
