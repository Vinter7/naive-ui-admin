<script setup>
import { ref } from 'vue'
import { useLoginStore } from '@/stores/login'
import { useRouter } from 'vue-router'
import {
  NForm,
  NFormItem,
  NInput,
  NH2,
  NCheckbox,
  NButton,
  useMessage,
  NSpace,
  useLoadingBar,
} from 'naive-ui'

let loginStore = useLoginStore()
const router = useRouter()
function signin() {
  if (
    username.value === 'username' &&
    password.value === 'password'
  ) {
    loginStore.islogin = true
    message.success('登录成功')
    loadingBar.start()
    setTimeout(() => {
      router.push('/admin')
      loadingBar.finish()
    }, 1300)
  } else {
    message.error('用户名或密码不正确')
  }
}

const formRef = ref(null)
const checkValue = ref(true)
const message = useMessage()
const loadingBar = useLoadingBar()
const username = ref('username')
const password = ref('password')
</script>
<template>
  <n-h2>用户登录</n-h2>
  <n-form ref="formRef">
    <n-form-item label="用户名">
      <n-input
        v-model:value="username"
        placeholder="输入用户名"
        :maxlength="10"
      />
    </n-form-item>

    <n-form-item label="密码">
      <n-input
        v-model:value="password"
        placeholder="输入密码"
        show-password-on="mousedown"
        type="password"
        :maxlength="10"
      />
    </n-form-item>
    <n-space justify="space-between">
      <n-checkbox label="记住我" v-model:checked="checkValue" />
      <n-button text @click="router.push('reset')">
        忘记密码?
      </n-button>
    </n-space>
    <n-form-item>
      <n-button
        @click="signin"
        style="width: 100%"
        round
        type="primary"
      >
        登录
      </n-button>
    </n-form-item>
    <n-space justify="space-between">
      <n-button @click="router.push('byphone')" class="bu">
        手机验证码登录
      </n-button>
      <n-button @click="router.push('register')" class="bu">
        注册
      </n-button>
    </n-space>
  </n-form>
</template>

<style scoped>
.bu {
  width: 165px;
}
</style>
