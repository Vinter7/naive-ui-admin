<script setup>
import {
  NH2,
  NStatistic,
  NSpace,
  NCard,
  NAvatar,
  NText,
  NGrid,
  NGi,
} from 'naive-ui'
import CProject from '../components/content/CProject.vue'
import CWorkingList from '../components/content/CWorkingList.vue'
import CTodo from '../components/content/CTodo.vue'
import CCalendar from '../components/content/CCalendar.vue'
</script>

<template>
  <n-space vertical size="large">
    <n-card embedded :bordered="false">
      <n-space justify="space-between">
        <n-space>
          <n-avatar
            src="https://cdn.staticaly.com/gh/Vinter7/img_storage@master/profile/ProfilePhoto.1pdcnpolxli8.webp"
            round
            :size="60"
          />
          <div>
            <div class="title">早安，高枕枕，今天也要加油鸭</div>
            今日多云转晴，气温20℃ - 25℃
          </div>
        </n-space>
        <n-space>
          <n-statistic label="项目数"> 17 </n-statistic>
          <n-statistic label="代办"> 7/12 </n-statistic>
          <n-statistic label="通知"> 54 </n-statistic>
        </n-space>
      </n-space>
    </n-card>
    <n-grid x-gap="12" y-gap="12" cols="1 1000:24">
      <n-gi span="14">
        <n-space size="large" vertical>
          <c-project />
          <c-working-list />
        </n-space>
      </n-gi>
      <n-gi span="10">
        <n-space size="large" vertical>
          <c-todo />
          <c-calendar />
        </n-space>
      </n-gi>
    </n-grid>
  </n-space>
  <!-- 日历 代码 列表 表格 时间 树  代办-->
</template>
<style scoped>
.title {
  font-size: 18px;
  font-weight: bold;
  margin-top: 7px;
}
</style>
