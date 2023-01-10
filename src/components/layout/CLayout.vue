<script setup>
import {
  NLayout,
  NLayoutSider,
  NLayoutContent,
  NLayoutHeader,
  NH2,
} from 'naive-ui'
import { ref } from 'vue'

const collapsed = ref(false)
</script>

<template>
  <n-layout has-sider position="absolute">
    <n-layout-sider
      bordered
      collapse-mode="width"
      :collapsed-width="72"
      :width="220"
      :collapsed="collapsed"
      show-trigger
      @collapse="collapsed = true"
      @expand="collapsed = false"
    >
      <slot name="sideBar" :collapsed="collapsed"> 侧边栏 </slot>
    </n-layout-sider>
    <n-layout>
      <n-layout-header style="height: 60px; padding: 1rem 1rem 0px">
        <slot name="header"> 导航栏 </slot>
      </n-layout-header>
      <n-layout-content
        position="absolute"
        :native-scrollbar="false"
        style="top: 60px; padding: 24px 24px 0"
      >
        <slot>
          <n-h2 v-for="i in 30">{{ i }}.内容</n-h2>
        </slot>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>
