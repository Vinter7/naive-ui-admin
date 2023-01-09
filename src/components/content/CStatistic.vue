<script setup>
import {
  NCard,
  NStatistic,
  NSpace,
  NIcon,
  NNumberAnimation,
} from 'naive-ui'
import {
  StatsChart,
  Calculator,
  CheckmarkDoneCircle,
} from '@vicons/ionicons5'

import { ref } from 'vue'
</script>

<template>
  <NCard :bordered="false">
    <NSpace justify="space-between">
      <n-statistic label="访问量">
        <template #prefix>
          <n-icon><StatsChart /></n-icon>
        </template>
        <n-number-animation show-separator :from="0" :to="34582" />
      </n-statistic>
      <n-statistic label="成交额">
        <template #prefix>
          <n-icon><Calculator /></n-icon>
        </template>
        <n-number-animation show-separator :from="0" :to="47234123" />
      </n-statistic>
      <n-statistic label="交易数">
        <template #prefix>
          <n-icon><CheckmarkDoneCircle /></n-icon>
        </template>
        <n-number-animation show-separator :from="0" :to="8857" />
      </n-statistic>
    </NSpace>
  </NCard>
</template>
