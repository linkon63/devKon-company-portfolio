<template>
  <div class="mb-[6rem]">
    <div class="mt-16 lg:flex" v-for="(item, index) in props.tabItems" :key="'item' + index">
      <div class="w-full lg:w-1/4 pr-0 lg:pr-8">
        <p class="text-[#0567E1] text-left text-2xl md:text-3xl lg:text-[32px] font-r-semibold">
          {{ item.title }}
        </p>
      </div>
      <div class="w-full lg:w-3/4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div class="py-[16px] lg:py-0" v-for="(list, index1) in item.list"
            :key="'item' + index + 'list' + index1">
            <div class="pb-[31px] flex justify-start items-start">
              <div class=" flex items-start h-full w-[50px]">
                <img src="../../../../assets/images/home/effeciency-section/success.gif" class="h-12 w-12" />
              </div>
              <div
                class="px-4 w-full pt-[0px] lg:pt-[3px] text-2xl md:text-3xl lg:text-[32px] mt-0 sm:mt-[8px] md:mt-[5px] lg:mt-1">
                {{ list.item }}
              </div>
            </div>
          </div>
        </div>
        <div class="mb-2 mt-4 text-justify md:text-left text-base sm:text-lg md:text-xl lg:text-[24px] lineheight-40">
          {{ item.description }}
        </div>
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
