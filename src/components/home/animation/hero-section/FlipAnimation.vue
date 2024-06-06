<template>
  <div class="relative">
    <div
      class="animation relative h-[55px] overflow-hidden"
      id="animationParent"
    >
      <!-- animation 1 -->
      <div
        id="anim1"
        class="absolute z-10 left-[0px] animation-1 flex justify-center items-center cursor-pointer"
        @click="mdClick"
      >
        <img
          class="anim-img-1"
          src="../../../../assets/icons/hero-sec-tion-animation/mobile.png"
          alt=""
          srcset=""
        />
        <h1 class="hero-section-text text-xl md:text-2xl lg:text-3xl font-r-semibold px-2">
          Mobile Development
        </h1>
      </div>

      <!-- animation 2 -->
      <!-- style="visibility: hidden;" -->
      <div
        id="anim2"
        class="absolute animation-2 flex justify-center items-center cursor-pointer"
        @click="sdClick"
      >
        <img
          class="anim-img-2"
          src="../../../../assets/icons/hero-sec-tion-animation/software.png"
          alt=""
          srcset=""
        />
        <!-- <object data="./images/animationPhoneIcon.png" width="36" height="46"></object> -->
        <h1 class="hero-section-text text-xl md:text-2xl lg:text-3xl font-r-semibold text-nowrap text-ellipsis">
          Software Development
        </h1>
      </div>

      <!-- animation 3 -->
      <div
        id="anim3"
        class="absolute animation-3 flex justify-center items-center cursor-pointer"
        @click="wdClick"
      >
        <img
          class="anim-img-3"
          src="../../../../assets/icons/hero-sec-tion-animation/mobile.png"
          alt=""
          srcset=""
        />
        <!-- <object data="./images/animationPhoneIcon.png" width="36" height="46"></object> -->
        <h1 class="hero-section-text  text-xl md:text-2xl lg:text-3xl font-r-semibold px-2">
          Web Development
        </h1>
      </div>
    </div>
  </div>
</template>
<script setup>
import { gsap } from "gsap";

import { CustomEase } from "gsap/CustomEase";
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack";

import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { onMounted, ref } from "vue";

const eventClick = ref(1);

// animation 1
const anim1 = ref();
const anim1Img = ref();

// animation 2
const anim2 = ref();
const anim2Img = ref();

// animation 3
const anim3 = ref();
const anim3Img = ref();

const initAnimation = () => {
  // console.log("## initAnimation");
  gsap.set(".animation-1", {
    x: 0,
    y: 0,
    opacity: 1,
    ease: "power.out",
  });

  gsap.set(".animation-2", {
    x: 10,
    y: 40,
    opacity: 0,
    ease: "power.out",
  });

  gsap.set(".animation-3", {
    x: 0,
    y: 40,
    opacity: 0,
    ease: "power.out",
  });
};

const mdClick = () => {
  // console.log("## mdClick");

  if (eventClick.value === 1) {
    let t1 = gsap.timeline();
    t1.to(".animation-1", {
      y: -42,
      ease: "power.out",
      duration: 0.4,
      opacity: 0,
      onStart: () => {
        gsap.fromTo(".anim-img-1", { opacity: 1, x: 0 }, { x: -15 });
      },
      onComplete: () => {
        gsap.to(".animation-1", { opacity: 0, visibility: "visible" });
      },
    });

    t1.to(".animation-2", {
      y: 0,
      x: 10,
      duration: 0.3,
      opacity: 1,
      onStart: () => {
        gsap.fromTo(".anim-img-2", { opacity: 1, x: 0 }, { x: -12 });
      },
      onComplete: () => {
        eventClick.value = 2;
      },
    });
  }
};

const sdClick = () => {
  // console.log("## sdClick");
  if (eventClick.value === 2) {
    let t2 = gsap.timeline();
    t2.to(".animation-2", {
      opacity: 0,
      y: -40,
      x: 10,
      ease: "power.out",
      duration: 0.3,
      onStart: () => {
        gsap.fromTo(".anim-img-2", { x: -10 }, { x: -20 });
      },
      onComplete: () => {
        gsap.to(".animation-2", { visibility: "visible", opacity: 0 });
      },
    });

    t2.to(".animation-3", {
      opacity: 1,
      y: 0,
      x: 0,
      ease: "power4.out",
      duration: 0.4,
      onStart: () => {
        gsap.fromTo(".anim-img-3", { x: -20 }, { x: 0 });
      },
      onComplete: () => {
        eventClick.value = 3;
      },
    });
  }
};

const wdClick = () => {
  // console.log("## wdClick");

  if (eventClick.value === 3) {
    let t3 = gsap.timeline();
    t3.to(".animation-3", {
      x: 0,
      y: 40,
      duration: 0.2,
      opacity: 0,
      ease: "power4.out",
      onStart: () => {
        gsap.fromTo(".anim-img-3", { opacity: 1, x: 0 }, { x: -10 });
      },
      ease: "power4.out",
    });

    t3.to(".animation-2", {
      y: 0,
      duration: 0.1,
      opacity: 1,
      ease: "power.out",
      onStart: () => {
        let t4 = gsap.timeline();
        gsap.fromTo(".anim-img-2", { opacity: 1, x: 0 }, { x: -10 });
        t4.to(".animation-2", {
          y: 50,
          ease: "power.out",
          opacity: 1,
          duration: 0.2,
        });

        t4.to(".animation-1", {
          y: 0,
          duration: 0.2,
          opacity: 1,
          onStart: () => {
            gsap.fromTo(".anim-img-1", { opacity: 1, x: -10 }, { x: 0 });
          },
        });

        t4.to(".animation-2", {
          ease: "power.out",
          opacity: 0,
        });
      },
      onComplete: () => {
        eventClick.value = 1;
      },
    });
  }
};

onMounted(() => {
  gsap.registerPlugin(
    Flip,
    ScrollTrigger,
    Observer,
    ScrollToPlugin,
    Draggable,
    MotionPathPlugin,
    EaselPlugin,
    PixiPlugin,
    TextPlugin,
    RoughEase,
    ExpoScaleEase,
    SlowMo,
    CustomEase
  );
  initAnimation();
});
</script>
<style scoped></style>
