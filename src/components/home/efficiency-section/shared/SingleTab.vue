<template>
  <div class="py-4 lg:py-2 container">
    <div
      class="text-center text-[#212121] text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-thin mb-[3rem] lineheight-52"
    >
    {{ props.topDescription }}
    </div>
    <TabItems :tabItems="props.descriptionList" />
  </div>
</template>

<script setup>

import TabItems from './TabItems.vue'

const props = defineProps({
    topDescription: String,
    descriptionList: Array
});

</script>

<style scoped></style>
