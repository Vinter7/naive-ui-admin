<script setup>
import { NCard, NTimeline, NTimelineItem } from 'naive-ui'
</script>

<template>
  <NCard embedded title="时间线" :bordered="false">
    <n-timeline>
      <n-timeline-item content="开始" />
      <n-timeline-item
        type="success"
        title="成功"
        content="确定课题"
        time="2022-11-03 11:46"
      />
      <n-timeline-item
        type="error"
        content="无处下手"
        time="2022-12-22 12:22"
      />
      <n-timeline-item
        type="warning"
        title="警告"
        content="掌握技术路线"
        time="2023-01-03 20:13"
      />
      <n-timeline-item
        type="info"
        content="开始着手"
        time="2023-01-17 22:46"
        line-type="dashed"
      />
      <n-timeline-item content="完成项目" />
    </n-timeline>
  </NCard>
</template>
