<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import {
  NSpace,
  NInput,
  NH2,
  NButton,
  useMessage,
  NCountdown,
} from 'naive-ui'

function reset() {
  statuses.splice(0, statuses.length - 1)
  const { phone, code, pwd1, pwd2 } = form
  let pass = 0
  if (!phone.match(/^(13[0-9]|14[5|7]|15[0-9]|18[0-9])\d{8}$/)) {
    statuses[0] = 'error'
    pass += 1
  }
  if (code === '') {
    statuses[1] = 'warning'
    pass += 1
  } else if (!code.match(/\d{6}/)) {
    statuses[1] = 'error'
    pass += 1
  }
  if (!pwd1.match(/^[a-zA-Z]\w{5,17}$/)) {
    statuses[2] = 'error'
    pass += 1
  }
  if (pwd2 === '' || pwd2 !== pwd1) {
    statuses[3] = 'error'
    pass += 1
  }
  if (!pass) {
    message.success('修改成功')
    loadingBar.start()
    setTimeout(() => {
      router.push('signin')
      loadingBar.finish()
    }, 1300)
  } else {
    message.error('请正确输入')
  }
}

const form = reactive({
  phone: '',
  code: '',
  pwd1: '',
  pwd2: '',
})
const statuses = reactive([])
const getting = ref(false)
const router = useRouter()
const message = useMessage()
</script>
<template>
  <n-h2>重置密码</n-h2>
  <n-space vertical :size="30">
    <n-input
      v-model:value="form.phone"
      placeholder="手机号码"
      :maxlength="11"
      :status="statuses[0]"
    />
    <n-space justify="space-between">
      <n-input
        v-model:value="form.code"
        placeholder="验证码"
        :maxlength="6"
        :status="statuses[1]"
      />
      <n-button :disabled="getting" @click="getting = true">
        <span v-if="getting">
          <n-countdown
            @finish="getting = false"
            :duration="30000"
            :active="getting"
            :render="({ seconds }) => `${seconds}秒后重新获得`"
          />
        </span>
        <span v-else>获取验证码</span>
      </n-button>
    </n-space>
    <n-input
      placeholder="新的密码"
      show-password-on="mousedown"
      type="password"
      :maxlength="18"
      v-model:value="form.pwd1"
      :status="statuses[2]"
    />
    <n-input
      placeholder="确认密码"
      show-password-on="mousedown"
      type="password"
      :maxlength="18"
      v-model:value="form.pwd2"
      :status="statuses[3]"
    />
    <n-space vertical size="large">
      <n-button
        @click="reset"
        style="width: 100%"
        round
        type="primary"
      >
        确认
      </n-button>
      <n-button
        @click="router.push('signin')"
        style="width: 100%"
        round
      >
        返回
      </n-button>
    </n-space>
  </n-space>
</template>
