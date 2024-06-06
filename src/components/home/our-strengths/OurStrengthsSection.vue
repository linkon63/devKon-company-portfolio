<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "@dotlottie/player-component";
</script>

<template>
  <section class="bg-[#fff]">
    <section class="container mx-auto px-6 sm:px-24">
      <div class="pt-9 md:pt-16 lg:pt-20 xl:pt-24 2xl:pt-[100px]">
        <div class="">
          <div
            class="text-center font-r-semibold text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-[40px] text-[#6E6E73]"
          >
            Our Strength
          </div>
          <div
            class="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[84px] lg:pt-3 xl:pt-4 2xl:pt-6 font-r-b pt-6"
          >
            Why Work With Us
          </div>
        </div>

        <div class="">
          <p
            class="pt-[52px] relative text-center text-xl md:text-[24px] lg:text-[32px] md:leading-[3.25rem]"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s.
          </p>
        </div>
      </div>
    </section>

    <div class="pt-14 pb-[100px]">
      <div class=" ">
        <!-- :autoplay="{ delay: 2500 }" -->
        <!-- loop -->
        <Swiper
          :modules="[Autoplay]"
          :controller="{ control: controlledSwiper }"
          :space-between="10"
          :slidesPerView="4"
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
              slidesPerView: 4,
              spaceBetween: 10,
            },
            '1536': {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            '1920': {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }"
        >
          <SwiperSlide class="container ml-6 sm:ml-[10%] lg:ml[12%] 2xl:ml-[13%]">
            <div class="p-2">
              <div class="mb-4">
                <dotlottie-player
                  src="https://lottie.host/824235f3-b55b-4388-9dc2-889d4d156feb/Q0UWhTVY2j.json"
                  background="transparent"
                  style="width: 76px; height: 76px"
                  :speed="1"
                  :loop="true"
                  :autoplay="true"
                ></dotlottie-player>
              </div>
              <div
                class="font-r-semibold text-xl sm:text-[32px] leading-[44px]"
              >
                Industry Expertise & Experience
              </div>
              <div
                class="text-left text-[#212121] font-light py-4 text-lg md:text-2xl pr-4  line-height-10"
              >
                <p class="">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide class="">
            <div class="p-2">
              <div class="mb-4">
                <dotlottie-player
                  src="https://lottie.host/2b8aa38e-82b6-44ef-81b8-1e6491d17241/2I3qYBN8gS.json"
                  background="transparent"
                  style="width: 76px; height: 76px"
                  :speed="1"
                  :loop="true"
                  :autoplay="true"
                ></dotlottie-player>
              </div>

              <div
                class="font-r-semibold text-xl sm:text-[32px] leading-[44px]"
              >
                Technology Proficiency & Capabilities
              </div>
              <div
                class="text-left text-[#212121] font-light py-4 text-lg md:text-2xl pr-4  line-height-10  "
              >
                <p class="">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide class="">
            <div class="p-2 cursor-pointer">
              <div class="mb-4">
                <dotlottie-player
                  src="https://lottie.host/99739f98-5c45-41cb-8edc-cea760d315d3/Fcn0chbjoW.json"
                  background="transparent"
                  style="width: 76px; height: 76px"
                  :speed="1"
                  :loop="true"
                  :autoplay="true"
                ></dotlottie-player>
              </div>
              <div
                class="font-r-semibold text-xl sm:text-[32px] leading-[44px]"
              >
                Customize Solution & flexibility
              </div>
              <div
                class="text-left text-[#212121] font-light py-4 text-lg md:text-2xl pr-4  line-height-10  "
              >
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry.
                </p>
              </div>
            </div></SwiperSlide
          >

          <SwiperSlide class="">
            <div class="p-2 cursor-pointer">
              <div class="mb-4">
                <dotlottie-player
                  src="https://lottie.host/16792eb0-6feb-4ab3-adc5-227ad9667889/ruWPo494KH.json"
                  background="transparent"
                  style="width: 76px; height: 76px"
                  :speed="1"
                  :loop="true"
                  :autoplay="true"
                ></dotlottie-player>
              </div>
              <div
                class="font-r-semibold text-xl sm:text-[32px] leading-[44px]"
              >
                Transparency & Communication
              </div>
              <div
                class="text-left text-[#212121] font-light py-4 text-lg md:text-2xl pr-4  line-height-10  "
              >
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry.
                </p>
              </div>
            </div></SwiperSlide
          >

          <SwiperSlide class="">
            <div class="p-2 cursor-pointer">
              <div class="mb-4">
                <dotlottie-player
                  src="https://lottie.host/824235f3-b55b-4388-9dc2-889d4d156feb/Q0UWhTVY2j.json"
                  background="transparent"
                  style="width: 76px; height: 76px"
                  :speed="1"
                  :loop="true"
                  :autoplay="true"
                ></dotlottie-player>
              </div>
              <div
                class="font-r-semibold text-xl sm:text-[32px] leading-[44px]"
              >
                Robust & Long-Term Relationship
              </div>
              <div
                class="text-left text-[#212121] font-light py-4 text-lg md:text-2xl pr-4  line-height-10  "
              >
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide class="">
            <div class="p-2 cursor-pointer">
              <div class="mb-4">
                <dotlottie-player
                  src="https://lottie.host/2b8aa38e-82b6-44ef-81b8-1e6491d17241/2I3qYBN8gS.json"
                  background="transparent"
                  style="width: 76px; height: 76px"
                  :speed="1"
                  :loop="true"
                  :autoplay="true"
                ></dotlottie-player>
              </div>
              <div
                class="font-r-semibold text-xl sm:text-[32px] leading-[44px]"
              >
                Technology Proficiency & Capabilities
              </div>
              <div
                class="text-left text-[#212121] font-light py-4 text-lg md:text-2xl pr-4  line-height-10  "
              >
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide class="">
            <div class="p-2 cursor-pointer">
              <div class="mb-4">
                <dotlottie-player
                  src="https://lottie.host/2b8aa38e-82b6-44ef-81b8-1e6491d17241/2I3qYBN8gS.json"
                  background="transparent"
                  style="width: 76px; height: 76px"
                  :speed="1"
                  :loop="true"
                  :autoplay="true"
                ></dotlottie-player>
              </div>
              <div
                class="font-r-semibold text-xl sm:text-[32px] leading-[44px]"
              >
                Value for Money
              </div>
              <div
                class="text-left text-[#212121] font-light py-4 text-lg md:text-2xl pr-4  line-height-10  "
              >
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide class="">
            <div class="p-2 cursor-pointer">
              <div class="mb-4">
                <dotlottie-player
                  src="https://lottie.host/2b8aa38e-82b6-44ef-81b8-1e6491d17241/2I3qYBN8gS.json"
                  background="transparent"
                  style="width: 76px; height: 76px"
                  :speed="1"
                  :loop="true"
                  :autoplay="true"
                ></dotlottie-player>
              </div>
              <div
                class="font-r-semibold text-xl sm:text-[32px] leading-[44px]"
              >
                Clear Call-to-Action
              </div>
              <div
                class="text-left text-[#212121] font-light py-4 text-lg md:text-2xl pr-4  line-height-10  "
              >
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<style scoped>
.line-height-10{
  line-height: 40px;
}
</style>