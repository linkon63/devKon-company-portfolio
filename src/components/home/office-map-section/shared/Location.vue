<template>
    <div class="bg-transparent py-24 flex items-center justify-center w-[220px] h-[280px] md:w-[260px] md:h-[320px] lg:w-[300px] lg:h-[360px] xl:w-[340px] xl:h-[300px] 2xl:w-[380px] 2xl:h-[340px]">
        <!-- Card Go here 	 -->
        <div class="bg-white rounded-lg shadow-2xl">
            <div @click="showLocation(props.id)" class="md:hidden h-[25px] w-[25px] bg-white rounded-full absolute flex justify-center items-center right-2 top-2 cursor-pointer">
                <i class="fa fa-times text-red-600" aria-hidden="true"></i>
            </div>
            <!-- image -->
            <!-- <img src="../../../../assets/images/home/office-maps/location.png"
                class="rounded-t-lg w-full h-[100px] lg:h-[150px] xl:h-[180px] 2xl:h-[200px] object-cover"> -->
                <iframe class="rounded-t-lg w-full h-[100px] lg:h-[150px] xl:h-[180px] 2xl:h-[200px] object-cover" :src="props.liveMap"></iframe>
            <!-- content -->
            <div class="p-2">
                <div class="py-1 text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[32px]">{{ props.title }}</div>
                <div class="py-1 grid grid-cols-12">
                    <img src="../../../../assets/images/home/map.svg" class="h-[24px] w-[24px]" alt="">
                    <p class=" col-span-10 text-[#212121] text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] mt-[-6px]">{{ props.address }}</p>
                </div>
                <div class="py-2 grid grid-cols-12">
                    <img src="../../../../assets/images/home/phone.svg" class="h-[24px] w-[24px]" alt="">
                    <p class="px-1 col-span-10 text-[#212121] text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px]  mt-[-6px]">{{ props.phone }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    id: String,
    liveMap: String,
    mapLocation: String,
    title: String,
    address: String,
    phone: String
});


const showLocation = (id) => {
  let element = document.getElementById(id);
  if (element.classList.contains("hidden")) {
    element.classList.remove("hidden");
  } else {
    element.classList.add("hidden");
  }
};

</script>