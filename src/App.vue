<script setup>
import { darkTheme, NConfigProvider } from 'naive-ui'
import { useDarkStore } from '@/stores/darkmode'
import { computed } from 'vue'

const dark = computed(() =>
  useDarkStore().isdark ? darkTheme : null
)
</script>

<template>
  <n-config-provider :theme="dark">
    <router-view></router-view>
  </n-config-provider>
</template>
