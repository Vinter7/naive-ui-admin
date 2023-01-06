<script setup>
import { NCard, NH1 } from 'naive-ui'
</script>

<template>
  <div class="whole">
    <NCard class="card">
      <template #header>
        <img class="logo" src="/logo.svg" alt="logo" />
      </template>
      <template #header-extra>
        <n-h1>后台管理系统</n-h1>
      </template>
      <template #default>
        <router-view></router-view>
      </template>
    </NCard>
  </div>
</template>

<style scoped>
.whole {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url(https://cdn.staticaly.com/gh/Vinter7/img_storage@master/20230105/he.6jfw9r9uxds0.webp);
}
.card {
  width: 400px;
  margin: auto;
  position: relative;
  top: 100px;
}
.logo {
  position: relative;
  width: 60px;
  top: -5px;
}
</style>
