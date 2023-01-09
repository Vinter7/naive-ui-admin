<script setup>
import { NSpace, NCard, NProgress, NEl, NGi, NGrid } from 'naive-ui'
const percentage = {
  default: 80,
  success: 60,
  warning: 40,
  error: 20,
}
</script>

<template>
  <n-card :bordered="false" embedded>
    <n-grid x-gap="12" cols="2">
      <n-gi>
        <n-el>
          <n-progress
            type="multiple-circle"
            :stroke-width="6"
            :circle-gap="1"
            :percentage="[80, 60, 40, 20]"
            :color="[
              'var(--info-color)',
              'var(--success-color)',
              'var(--warning-color)',
              'var(--error-color)',
            ]"
            :rail-style="[
              { stroke: 'var(--info-color)', opacity: 0.3 },
              { stroke: 'var(--success-color)', opacity: 0.3 },
              { stroke: 'var(--warning-color)', opacity: 0.3 },
              { stroke: 'var(--error-color)', opacity: 0.3 },
            ]"
          >
            <div style="text-align: center">整体情况</div>
          </n-progress>
        </n-el></n-gi
      >
      <n-gi>
        <n-space vertical>
          <n-space :wrap="false">
            <n-progress
              type="dashboard"
              gap-position="bottom"
              :percentage="80"
            />
            <n-progress
              type="circle"
              status="success"
              :percentage="60"
            />
          </n-space>
          <n-progress
            v-for="(v, k) in percentage"
            type="line"
            :status="k"
            :percentage="v"
            :indicator-placement="'inside'"
          />
        </n-space>
      </n-gi>
    </n-grid>
  </n-card>
</template>
