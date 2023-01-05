<script setup>
import { useLoginStore } from '@/stores/login'
import { useRouter } from 'vue-router'
import { NCard } from 'naive-ui'
let loginStore = useLoginStore()
const router = useRouter()
function login() {
  // console.log(islogin)
  loginStore.islogin = true
  router.push('/admin')
}
</script>

<template>
  <div class="whole">
    <NCard class="card" title="登录">
      <h1>登录页</h1>
      <button @click="login">登录</button>
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
  height: 600px;
  margin: auto;
  position: relative;
  top: 60px;
}
</style>
