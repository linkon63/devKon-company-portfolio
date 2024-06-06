<template>
  <!-- header section -->
  <div>
    <header class="width-[1920px] mt-0">
      <nav class="flex justify-center">
        <div
          class="fixed z-30 mx-auto w-[1915px] max-w-full px-10 lg:px-32 xl:px-48 2xl:px-[278px] py-2 lg:py-3 xl:py-4 2xl:py-5 bg-white"
        >
          <div class="flex justify-between">
            <!-- logo -->
            <div class="w-auto lg:w-[252px]">
              <a href="" class="">
                <img
                  src="../../assets/images/home/Softzino Logo.png"
                  class="h-[48px]"
                  alt="softzino Logo"
                />
              </a>
            </div>
            <!-- hidden button -->
            <div class="flex space-x-3">
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-end text-sm rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <!-- navs -->
            <div
              class="items-center justify-between hidden lg:flex md:order-0 lg:w-8/12 lg:justify-center px-4"
              id="navbar-sticky"
            >
              <ul
                class="flex text-black flex-col p-4 md:p-0 rounded-lg md:space-x-4 rtl:space-x-reverse md:flex-row"
              >
                <li>
                  <a
                    href="#home"
                    class="py-2 px-0 text-black rounded hover:text-blue-500 text-[16px] text-nowrap font-extralight"
                    aria-current="page"
                    >Home</a
                  >
                </li>
                <li>
                  <a
                    href="#ourcompany"
                    class="py-2 px-0 text-black rounded hover:text-blue-500 text-[16px] text-nowrap font-extralight"
                    >Company</a
                  >
                </li>
                <li>
                  <a
                    href="#ourservices"
                    class="py-2 px-0 text-black rounded hover:text-blue-500 text-[16px] text-nowrap font-extralight"
                    >Our Serives</a
                  >
                </li>
                <li>
                  <a
                    href="#ourworks"
                    class="py-2 px-0 text-black rounded hover:text-blue-500 text-[16px] text-nowrap font-extralight"
                    >Our Works</a
                  >
                </li>
                <li>
                  <a
                    href="#ourteam"
                    class="py-2 px-0 text-black rounded hover:text-blue-500 text-[16px] text-nowrap font-extralight"
                    >Our Team</a
                  >
                </li>
                <li>
                  <a
                    href="#carrier"
                    class="py-2 px-0 text-black rounded hover:text-blue-500 text-[16px]"
                    >Carrier</a
                  >
                </li>
              </ul>
            </div>
            <!-- hireus button -->
            <div class="hidden lg:block w-2/12 h-inherit">
              <div class="w-full flex justify-end items-center">
                <HireButton />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <!-- bottom nav -->
    <header class="width-[1920px] mt-0">
      <nav class="flex justify-center">
        <div
          class="fixed z-30 bottom-0 mx-auto w-[1915px] max-w-full px-10 lg:px-32 xl:px-48 2xl:px-[278px] bg-[#F3F4F4]"
        >
          <nav class="w-full">
            <div class="bg-[#F3F4F4] py-2">
              <div class="flex justify-center lg:justify-between items-center">
                <div class="text-xs">
                  Now Hiring: React Native Node Blockchain Managers BDM and
                  <a href="" class="text-blue-600 font-bold">more</a>
                </div>

                <div
                  class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center text-xs"
                >
                  <span class="flex px-1">
                    <span class="px-1 py-0.5">
                      <img
                        src="../../assets/images/home/envelope-svgrepo-com.svg"
                        width="16"
                        height="16"
                      />
                    </span>
                    <span>info@softzino.com</span>
                  </span>
                  <span class="flex px-1">
                    <span class="px-1 py-0.5">
                      <img
                        src="../../assets/images/home/phone-call-svgrepo-com.svg"
                        width="16"
                        height="16"
                      />
                    </span>
                    <span>01855-255342</span>
                  </span>
                  <span class="">
                    <div class="flex justify-center">
                      <span class="px-1 py-0.5">
                        <img
                          src="../../assets/images/home/phone-call-svgrepo-com.svg"
                          width="16"
                          height="16"
                        />
                      </span>
                      <span>(0)-203-514-4774</span>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </nav>
    </header>

    <!-- top button -->
    <header id="topNavigateButton" class="hidden width-[1920px] mt-0">
      <nav class="flex justify-center">
        <div
          class="fixed z-30 bottom-20 left-[80%] mx-auto w-[1915px] max-w-full px-10 lg:px-32 xl:px-48 2xl:px-[278px] "
        >
          <div>
            <div
              class="h-[52px] w-[52px] rounded-full -rotate-90 transition-all duration-1000 ease-linear flex justify-end items-center group relative"
            >
              <a href="#home"
                class="bg-[#0068dc] text-white hover:text-[#0567E1] hover:bg-[#9AC7FF] rounded-full h-[52px] w-[52px] flex justify-center items-center"
              >
                <div class="  cursor-pointer"
                  ><i class="fa fa-long-arrow-right" aria-hidden="true"></i
                ></div>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import HireButton from "../buttons/HireUsButton.vue";

onMounted(() => {
    window.addEventListener('scroll', () => {
      var scrolled =  window.scrollY;
      if(scrolled > (document.querySelector('#home').clientHeight)){
        document.getElementById("topNavigateButton").classList.remove('hidden');

      }else{
        document.getElementById("topNavigateButton").classList.add('hidden');
      }
    });
})

</script>
