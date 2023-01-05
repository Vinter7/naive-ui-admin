<script setup>
import {
  BarChart,
  PieChart,
  FileTrayFull,
  ExtensionPuzzle,
  Clipboard,
  People,
  Key,
  PersonCircle,
  AppsSharp,
} from '@vicons/ionicons5'

import {
  NBreadcrumb,
  NBreadcrumbItem,
  NIcon,
  NDropdown,
} from 'naive-ui'

import { useRoute, RouterLink } from 'vue-router'
import { computed, h } from 'vue'

function labelTo(path, name) {
  return () => h(RouterLink, { to: path }, { default: () => name })
}

const route = computed(() => useRoute().path.split('/').pop())
const options = [
  [
    { label: labelTo('analysis', '数据面板'), key: 'analysis' },
    { label: labelTo('working', '工作台'), key: 'working' },
  ],
  [
    { label: labelTo('table', '表格'), key: 'table' },
    { label: labelTo('form', '表单'), key: 'form' },
  ],
  [
    { label: labelTo('authority', '权限管理'), key: 'authority' },
    { label: labelTo('info', '信息查询'), key: 'info' },
  ],
]
const map = {
  analysis: [options[0], PieChart, '仪表盘', BarChart, '数据面板'],
  working: [options[0], PieChart, '仪表盘', FileTrayFull, '工作台'],
  table: [options[1], ExtensionPuzzle, '组件示例', AppsSharp, '表格'],
  form: [options[1], ExtensionPuzzle, '组件示例', Clipboard, '表单'],
  authority: [options[2], People, '用户管理', Key, '权限管理'],
  info: [options[2], People, '用户管理', PersonCircle, '信息查询'],
}
</script>

<template>
  <n-breadcrumb>
    <NBreadcrumbItem>
      <n-dropdown :options="map[route][0]">
        <div>
          <n-icon :component="map[route][1]" />
          {{ map[route][2] }}
        </div>
      </n-dropdown>
    </NBreadcrumbItem>
    <NBreadcrumbItem>
      <n-icon :component="map[route][3]" />
      {{ map[route][4] }}
    </NBreadcrumbItem>
  </n-breadcrumb>
</template>
