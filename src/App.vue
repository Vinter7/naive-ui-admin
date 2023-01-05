<script setup>
import {
  darkTheme,
  NConfigProvider,
  NMessageProvider,
  NDialogProvider,
} from 'naive-ui'
import { useDarkStore } from '@/stores/darkmode'
import { computed } from 'vue'

const dark = computed(() =>
  useDarkStore().isdark ? darkTheme : null
)
</script>

<template>
  <n-config-provider :theme="dark">
    <n-dialog-provider>
      <n-message-provider>
        <router-view></router-view>
      </n-message-provider>
    </n-dialog-provider>
  </n-config-provider>
</template>
