<script setup>
import { NIcon, NMenu, NButton, NAvatar, NSpace } from 'naive-ui'
import { h, ref } from 'vue'
import { RouterLink, useRouter, useRoute } from 'vue-router'
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

function home() {
  router.push('/admin')
  menuRef.value?.showOption('analysis')
}

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

function labelTo(path, name) {
  return () => h(RouterLink, { to: path }, { default: () => name })
}

const props = defineProps(['collapsed'])
const router = useRouter()

const menuRef = ref(null)
const menuOptions = [
  {
    label: '仪表盘',
    key: 'dashboard',
    icon: renderIcon(PieChart),
    children: [
      {
        label: labelTo('analysis', '数据面板'),
        key: 'analysis',
        icon: renderIcon(BarChart),
      },
      {
        label: labelTo('working', '工作台'),
        key: 'working',
        icon: renderIcon(FileTrayFull),
      },
    ],
  },
  {
    label: '组件示例',
    key: 'extension',
    icon: renderIcon(ExtensionPuzzle),
    children: [
      {
        label: labelTo('table', '表格'),
        key: 'table',
        icon: renderIcon(AppsSharp),
      },
      {
        label: labelTo('form', '表单'),
        key: 'form',
        icon: renderIcon(Clipboard),
      },
    ],
  },
  {
    label: '用户管理',
    key: 'manage',
    icon: renderIcon(People),
    children: [
      {
        label: labelTo('authority', '权限管理'),
        key: 'authority',
        icon: renderIcon(Key),
      },
      {
        label: labelTo('profile', '用户资料'),
        key: 'profile',
        icon: renderIcon(PersonCircle),
      },
    ],
  },
]
</script>

<template>
  <div class="home" @click="home">
    <img style="width: 40px" src="/logo.svg" alt="imgError" />
    <p v-if="!props.collapsed">后台管理系统</p>
  </div>
  <n-menu
    ref="menuRef"
    :value="useRoute().path.split('/').pop()"
    :collapsed-width="72"
    class="menu"
    :options="menuOptions"
  />
</template>

<style>
.home {
  cursor: pointer;
  margin: 10px 18px 0;
}

.home p {
  position: absolute;
  line-height: 40px;
  margin: 0;
  font-weight: bold;
  font-size: 20px;
  top: 10px;
  left: 70px;
  width: max-content;
}
.menu {
  position: relative;
  top: 24px;
}
</style>
