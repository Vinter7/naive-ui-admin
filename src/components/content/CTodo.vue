<script setup>
import {
  NCard,
  NDynamicInput,
  NTabs,
  NTabPane,
  NCheckbox,
  NInput,
} from 'naive-ui'
import { ref } from 'vue'

function create() {
  return {}
}

const v1 = ref([
  {
    check: true,
    string: '修改上次反馈的问题',
  },
  {
    check: false,
    string: '实现大屏设计稿',
  },
  {
    check: false,
    string: '后端接口调试',
  },
])

const v2 = ref([
  {
    string: '下午开会',
  },
])
const v3 = ref([])
const v4 = ref([])
</script>

<template>
  <n-card embedded :bordered="false" title="Todo List 待办事项">
    <n-tabs animated>
      <n-tab-pane name="tab1" tab="紧急且重要">
        <n-dynamic-input v-model:value="v1" :on-create="create">
          <template #create-button-default> 添加待办 </template>
          <template #default="{ value }">
            <div
              style="display: flex; align-items: center; width: 100%"
            >
              <n-checkbox
                v-model:checked="value.check"
                style="margin-right: 12px"
              />
              <n-input
                placeholder="新建待办"
                v-model:value="value.string"
                type="text"
              />
            </div>
          </template>
        </n-dynamic-input>
      </n-tab-pane>
      <n-tab-pane name="tab2" tab="紧急">
        <n-dynamic-input v-model:value="v2" :on-create="create">
          <template #create-button-default> 添加待办 </template>
          <template #default="{ value }">
            <div
              style="display: flex; align-items: center; width: 100%"
            >
              <n-checkbox
                v-model:checked="value.check"
                style="margin-right: 12px"
              />
              <n-input
                placeholder="新建待办"
                v-model:value="value.string"
                type="text"
              />
            </div>
          </template>
        </n-dynamic-input>
      </n-tab-pane>
      <n-tab-pane name="tab3" tab="重要">
        <n-dynamic-input v-model:value="v3" :on-create="create">
          <template #create-button-default> 添加待办 </template>
          <template #default="{ value }">
            <div
              style="display: flex; align-items: center; width: 100%"
            >
              <n-checkbox
                v-model:checked="value.check"
                style="margin-right: 12px"
              />
              <n-input
                placeholder="新建待办"
                v-model:value="value.string"
                type="text"
              />
            </div>
          </template>
        </n-dynamic-input>
      </n-tab-pane>
      <n-tab-pane name="tab4" tab="其它">
        <n-dynamic-input v-model:value="v4" :on-create="create">
          <template #create-button-default> 添加待办 </template>
          <template #default="{ value }">
            <div
              style="display: flex; align-items: center; width: 100%"
            >
              <n-checkbox
                v-model:checked="value.check"
                style="margin-right: 12px"
              />
              <n-input
                placeholder="新建待办"
                v-model:value="value.string"
                type="text"
              />
            </div>
          </template>
        </n-dynamic-input>
      </n-tab-pane>
    </n-tabs>
  </n-card>
</template>
