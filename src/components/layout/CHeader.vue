<script setup>
import {
  NSpace,
  NButton,
  NIcon,
  NBadge,
  NTooltip,
  NAvatar,
  NDrawer,
  NDrawerContent,
  NCard,
  NSkeleton,
  NDropdown,
  useMessage,
  useDialog,
} from 'naive-ui'
import { useLoginStore } from '@/stores/login'
import {
  LogoGithub,
  Sunny,
  Moon,
  Notifications,
  LogOut,
  PersonCircle,
} from '@vicons/ionicons5'

import CBreadcrumb from './CBreadcrumb.vue'

import { useDarkStore } from '@/stores/darkmode'
import { h, ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

function goGithub() {
  window.open('https://github.com/Vinter7')
}
function noti() {
  loading.value = true
  active.value = true
  setTimeout(() => {
    loading.value = false
  }, 1000)
}
function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}
function select(key) {
  if (key == 'profile') {
    return router.push('/admin/profile')
  } else if (key == 'logout') {
    dialog.info({
      title: '提示',
      content: '您确定要退出登录吗？',
      positiveText: '确定',
      negativeText: '取消',
      onPositiveClick: () => {
        let loginStore = useLoginStore()
        loginStore.islogin = false
        router.push('/login')
        message.success('退出登录')
      },
    })
  }
}
const message = useMessage()
const dialog = useDialog()
const router = useRouter()
const active = ref(false)
const loading = ref(true)
const dark = useDarkStore()
const options = [
  {
    label: '用户资料',
    key: 'profile',
    icon: renderIcon(PersonCircle),
  },
  {
    label: '退出登录',
    key: 'logout',
    icon: renderIcon(LogOut),
  },
]
const msg = reactive([
  [
    false,
    '周平',
    '10:18',
    '我那部分已经做差不多了,晚些时候我们对接一下',
  ],
  [
    false,
    '老易',
    '13:57',
    '大屏的原型设计我交给小刘了,你先把数据那部分看下',
  ],
  [true, '子君', '15:47', '通知大家下班前一起在203开个组会'],
  [true, '陈晓', '16:32', '上次提交的结果已经出来了,还不错'],
  [
    true,
    '晨曼',
    '17:02',
    '刚才把工作台页面简单写了一下,应该凑合能看了',
  ],
  [true, '之珊', '17:16', '还在写项目的说明文档呢,那个晚点再说吧'],
  [true, '雨琦', '17:31', '刚提交了一个bug,完了,得赶紧改'],
])
</script>

<template>
  <NSpace justify="space-between">
    <CBreadcrumb />
    <NSpace size="large">
      <NButton :focusable="false" text class="px24" @click="goGithub">
        <NIcon>
          <LogoGithub />
        </NIcon>
      </NButton>
      <NButton
        text
        :focusable="false"
        class="px24"
        @click="dark.isdark = !dark.isdark"
      >
        <NIcon>
          <Sunny v-if="dark.isdark" />
          <Moon v-else />
        </NIcon>
      </NButton>
      <n-tooltip trigger="hover">
        <template #trigger>
          <NButton text class="px24" @click="noti">
            <n-badge
              :value="msg.reduce((sum, i) => (sum += i[0]), 0)"
            >
              <NIcon color="#D5D5D6">
                <Notifications />
              </NIcon>
            </n-badge>
          </NButton>
        </template>
        消息通知
      </n-tooltip>
      <div class="user">
        <n-dropdown @select="select" :options="options">
          <n-avatar
            round
            size="medium"
            src="https://cdn.staticaly.com/gh/Vinter7/img_storage@master/profile/ProfilePhoto.1pdcnpolxli8.webp"
          />
        </n-dropdown>
      </div>
    </NSpace>
  </NSpace>
  <n-drawer width="300" v-model:show="active">
    <n-drawer-content title="消息通知">
      <div v-for="(i, index) in msg">
        <n-badge :dot="i[0]">
          <n-card
            closable
            hoverable
            embedded
            size="small"
            class="card"
            @close="i[0] ? (i[0] = false) : msg.splice(index, 1)"
          >
            <template #header>
              <n-skeleton v-if="i[0] && loading" text width="20%" />
              <template v-else>{{ i[1] }}</template>
            </template>
            <template #header-extra v-if="!(i[0] && loading)">{{
              i[2]
            }}</template>
            <n-skeleton
              v-if="i[0] && loading"
              :repeat="2"
              text
              width="100%"
            />
            <template v-else>{{ i[3] }}</template>
          </n-card>
        </n-badge>
      </div>
    </n-drawer-content>
  </n-drawer>
</template>

<style scoped>
.px24 {
  font-size: 24px;
}
.user {
  position: relative;
  top: -5px;
  padding-left: 20px;
  /* background-color: pink; */
}
.card {
  width: 252px;
  margin-bottom: 10px;
}
</style>
