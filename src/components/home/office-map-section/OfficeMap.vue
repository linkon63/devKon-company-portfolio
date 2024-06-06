<template>
  <section id="ourcompany" class="pb-[80px] bg-[#fff] mt-[70px] mb-[60px]">
    <div class="container mx-auto px-24 flex justify-center py-4 lg:py-[52px]">
      <div class="grid grid-cols-1">
        <div class="flex justify-center">
          <div class="p-8 mt-12">
            <!-- heading section -->
            <div class="text-center graydeep font-r-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-[#6E6E73] mb-[22px]">
              Where are we?
            </div>
            <div class="text-[#212121] text-center text-5xl sm:text-6xl md:text-7xl lg:text-[84px] font-r-b">
              Our Offices
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto bg-white-700 h-[596px] background-map relative">
      <div class="flex justify-between">
        <span @click="showLocation('first_location')"
          class="mt-[3%] ml-[5%] md:mt-[4%] md:ml-[6%]  2xl:mt-[6%%] 2xl:ml-[8%%] text-3xl absolute cursor-pointer"><i
            class="fa fa-map-marker text-blue-600" aria-hidden="true"></i></span>
        <span @click="showLocation('second_location')"
          class="mt-[14%] ml-[72%] md:mt-[14%] md:ml-[64%] 2xl:mt-[72%%] 2xl:ml-[64%]  text-3xl absolute cursor-pointer"><i
            class="fa fa-map-marker text-blue-600" aria-hidden="true"></i></span>
        <span @click="showLocation('third_location')"
          class="mt-[27%] ml-[84%] md:mt-[30%] md:ml-[85%] 2xl:mt-[29%] 2xl:ml-[78%] text-3xl absolute cursor-pointer"><i
            class="fa fa-map-marker text-blue-600" aria-hidden="true"></i></span>
      </div>
      <div id="first_location"
        class="ml-[9%] mt-[0%] md:ml-[9%] md:mt-[-0%] lg:ml-[9%] lg:mt-[-8%] xl:ml-[8%] xl:mt-[0%] 2xl:ml-[8%] 2xl:mt-[4%] absolute hidden">
        <Location
          id="first_location"
          liveMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d421931.85838408716!2d-117.72343415746673!3d34.290811330972545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c3613ed3a24297%3A0x2905e50eba6b7d7a!2sApple%20Valley%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1716885836614!5m2!1sen!2sbd"
          width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade" title="USA Office"
          address=" Victor Valley of San Bernardino County, in the U.S. state of California." phone="+8812345678" />
      </div>
      <div id="second_location"
        class="ml-[36%] mt-[0%] md:ml-[29%] md:mt-[0%] lg:ml-[34%] lg:mt-[-8%] xl:ml-[37%] xl:mt-[0%] 2xl:ml-[38%] 2xl:mt-[4%] absolute hidden">
        <Location
          id="second_location"
          liveMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58387.15328335826!2d90.31873084856971!3d23.847134507184272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c41087fd55d5%3A0x1342e9e70c75ff57!2sSoftzino%20Technologies!5e0!3m2!1sen!2sbd!4v1716725710800!5m2!1sen!2sbd"
          title="Bangladesh Office" address="Tropical Akhand Tower, 23 Gareeb-e-Nawaz Ave, Dhaka 1230"
          phone="+8812345678" />
      </div>
      <div id="third_location"
        class="ml-[48%] mt-[20%] md:ml-[50%] md:mt-[16%] lg:ml-[55%] lg:mt-[18%] xl:ml-[57%] xl:mt-[23%] 2xl:ml-[52%] 2xl:mt-[20%] absolute hidden">
        <Location
          id="third_location"
          liveMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210344.72001300947!2d-117.41585963545806!3d34.53744269655712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c3646c5fba401d%3A0xfd8fe5575d7ba060!2sApple%20Valley!5e0!3m2!1sen!2sbd!4v1716886324387!5m2!1sen!2sbd"
          title="Japan Office" address="Tokyo Central Post Office
2-7-2 Marunouchi, Chiyoda-ku" phone="+8812345678" />
      </div>
    </div>
  </section>
</template>

<script setup>

import Location from './shared/Location.vue'

const showLocation = (id) => {
  let element = document.getElementById(id);
  if (element.classList.contains("hidden")) {
    element.classList.remove("hidden");
  } else {
    element.classList.add("hidden");
  }
};
</script>

<style scoped>
.background-map {
  background-image: url("../../../assets/images/home/office-maps/map.svg");
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
