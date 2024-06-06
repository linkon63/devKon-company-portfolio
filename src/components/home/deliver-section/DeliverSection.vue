<template>
  <section class="bg-[#FAFAFC]">
    <section class="container mx-auto px-6 sm:px-24">
      <section class="" id="ourservices">
        <div
          class="grid grid-cols-1 pt-8 md:pt-16 lg:pt-20 xl:pt-24 2xl:pt-28 pb-4 md:pb-8 lg:pb-12 xl:pb-16 2xl:pb-20"
        >
          <div
            class="text-center font-r-semibold text-xl md:text-2xl lg:text-3xl xl:text-[40px] text-[#6E6E73]"
          >
            What We Deliver?
          </div>
          <div
            class="text-center text-5xl sm:text-6xl md:text-7xl lg:text-[84px] font-r-b pt-4 sm:pt-8 md:pt-12 lg:pt-14 xl:pt-[72px]"
          >
            Our Expertise
          </div>
        </div>

        <div class="">
          <!-- secion 1 -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-[10px] md:gap-8">
            <!-- cols1 -->
            <div
              class="pt-6 px-6 sm:px-14 sm:pt-14 bg-white rounded-3xl w-min-[300px] w-max-[666px] xl:h-auto 2xl:h-auto 2xl:w-auto"
            >
              <div class="2xl:pb-9 h-[15%]">
                <h4
                  class="text-[#0068DC] w-full font-r-semibold text-xl lg:text-2xl"
                >
                  Designed For Entrepreneurs
                </h4>
                <h2
                  class="font-r-b text-2xl md:text-3xl lg:text-4xl xl:text-[42px] pt-4 pb-[52px]"
                >
                  Mobile Development
                </h2>
              </div>

              <div class="flex items-end relative h-[85%] w-[100%]">
                <img
                  class="w-[296px]"
                  src="../../../assets//images/home/deliver-section/mobileImage.png"
                />
                <div
                  class="h-full w-full flex justify-end items-end pb-12 absolute"
                >
                  <ExpandButton />
                </div>
              </div>
            </div>

            <!-- cols2 -->
            <div
              class="ps-6 sm:ps-14 pt-14 bg-white rounded-3xl w-min-[300px] w-max-[666px] xl:h-auto 2xl:h-auto 2xl:w-auto"
            >
              <div class="flex items-end justify-end relative w-[100%]">
                <img
                  class="h-[340px]"
                  src="../../../assets//images/home/deliver-section/laptopImage.png"
                />
              </div>

              <div class="pt-16 pb-8">
                <div class="w-full sm:w-[90%]">
                  <h4
                    class="text-[#0068DC] w-full font-r-semibold text-xl lg:text-2xl"
                  >
                    Designed For Entrepreneurs
                  </h4>
                  <h2
                    class="font-r-b text-2xl md:text-3xl lg:text-4xl xl:text-[42px] py-4"
                  >
                    Software Development
                  </h2>
                </div>
                <div
                  class="w-[100%] flex justify-end pt-8 px-14 pb-12 h-[100px]"
                >
                  <ExpandButton />
                </div>
              </div>
            </div>
          </div>
          <!-- section 2-->
          <div class="col h-auto">
            <div
              class="bg-white rounded-3xl mt-2 lg:mt-6 py-8 px-8 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2"
            >
              <img
                class="h-[400px] md:h-[546px]"
                src="../../../assets/images/home/deliver-section/poslaptop.png"
              />
              <!-- heading -->
              <div class=" pt-8 sm:pt-28 md:pt-28 lg:pt-36 relative  pb-10 md:pb-14">
                <div class="h-auto sm:h-[180px]">
                  <h4
                    class="text-[#0068DC] w-full font-r-semibold text-xl lg:text-2xl"
                  >
                    Designed For Entrepreneurs
                  </h4>
                  <h2
                    class="font-r-b pt-4 pb-6 text-5xl sm:text-6xl md:text-7xl lg:text-[80px]"
                  >
                    QA Testing
                  </h2>
                </div>
                <div class="flex justify-end sm:absolute bottom-0 right-0 p-6h-[100px] ">
                  <div class="w-[200px] flex justify-end">
                    <ExpandButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- buttons for section 2 -->
          <div class="flex justify-center py-8 lg:pt-12 lg:pb-44">
            <button
              class="px-6 py-[18px] text-black-900 bg-[#E8E8ED] flex justify-between items-center w-[248px] h-[64px] text-[24px] rounded-full"
            >
              <div class="">See All Services</div>
              <p class="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="{1.5}"
                  stroke="currentColor"
                  class="text-2xl"
                  height="24px"
                  width="24px"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </p>
            </button>
          </div>
        </div>
      </section>
    </section>
  </section>
</template>
<script lang="ts" setup>
import ExpandButton from "../../buttons/ExpandableButton.vue";
</script>
<style scoped></style>
