<template>
  <div class="w-full bg-[#fff]">
    <section class="container mx-auto px-7 sm:px-16 md:px-20 lg:px-24 mt-4 py-8">
    <section class="bg-white pb-14 xl:pb-16 2xl:pb-20">
      <div class="">
        <!-- heading section -->
        <p
          class="pb-6 pt-16 lg:pt-20 xl:pt-[110px] text-2xl md:text-3xl lg:text-4xl xl:text-[40px] text-[#6E6E73] font-r-semibold"
        >
          Testimonials
        </p>
        <div class="py-2">
          <h1
            class="text-[#212121] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[110px] font-r-b capitalize"
          >
            What client
          </h1>
          <h1
            class="text-[#212121] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[110px] font-r-b capitalize"
          >
            Says About us
          </h1>
        </div>
      </div>
    </section>
    </section>
    <!-- slider section -->
    <div class="px-4 pb-[100px]">
      <!-- :autoplay="{ delay: 2500 }" -->
      <Swiper
        :modules="[Autoplay]"
        :controller="{ control: controlledSwiper }"
        :space-between="10"
        :slidesPerView="4"
        :breakpoints="{
          '100': {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          '200': {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          '400': {
            slidesPerView: 1,
            spaceBetween: 20,
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
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }"
      >
        <!-- loop -->
        <!-- :centeredSlides="true"
            :initialSlide="2"
            :loop="true" -->
        <SwiperSlide class="container ml-6 sm:ml-[10%] lg:ml[12%] 2xl:ml-[13%]">
          <div class="box">
            <div class="">
              <div class="">
                <img
                  class="rounded-full h-[96px] w-[96px]"
                  src="../../../assets/images/home/circle.png"
                  alt=""
                />
              </div>
              <div class="pt-12">
                <p
                  class="text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-[#212121] font-r-semibold"
                >
                  Lelah Weber
                </p>
                <p class="text-lg md:text-xl lg:text-2xl text-[#6E6E73] pt-3">
                  North Carolina, Darryltown, Tonga
                </p>

                <p
                  class="text-lg md:text-xl lg:text-2xl pt-6 lg:pt-8 text-[#212121] pr-10 sm:pr-3 md:pr-2 lg:pr-2"
                >
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry’s standard dummy
                  text .
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="box">
            <div class="">
              <div class="">
                <img
                  class="rounded-full h-[96px] w-[96px]"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNkzBLP4vbRzNBLzOfllxso6CQAettSfRaT53QSb4j7Yi5mdabSGXCa6BzEs7e_0bDLrM&usqp=CAU"
                  alt=""
                />
              </div>
              <div class="pt-12">
                <p
                  class="text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-[#212121] font-r-semibold"
                >
                  Danny Corkery
                </p>
                <p class="text-lg md:text-xl lg:text-2xl text-[#6E6E73] pt-3">
                  Massachusetts, Lake, Liechtenstein
                </p>

                <p
                  class="text-lg md:text-xl lg:text-2xl pt-6 lg:pt-8 text-[#212121] pr-10 sm:pr-3 md:pr-2 lg:pr-2"
                >
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry’s standard dummy
                  text .
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="box">
            <div class="">
              <div class="">
                <img
                  class="rounded-full h-[96px] w-[96px]"
                  src="../../../assets/images/home/vs.png"
                  alt=""
                />
              </div>
              <div class="pt-12">
                <p
                  class="text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-[#212121] font-r-semibold"
                >
                  Jacinto Langosh
                </p>
                <p class="text-lg md:text-xl lg:text-2xl text-[#6E6E73] pt-3">
                  Alabama, Haagborough, Cameroon
                </p>

                <p
                  class="text-lg md:text-xl lg:text-2xl pt-6 lg:pt-8 text-[#212121] pr-10 sm:pr-3 md:pr-2 lg:pr-2"
                >
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry’s standard dummy
                  text .
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="box">
            <div class="">
              <div class="">
                <img
                  class="rounded-full h-[96px] w-[96px]"
                  src="https://cinimage.org/wp-content/uploads/2021/10/Testimonial-Videos-1.png"
                  alt=""
                />
              </div>
              <div class="pt-12">
                <p
                  class="text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-[#212121] font-r-semibold"
                >
                  Danny Corkery
                </p>
                <p class="text-lg md:text-xl lg:text-2xl text-[#6E6E73] pt-3">
                  Massachusetts, Lake, Liechtenstein
                </p>

                <p
                  class="text-lg md:text-xl lg:text-2xl pt-6 lg:pt-8 text-[#212121] pr-10 sm:pr-3 md:pr-2 lg:pr-2"
                >
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry’s standard dummy
                  text .
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="box">
            <div class="">
              <div class="">
                <img
                  class="rounded-full h-[96px] w-[96px]"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnlPGsv4svHIsG_g1rAsBFNgZ0GC7cP3Lu4Q&usqp=CAU"
                  alt=""
                />
              </div>
              <div class="pt-12">
                <p
                  class="text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-[#212121] font-r-semibold"
                >
                  Lelah Weber
                </p>
                <p class="text-lg md:text-xl lg:text-2xl text-[#6E6E73] pt-3">
                  North Carolina, Darryltown, Tonga
                </p>

                <p
                  class="text-lg md:text-xl lg:text-2xl pt-6 lg:pt-8 text-[#212121] pr-10 sm:pr-3 md:pr-2 lg:pr-2"
                >
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry’s standard dummy
                  text .
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="box">
            <div class="">
              <div class="">
                <img
                  class="rounded-full h-[96px] w-[96px]"
                  src="https://extechdigital.in/wp-content/uploads/2023/03/international-students-and-skilled-immigrants.jpg"
                  alt=""
                />
              </div>
              <div class="pt-12">
                <p
                  class="text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-[#212121] font-r-semibold"
                >
                  Danny Corkery
                </p>
                <p
                  class="text-lg md:text-xl lg:text-2xl text-[#6E6E73] pt-3 font-r-semibold"
                >
                  North Carolina, Darryltown, Tonga
                </p>

                <p
                  class="text-lg md:text-xl lg:text-2xl pt-6 lg:pt-8 text-[#212121] pr-10 sm:pr-3 md:pr-2 lg:pr-2"
                >
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry’s standard dummy
                  text .
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="box">
            <div class="">
              <div class="">
                <img
                  class="rounded-full h-[96px] w-[96px]"
                  src="https://blog.hubspot.com/hs-fs/hubfs/Testimonial-lead-gen-1.webp?width=595&height=400&name=Testimonial-lead-gen-1.webp"
                  alt=""
                />
              </div>
              <div class="pt-12">
                <p
                  class="text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-[#212121] font-r-semibold"
                >
                  Lelah Weber
                </p>
                <p class="text-lg md:text-xl lg:text-2xl text-[#6E6E73] pt-3">
                  North Carolina, Darryltown, Tonga
                </p>

                <p
                  class="text-lg md:text-xl lg:text-2xl pt-6 lg:pt-8 text-[#212121] pr-10 sm:pr-3 md:pr-2 lg:pr-2"
                >
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry’s standard dummy
                  text .
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="box">
            <div class="">
              <div class="">
                <img
                  class="rounded-full h-[96px] w-[96px]"
                  src="https://st2.depositphotos.com/1037987/42002/i/450/depositphotos_420021494-stock-photo-portrait-female-owner-gift-store.jpg"
                  alt=""
                />
              </div>
              <div class="pt-12">
                <p
                  class="text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-[#212121] font-r-semibold"
                >
                  Danny Corkery
                </p>
                <p class="text-lg md:text-xl lg:text-2xl text-[#6E6E73] pt-3">
                  North Carolina, Darryltown, Tonga
                </p>

                <p
                  class="text-lg md:text-xl lg:text-2xl pt-6 lg:pt-8 text-[#212121] pr-10 sm:pr-3 md:pr-2 lg:pr-2"
                >
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry’s standard dummy
                  text .
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";

import "swiper/css";
</script>
