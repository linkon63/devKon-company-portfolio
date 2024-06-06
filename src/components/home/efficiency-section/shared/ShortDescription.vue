<template>
  <div class="lg:flex mt-[5rem]">
    <div class="w-full lg:w-1/4">
      <p class="text-[#0567E1] text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-left font-r-semibold ">{{ props.title }} </p>
    </div>
    <div class="w-full lg:w-3/4 text-left">
      <p class="mt-2 lg:mt-0 text-justify md:text-left text-[#212121] text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-r-medium lineheight-52">
        {{ props.first_description }}
      </p>
      <p class="pb-[16px] text-justify md:text-left text-base sm:text-lg md:text-xl lg:text-[24px] text-[#212121] pt-[24px] lineheight-40">
        {{ props.second_description }}
      </p>
      <a href="#" class="mb-2 text-justify md:text-left text-base sm:text-lg md:text-xl lg:text-[24px] font-r-semibold text-[#0567E1] cursor-pointer">Read more</a>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  title: String,
  first_description: String,
  second_description: String,
})

</script>

<style>

.lineheight-52 {
  line-height: 52px;
}

.lineheight-40 {
  line-height: 40px;
}

.lineheight-32 {
  line-height: 32px;
}

</style>
