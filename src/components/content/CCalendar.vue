<script setup>
import { NCalendar, useMessage, NCard } from 'naive-ui'
import { ref } from 'vue'

function update(_, { year, month, date }) {
  message.success(`${year}-${month}-${date}`)
}

const v = ref(Date.now())
const message = useMessage()
</script>

<template>
  <n-card embedded :bordered="false" title="日历">
    <n-calendar
      v-model:value="v"
      #="{ year, month, date }"
      @update:value="update"
    >
      {{ year }}/{{ month }}
    </n-calendar>
  </n-card>
</template>
