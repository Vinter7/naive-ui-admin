<script setup>
import {
  NCalendar,
  useMessage,
  NCard,
  NSpace,
  NAlert,
  NModal,
  NDynamicTags,
} from 'naive-ui'
import { ref, reactive, computed } from 'vue'

const date = computed(() => {
  let d = new Date(v.value)
  return [d.getFullYear(), d.getMonth() + 1, d.getDate()]
})

const finish = computed(
  () =>
    !schedule[now.getFullYear()][now.getMonth() + 1][
      now.getDate()
    ]?.[0]
)

const schedule = reactive({
  2023: {
    1: {
      11: ['开会'],
      12: ['完成设计稿'],
      13: ['前后端调试'],
      14: ['点击日历表'],
      15: ['可以添改日程'],
      16: ['本日日程删光后'],
      17: ['将提示今日完成'],
    },
    2: {
      11: ['开会'],
      12: ['完成设计稿'],
      13: ['前后端调试'],
      14: ['点击日历表'],
      15: ['可以添改日程'],
      16: ['本日日程删光后'],
      17: ['将提示今日完成'],
    },
    3: {
      11: ['开会'],
      12: ['完成设计稿'],
      13: ['前后端调试'],
      14: ['点击日历表'],
      15: ['可以添改日程'],
      16: ['本日日程删光后'],
      17: ['将提示今日完成'],
    },
    4: {
      11: ['开会'],
      12: ['完成设计稿'],
      13: ['前后端调试'],
      14: ['点击日历表'],
      15: ['可以添改日程'],
      16: ['本日日程删光后'],
      17: ['将提示今日完成'],
    },
    5: {
      11: ['开会'],
      12: ['完成设计稿'],
      13: ['前后端调试'],
      14: ['点击日历表'],
      15: ['可以添改日程'],
      16: ['本日日程删光后'],
      17: ['将提示今日完成'],
    },
    6: {
      11: ['开会'],
      12: ['完成设计稿'],
      13: ['前后端调试'],
      14: ['点击日历表'],
      15: ['可以添改日程'],
      16: ['本日日程删光后'],
      17: ['将提示今日完成'],
    },
    7: {},
    8: {},
    9: {},
    10: {},
    11: {},
    12: {},
  },
})

const showModal = ref(false)
const now = new Date()
const v = ref(now.getTime())
const message = useMessage()
</script>

<template>
  <n-space vertical>
    <n-alert
      v-if="finish"
      title="今日任务已全部完成"
      type="success"
      :bordered="false"
    >
      感谢您的辛勤付出，祝您生活平安顺遂。
    </n-alert>
    <n-alert
      v-else
      title="今日任务尚未完成"
      type="warning"
      :bordered="false"
    >
      一鼓作气，再接再厉，加油哦
    </n-alert>

    <n-card embedded :bordered="false" title="日历">
      <n-calendar
        v-model:value="v"
        #="{ year, month, date }"
        @update:value="showModal = true"
      >
        {{ schedule[year]?.[month]?.[date]?.join('\n') ?? '' }}
      </n-calendar>
    </n-card>
  </n-space>
  <n-modal
    style="width: 300px; top: -200px"
    v-model:show="showModal"
    preset="card"
    :bordered="false"
    :title="`${date[1]}月${date[2]}日`"
  >
    <template #header-extra>
      {{ `${date[0]}年` }}
    </template>
    <n-dynamic-tags
      v-model:value="schedule[date[0]][date[1]][date[2]]"
    />
  </n-modal>
</template>
