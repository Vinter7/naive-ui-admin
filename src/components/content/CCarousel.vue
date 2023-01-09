<script setup>
import { NCarousel } from 'naive-ui'
</script>

<template>
  <n-carousel
    direction="vertical"
    dot-placement="right"
    mousewheel
    style="width: 100%; height: 373px"
  >
    <img
      class="carousel-img"
      src="https://cdn.staticaly.com/gh/Vinter7/img_storage@master/20230109/xxx.5mrqs2z30uc0.webp"
    />
    <img
      class="carousel-img"
      src="https://cdn.staticaly.com/gh/Vinter7/img_storage@master/20230109/xxx.2vprrvsl4hy0.webp"
    />
    <img
      class="carousel-img"
      src="https://cdn.staticaly.com/gh/Vinter7/img_storage@master/20230109/xxx.60ots28a6300.webp"
    />
    <img
      class="carousel-img"
      src="https://cdn.staticaly.com/gh/Vinter7/img_storage@master/20230109/xxx.27aonm0agajo.webp"
    />
  </n-carousel>
</template>

<style scoped>
.carousel-img {
  width: 100%;
  /* height: 373px; */
}
</style>
