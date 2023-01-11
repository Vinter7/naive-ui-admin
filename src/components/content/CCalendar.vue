<script setup>
import {
  NCalendar,
  useMessage,
  NCard,
  NSpace,
  NAlert,
} from 'naive-ui'
import { ref } from 'vue'

function update(_, { year, month, date }) {
  message.success(`${year}-${month}-${date}`)
}
const schedule = {
  2023: {
    1: {
      11: '开会',
      12: '完成设计稿',
      13: '前后端调试',
    },
  },
}
const v = ref(Date.now())
const message = useMessage()
</script>

<template>
  <n-space vertical>
    <n-alert
      title="今日任务已全部完成"
      type="success"
      :bordered="false"
    >
      感谢您的辛勤付出，祝您生活平安顺遂。
    </n-alert>

    <n-card embedded :bordered="false" title="日历">
      <n-calendar
        v-model:value="v"
        #="{ year, month, date }"
        @update:value="update"
      >
        {{ schedule[year]?.[month]?.[date] ?? '' }}
      </n-calendar>
    </n-card>
  </n-space>
</template>
