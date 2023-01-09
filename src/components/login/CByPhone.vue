<script setup>
import { ref, onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import {
  NSpace,
  NInput,
  NH2,
  NButton,
  useMessage,
  NCountdown,
} from 'naive-ui'

onMounted(() => {
  draw()
})

function reset() {
  statuses.splice(0, statuses.length - 1)
  const { phone, code1, code2 } = form
  let pass = 0
  if (!phone.match(/^(13[0-9]|14[5|7]|15[0-9]|18[0-9])\d{8}$/)) {
    statuses[0] = 'error'
    pass += 1
  }
  if (code1 === '') {
    statuses[1] = 'warning'
    pass += 1
  } else if (!code1.match(/\d{6}/)) {
    statuses[1] = 'error'
    pass += 1
  }
  if (code2 === '') {
    statuses[2] = 'warning'
    pass += 1
  } else if (code2.toUpperCase() !== cvcode.value) {
    statuses[2] = 'error'
    pass += 1
  }

  if (!pass) {
    router.push('signin')
    message.success('修改成功')
  } else {
    message.error('请正确输入')
  }
}
// 画canvas做验证码
function draw() {
  const { width, height } = cv.value
  let ctx = cv.value.getContext('2d')

  ctx.clearRect(0, 0, width, height)
  let word = ''
  let deg, x, y
  const randomW = () => Math.random() * width
  const randomH = () => Math.random() * height

  // 绘制文字
  for (let i = 0; i < 4; i++) {
    let letter = String.fromCharCode(
      Math.floor(Math.random() * 26) + 65
    )
    deg = (Math.random() * 80 - 40) / 60
    word += letter
    x = 7 + i * 22
    y = 22 + Math.random() * 7
    ctx.font = 'bold 23px defaultt'
    ctx.translate(x, y)
    ctx.rotate(deg)
    ctx.fillStyle = randomC()
    ctx.fillText(letter, 0, 0)
    ctx.rotate(-deg)
    ctx.translate(-x, -y)
  }
  // 绘制随机线
  for (let i = 0; i < 5; i++) {
    ctx.strokeStyle = randomC()
    ctx.beginPath()
    ctx.moveTo(randomW(), randomH())
    ctx.lineTo(randomW(), randomH())
    ctx.stroke()
  }
  // 绘制随机点
  for (var i = 0; i < 30; i++) {
    ctx.strokeStyle = randomC()
    ctx.beginPath()
    x = randomW()
    y = randomH()
    ctx.moveTo(x, y)
    ctx.lineTo(x + 1, y + 1)
    ctx.stroke()
  }
  cvcode.value = word
}

function randomC() {
  let color = () => Math.floor(Math.random() * 256)
  return `rgb(${color()},${color()},${color()})`
}

const form = reactive({
  phone: '',
  code1: '',
  code2: '',
})
const cvcode = ref('')
const cv = ref(null)
const statuses = reactive([])
const getting = ref(false)
const router = useRouter()
const message = useMessage()
</script>
<template>
  <n-h2>手机验证码登录</n-h2>
  <n-space vertical :size="30">
    <n-input
      v-model:value="form.phone"
      placeholder="手机号码"
      :maxlength="11"
      :status="statuses[0]"
    />
    <n-space justify="space-between">
      <n-input
        v-model:value="form.code1"
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
    <n-space justify="space-between">
      <n-input
        v-model:value="form.code2"
        placeholder="点击刷新"
        :maxlength="4"
        :status="statuses[2]"
      />
      <canvas
        ref="cv"
        width="98"
        height="33"
        @click="draw()"
      ></canvas>
    </n-space>

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

<style scoped>
canvas {
  border-radius: 3px;
  background-color: #c5e5c2;
  cursor: pointer;
}
</style>
