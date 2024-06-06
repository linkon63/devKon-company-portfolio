<template>
  <section class="bg-[#FAFAFC]">
    <section class="container mx-auto px-6 sm:px-24 sm:py-8">
      <div class="">
        <div class="">
          <!-- heading section -->
          <div class="grid grid-cols-1 pt-10 sm:pt-[70px]">
            <div
              class="text-left font-r-semibold text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-[40px] text-[#6E6E73]"
            >
              What we get?
            </div>
            <div
              class="text-left text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[110px] font-r-b pt-6 font-r-b text-ellipsis text-[#212121]"
            >
              Our Achievements
            </div>
            <p class="text-[#6E6E73] text-xl md:text-2xl pt-6 w-full md:w-9/12">
              Since our establishment, we have been delivering high-quality and
              sustainable software solutions for corporate purposes of worldwide
              businesses.
            </p>
          </div>

          <div class="relative lg:flex lg:justify-between gap-8 pt-20">
            <div class="flex justify-center mb-12 sm:mb-12 md:mb-12 lg:mb-0">
              <div
                class="group relative cursor-pointer rounded-3xl"
                @mouseenter="state.grayscaleLevelImg1 = 'grayscale-0'"
                @mouseleave="state.grayscaleLevelImg1 = 'grayscale'"
              >
                <img
                  src="../../../assets/images/home/achivment-section/aone.png"
                  alt=""
                  class="h-[370px] sm:h-[470px] md:h-[570px] lg:h-[670px] w-[360px] sm:w-[460px] md:w-[560px] lg:w-[660px] grayscale rounded-3xl"
                  :class="state.grayscaleLevelImg1"
                />
                <div class="absolute bottom-3 left-[10%] w-full">
                  <div
                    class="transition transform translate-y-[0px] invisible ease-in-out absolute group-hover:visible group-hover:translate-y-[-150px] duration-300 w-[80%] "
                  >
                    <div
                      class="w-full p-4 sm:p-6 md:p-8 rounded-3xl backdrop-blur-xl backdrop-brightness-200 bg-white/30"
                    >
                      <p
                        class="text-2xl md:text-3xl lg:text-[32px] font-r-semibold text-[#212121] "
                      >
                        Project Name
                      </p>
                      <p
                        class="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-600 sm:py-2"
                      >
                        Web Application
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-center mb-12 sm:mb-12 md:mb-12 lg:mb-0">
              <div
                class="group relative cursor-pointer rounded-3xl"
                @mouseenter="state.grayscaleLevelImg2 = 'grayscale-0'"
                @mouseleave="state.grayscaleLevelImg2 = 'grayscale'"
              >
                <img
                  src="../../../assets/images/home/achivment-section/atwo.png"
                  alt=""
                  class="h-[370px] sm:h-[470px] md:h-[570px] lg:h-[670px] w-[360px] sm:w-[460px] md:w-[560px] lg:w-[660px] grayscale hover:opacity-100 hover:grayscale-0"
                  :class="state.grayscaleLevelImg2"
                />
                <div class="absolute bottom-3 left-[10%] w-full">
                  <div
                    class="transition transform translate-y-[0px] invisible ease-in-out absolute group-hover:visible group-hover:translate-y-[-150px] duration-300  w-[80%]"
                  >
                    <div
                      class="w-full p-4 sm:p-6 md:p-8 rounded-3xl backdrop-blur-xl backdrop-brightness-200 bg-white/30"
                    >
                      <p
                        class="text-2xl md:text-3xl lg:text-[32px] font-r-semibold text-[#212121]"
                      >
                        Project Name
                      </p>
                      <p
                        class="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-600 sm:py-2"
                      >
                        Web Application
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-12 cursor-pointer mb-6 md:mb-0 lg:mb-0"
          >
            <div class="flex justify-center">
              <div
                class="group relative"
                @mouseenter="state.grayscaleLevelImg3 = 'grayscale-0'"
                @mouseleave="state.grayscaleLevelImg3 = 'grayscale'"
              >
                <img
                  src="../../../assets/images/home/achivment-section/athree.png"
                  alt=""
                  class="h-[280px] sm:h-[320px] md:[380px] lg:h-[420px] grayscale hover:opacity-100 hover:grayscale-0"
                  :class="state.grayscaleLevelImg3"
                />
                <div class="absolute bottom-3 left-[10%] w-full">
                  <div
                    class="transition transform translate-y-[0px] invisible ease-in-out absolute group-hover:visible group-hover:translate-y-[-150px] duration-300  w-[80%]"
                  >
                    <div
                      class="w-full p-4 rounded-3xl backdrop-blur-xl backdrop-brightness-90 bg-gray/30 bg-white/30"
                    >
                      <p
                        class="text-2xl md:text-3xl lg:text-[32px] font-r-semibold text-[#212121]"
                      >
                        Project Name
                      </p>
                      <p
                        class="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-600 sm:py-2"
                      >
                        Web Application
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex justify-center">
              <div
                class="h-[280px] sm:h-[320px] md:[380px] lg:h-[420px] group relative"
                @mouseenter="state.grayscaleLevelImg4 = 'grayscale-0'"
                @mouseleave="state.grayscaleLevelImg4 = 'grayscale'"
              >
                <img
                  src="../../../assets/images/home/achivment-section/afour.png"
                  alt=""
                  class="h-full w-full grayscale hover:opacity-100 hover:grayscale-0"
                  :class="state.grayscaleLevelImg4"
                />
                <div class="absolute bottom-3 left-[10%] w-full">
                  <div
                    class="transition transform translate-y-[0px] invisible ease-in-out absolute group-hover:visible group-hover:translate-y-[-150px] duration-300  w-[80%]"
                  >
                    <div
                      class="w-full p-4 rounded-3xl backdrop-blur-xl backdrop-brightness-90 bg-gray/30 bg-white/30"
                    >
                      <p
                        class="text-2xl md:text-3xl lg:text-[32px] font-r-semibold text-[#212121]"
                      >
                        Project Name
                      </p>
                      <p
                        class="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-600 sm:py-2"
                      >
                        Web Application
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-center">
              <div
                class="h-[280px] sm:h-[320px] md:[380px] lg:h-[420px] group relative"
                @mouseenter="state.grayscaleLevelImg5 = 'grayscale-0'"
                @mouseleave="state.grayscaleLevelImg5 = 'grayscale'"
              >
                <img
                  src="../../../assets/images/home/achivment-section/afive.png"
                  alt=""
                  class="h-full w-full grayscale hover:opacity-100 hover:grayscale-0"
                  :class="state.grayscaleLevelImg5"
                />

                <div class="absolute bottom-3 left-[10%] w-full">
                  <div
                    class="transition transform translate-y-[0px] invisible ease-in-out absolute group-hover:visible group-hover:translate-y-[-150px] duration-300  w-[80%]"
                  >
                    <div
                      class="w-full p-4 rounded-3xl backdrop-blur-xl backdrop-brightness-90 bg-gray/30 bg-white/30"
                    >
                      <p
                        class="text-2xl md:text-3xl lg:text-[32px] font-r-semibold text-[#212121]"
                      >
                        Project Name
                      </p>
                      <p
                        class="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-600 sm:py-2"
                      >
                        Web Application
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- faq section -->
      <div class="pt-[110px]">
        <div class="grid grid-cols-1 pt-6">
          <div
            class="text-left font-r-semibold text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-[40px] text-[#6E6E73]"
          >
            Do you want to know more ?
          </div>
          <div
            class="text-left text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[110px] font-semibold pt-6 font-r-b text-ellipsis"
          >
            FAQ
          </div>
          <p
            class="text-[#6E6E73] text-base sm:text-lg md:text-xl lg:text-2xl pt-6"
          >
            Since our establishment, we have been delivering high-quality and
            sustainable software solutions for corporate purposes of worldwide
            businesses.
          </p>
        </div>

        <div class="pb-28">
          <FaqSection
            id="accordion"
            heading="What makes Softzino diffrent from others software development companies"
            content="A Michigan based company approached us to develop a food delivery platform, which they would offer to local restaurants and delivery persons in a region as a third-party platform for getting the food to the doorstep of the customer. The customer would use the platform to find the nearest restaurants and get their food delivered to their destinations. A Michigan based company approached us to develop a food delivery platform, which they would offer to local restaurants and delivery persons in a region as a third-party platform for getting the food to the doorstep of the customer. The customer would use the platform to find the nearest restaurants and get their food delivered to their destinations."
          />
          <FaqSection
            id="accordion1"
            heading="How does Softzino ensure sustainablity of its software solution?"
            content=" Lorem Since our establishment, we have been delivering high-quality and
          sustainable software solutions for corporate purposes of worldwide
          businesses. Since our establishment, we have been delivering high-quality and
          sustainable software solutions for corporate purposes of worldwide
          businesses. ipsum, dolor sit amet consectetur adipisicing elit. Vero iure autem possimus ea saepe rerum praesentium? Neque ut labore harum culpa quia at nulla repudiandae!2lorem"
          />
          <FaqSection
            id="accordion2"
            heading="Can Softzino handle the entire software development lifecycle?"
            content=" Lorem Since our establishment, we have been delivering high-quality and
          sustainable software solutions for corporate purposes of worldwide
          businesses. Since our establishment, we have been delivering high-quality and
          sustainable software solutions for corporate purposes of worldwide
          businesses. ipsum, dolor sit amet consectetur adipisicing elit. Vero iure autem possimus ea saepe rerum praesentium? Neque ut labore harum culpa quia at nulla repudiandae!2lorem"
          />

          <FaqSection
            id="accordion3"
            heading="What industries does Softzino specialize in?"
            content=" Lorem Since our establishment, we have been delivering high-quality and
          sustainable software solutions for corporate purposes of worldwide
          businesses. Since our establishment, we have been delivering high-quality and
          sustainable software solutions for corporate purposes of worldwide
          businesses. ipsum, dolor sit amet consectetur adipisicing elit. Vero iure autem possimus ea saepe rerum praesentium? Neque ut labore harum culpa quia at nulla repudiandae!2lorem"
          />

          <FaqSection
            id="accordion4"
            heading="Does Softzino offer custom software solutions for startups and small businesses?"
            content=" Lorem Since our establishment, we have been delivering high-quality and
          sustainable software solutions for corporate purposes of worldwide
          businesses. Since our establishment, we have been delivering high-quality and
          sustainable software solutions for corporate purposes of worldwide
          businesses. ipsum, dolor sit amet consectetur adipisicing elit. Vero iure autem possimus ea saepe rerum praesentium? Neque ut labore harum culpa quia at nulla repudiandae!2lorem"
          />


        </div>
      </div>
    </section>
  </section>
</template>
<script setup>
import { reactive } from "vue";
import FaqSection from "../faq-section/FaqTab.vue";
const state = reactive({
  grayscaleLevelImg1: "grayscale",
  grayscaleLevelImg2: "grayscale",
  grayscaleLevelImg3: "grayscale",
  grayscaleLevelImg4: "grayscale",
  grayscaleLevelImg5: "grayscale",
});
</script>
