<script setup>
import { NCard, NButton, NGrid, NGi, NGradientText } from 'naive-ui'
</script>

<template>
  <NCard embedded :bordered="false" title="主要项目">
    <template #header-extra>
      <n-button
        text
        tag="a"
        href="https://github.com/Vinter7"
        target="_blank"
        type="primary"
        >更多内容详见Github仓库</n-button
      >
    </template>
    <n-grid x-gap="12" y-gap="12" cols="2 700:3">
      <n-gi>
        <n-card hoverable :bordered="false">
          <template #header>
            <n-gradient-text>Naive UI Admin</n-gradient-text>
          </template>
          基于 Naive UI
          组件库的后台管理系统，界面清爽简洁，支持深色模式，多处使用Grid和Flex布局方法，具有较好的响应性
        </n-card>
      </n-gi>
      <n-gi>
        <n-card hoverable :bordered="false">
          <template #header>
            <n-gradient-text type="info">My Blog</n-gradient-text>
          </template>
          基于 VuePress 的个人博客站点，用于记录我的技术生活，支持 Vue
          组件，可以将一些小项目嵌入其中，进行展示
        </n-card>
      </n-gi>
      <n-gi>
        <n-card hoverable :bordered="false">
          <template #header>
            <n-gradient-text type="warning">My Note</n-gradient-text>
          </template>
          基于 VitePress
          的静态文档站点，用于记录和查阅我的笔记、示例代码等，使用
          Vite 进行构建，使得项目整体轻量、快速
        </n-card>
      </n-gi>
      <n-gi>
        <n-card hoverable :bordered="false">
          <template #header>
            <n-gradient-text type="error">My Games</n-gradient-text>
          </template>
          基于 Vue 框架
          的网页游戏，在有趣的同时练习写程序逻辑的熟练度，目前已仿写了扫雷、2048、键盘钢琴、羊了个羊等
        </n-card>
      </n-gi>
      <n-gi>
        <n-card hoverable :bordered="false">
          <template #header>
            <n-gradient-text>Yarn Manage</n-gradient-text>
          </template>
          基于 React Native
          框架的纬编针织机器人自动化生产线接线管理App，来自纵向课题，解决企业应用中人工介入接线的问题
        </n-card>
      </n-gi>
      <n-gi>
        <n-card hoverable :bordered="false">
          <template #header>
            <n-gradient-text>Self-service Store</n-gradient-text>
          </template>
          基于机器视觉的自动水果售卖项目的前后端应用，题目来自研究生电子设计竞赛，后端基于
          Express 框架，前端基于小程序组件开发
        </n-card>
      </n-gi>
    </n-grid>
  </NCard>
</template>
