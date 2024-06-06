<template>
  <div>
    <Navbar />
    <div>
      <slot />
    </div>
    <Footer />
    <NavbarBottom />
    <GroupButton class="fixed right-[30px] sm:right-[60px] bottom-[50px] sm:bottom-[100px] z-30" />
  </div>
</template>

<script setup>
import Navbar from "../shared/Navbar.vue";
import NavbarBottom from "../shared/BottomNav.vue";
import Footer from "../shared/Footer.vue";
import NavigationButton from "../shared/NavigationButton.vue";
import MessageButton from "../buttons/MessageButton.vue";
import GroupButton from "../../components/buttons/ButtonGroup.vue"

document.addEventListener("DOMContentLoaded", () => {
  // here is the Vue code
  // console.log("Dom is fully loaded");
});


</script>
