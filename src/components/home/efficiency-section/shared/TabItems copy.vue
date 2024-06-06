<template>
  <div class="mb-[6rem]">
    <div
    class="lg:flex mt-16"
    v-for="(item, index) in props.tabItems"
    :key="'item' + index"
  >
    <div class="w-full lg:w-1/4">
      <p class="text-[#0567E1] text-left text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-b-medium font-semibold text-nowrap">
        {{ item.title }}
      </p>
    </div>
    <div class="w-full lg:w-3/4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <div
          class="py-[16px] flex justify-start items-center text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-normal text-nowrap"
          v-for="(list, index1) in item.list"
          :key="'item' + index + 'list' + index1"
        >
          <img src="../../../../assets/images/home/effeciency-section/success.gif" class="h-[38px] w-[38px] xl:h-[48px] xl:w-[48px] 2xl:h-[52px] 2xl:w-[52px] mr-4"/>
          {{ list.item }}
        </div>
      </div>
      <p class="mb-2 mt-4 text-justify md:text-left text-base sm:text-lg md:text-xl lg:text-[24px] font-normal">
        {{ item.description }}
      </p>
    </div>
  </div>
  </div>
</template>

<script setup>
const props = defineProps({
  tabItems: Array,
});
</script>

<style scoped></style>
