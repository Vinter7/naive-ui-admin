<script setup>
import { NSpace, NGrid, NGi } from 'naive-ui'
import CProgress from '../components/content/CProgress.vue'
import CCarousel from '../components/content/CCarousel.vue'
import CStatistic from '../components/content/CStatistic.vue'
import CTimeline from '../components/content/CTimeline.vue'
import CTable from '../components/content/CTable.vue'
</script>

<template>
  <n-space size="large" vertical>
    <n-grid x-gap="12" y-gap="12" cols="2  1100:24">
      <n-gi span="13">
        <c-carousel />
      </n-gi>
      <n-gi span="11">
        <n-space vertical size="large">
          <c-progress />
          <c-statistic />
        </n-space>
      </n-gi>
    </n-grid>
    <n-grid x-gap="12" y-gap="12" cols="2  1100:24">
      <n-gi span="5">
        <CTimeline />
      </n-gi>
      <n-gi span="19">
        <c-table />
      </n-gi>
    </n-grid>
  </n-space>
  <!-- 进度 数据表格 数值动画 统计数据 时间线 -->
</template>

<style scoped>
.flex {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
}
</style>
