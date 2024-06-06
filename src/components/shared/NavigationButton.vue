<template>
    <!-- top button -->
    <header id="topNavigateButton" class="width-full">
      <nav class="flex justify-center">
        <div
          class="fixed z-30 bottom-[5%] sm:bottom-[10%] md:bottom-[15%] lg:bottom-[20%] right-[2%]"
        >
          <div>
            <div
              class="h-[50px] w-[50px] md:h-[80px] md:w-[80px] rounded-full -rotate-90 transition-all duration-1000 ease-linear flex justify-end items-center group relative"
            >
              <a href="#home"
                class="bg-[#0068dc] text-white hover:text-[#0567E1] hover:bg-[#9AC7FF] rounded-full h-[50px] w-[50px] md:h-[80px] md:w-[80px] flex justify-center items-center"
              >
                <div class="  cursor-pointer">
                  <img class="-rotate-[270deg]" src="../../assets/images/home/float_icon_small.png" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
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
});

</script>