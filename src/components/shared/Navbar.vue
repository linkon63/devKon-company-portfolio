<template>
  <!-- header section -->
  <header class="w-full h-[90px] bg-white sticky top-0 z-[999]">
    <nav class="container mx-auto px-6 h-[90px] bg-white flex flex-col justify-center">
      <div class="flex justify-between">
        <!-- logo -->
        <div class="w-auto lg:w-[252px]">
          <a href="" class="">
            <img src="../../assets/images/home/Softzino Logo.png" class="h-[48px] ps-1" alt="softzino Logo" />
          </a>
        </div>
        <!-- hidden button -->
        <div id="hamburger" class="flex space-x-3">
          <button data-collapse-toggle="navbar-sticky" type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-end text-sm rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <!-- navs -->
        <div class="items-center justify-between hidden lg:flex md:order-0 lg:w-8/12 lg:justify-center px-4"
          id="navbar-sticky">
          <ul class="flex text-black flex-col p-4 md:p-0 rounded-lg md:space-x-4 rtl:space-x-reverse md:flex-row">
            <li>
              <a href="#home"
                class="py-2 px-0 text-black rounded hover:text-blue-500 text-[16px] text-nowrap font-extralight"
                aria-current="page">Home</a>
            </li>
            <li>
              <a href="#ourcompany"
                class="py-2 px-0 text-black rounded hover:text-blue-500 text-[16px] text-nowrap font-extralight">Company</a>
            </li>
            <li>
              <a href="#ourservices"
                class="py-2 px-0 text-black rounded hover:text-blue-500 text-[16px] text-nowrap font-extralight">Our
                Serives</a>
            </li>
            <li>
              <a href="#ourworks"
                class="py-2 px-0 text-black rounded hover:text-blue-500 text-[16px] text-nowrap font-extralight">Our
                Works</a>
            </li>
            <li>
              <a href="#ourteam"
                class="py-2 px-0 text-black rounded hover:text-blue-500 text-[16px] text-nowrap font-extralight">Our
                Team</a>
            </li>
            <li>
              <a href="#carrier" class="py-2 px-0 text-black rounded hover:text-blue-500 text-[16px]">Carrier</a>
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
    </nav>
    
    <!-- mobile menu -->
    <div class="hidden mobile-menu bg-white py-4 animate-slide-fade">
      <ul class="px-[40px]">
        <li class="p-2">
          <a href="#home"
                class="py-2 px-0 text-black rounded hover:text-blue-500 text-[16px] text-nowrap font-extralight"
                aria-current="page">Home</a>
        </li>
        <li class="p-2">
          <a href="#ourcompany"
                class="py-2 px-0 text-black rounded hover:text-blue-500 text-[16px] text-nowrap font-extralight">Company</a>
        </li>
        <li class="p-2">
          <a href="#ourservices"
                class="py-2 px-0 text-black rounded hover:text-blue-500 text-[16px] text-nowrap font-extralight">Our
                Serives</a>
        </li>
        <li class="p-2">
          <a href="#ourworks"
                class="py-2 px-0 text-black rounded hover:text-blue-500 text-[16px] text-nowrap font-extralight">Our
                Works</a>
        </li>
        <li class="p-2">
          <a href="#ourteam"
                class="py-2 px-0 text-black rounded hover:text-blue-500 text-[16px] text-nowrap font-extralight">Our
                Team</a>
        </li>
        <li class="p-2">
          <a href="#carrier" class="py-2 px-0 text-black rounded hover:text-blue-500 text-[16px]">Carrier</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { onMounted } from "vue";
import HireButton from "../buttons/HireUsButton.vue";

onMounted(() => {
  window.addEventListener('scroll', () => {
    var scrolled = window.scrollY;
    if (scrolled > (document.querySelector('#home').clientHeight)) {
      document.getElementById("topNavigateButton").classList.remove('hidden');

    } else {
      document.getElementById("topNavigateButton").classList.add('hidden');
    }
  });


  const btn = document.querySelector("#hamburger");
  const menu = document.querySelector(".mobile-menu");

  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

})

</script>

<style scoped>
@keyframes slide-fade-up {
  0% {
    transform: translateX(-50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.animate-slide-fade {
  opacity: 0;
  animation: slide-fade-up 0.5s ease-in-out forwards;
}

</style>