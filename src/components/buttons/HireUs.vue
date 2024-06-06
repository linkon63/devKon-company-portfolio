<template>
  <div class="outer">
    <button class="animate-btn w-[90px] h-[48px] font-[20px] py-3 px-4">Hire Us</button>
  </div>
</template>

<style scoped>
.animate-btn {
  margin: 0;
  border-radius: 26px;
  border: 2px solid #d109b6;
  color: #fff;
  background: linear-gradient(90deg, #9513d1, #d109b6, #9513d1, #d109b6);
  background-size: 400% 400%;
  animation: gradientBG 2s ease infinite;
  cursor: pointer;
}

@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
