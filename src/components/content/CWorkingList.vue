<script setup>
import {
  NCard,
  NButton,
  NListItem,
  NList,
  NTag,
  NThing,
  NTime,
  NAvatar,
} from 'naive-ui'
</script>

<template>
  <NCard embedded :bordered="false" title="记录">
    <template #header-extra>
      <n-button
        text
        tag="a"
        href="https://github.com/Vinter7"
        target="_blank"
        type="primary"
        >更多记录</n-button
      >
    </template>
    <n-list hoverable clickable>
      <n-list-item>
        <n-thing title="创建了 Naive UI Admin 仓库，完成开发环境搭建">
          <template #avatar>
            <n-avatar
              round
              size="large"
              src="https://cdn.staticaly.com/gh/Vinter7/img_storage@master/profile/ProfilePhoto.1pdcnpolxli8.webp"
            />
          </template>
          <template #description>
            <n-time :time="new Date('2022-12-27')" />
            <span>&nbsp;&nbsp;</span>
            <n-tag round :bordered="false" size="small"> init </n-tag>
          </template>
        </n-thing>
      </n-list-item>
      <n-list-item>
        <n-thing title="构思系统整体框架，编写布局和各级路由视图">
          <template #avatar>
            <n-avatar
              round
              size="large"
              src="https://cdn.staticaly.com/gh/Vinter7/img_storage@master/profile/ProfilePhoto.1pdcnpolxli8.webp"
            />
          </template>
          <template #description>
            <n-time :time="new Date('2022-12-29T10:27')" />
            <span>&nbsp;&nbsp;</span>
            <n-tag round :bordered="false" type="info" size="small">
              add
            </n-tag>
          </template>
        </n-thing>
      </n-list-item>
      <n-list-item>
        <n-thing title="编写登录页面及其各级选项，并设置路由守卫">
          <template #avatar>
            <n-avatar
              round
              size="large"
              src="https://cdn.staticaly.com/gh/Vinter7/img_storage@master/profile/ProfilePhoto.1pdcnpolxli8.webp"
            />
          </template>
          <template #description>
            <n-time :time="new Date('2022-12-31T13:12:36')" />
            <span>&nbsp;&nbsp;</span>
            <n-tag
              round
              :bordered="false"
              type="primary"
              size="small"
            >
              commit
            </n-tag>
          </template>
        </n-thing>
      </n-list-item>
      <n-list-item>
        <n-thing title="编写内容部分的组件，并逐步填充到各级菜单">
          <template #avatar>
            <n-avatar
              round
              size="large"
              src="https://cdn.staticaly.com/gh/Vinter7/img_storage@master/profile/ProfilePhoto.1pdcnpolxli8.webp"
            />
          </template>
          <template #description>
            <n-time :time="new Date('2023-01-10T14:27:56')" />
            <span>&nbsp;&nbsp;</span>
            <n-tag
              round
              :bordered="false"
              type="warning"
              size="small"
            >
              remote
            </n-tag>
          </template>
        </n-thing>
      </n-list-item>
      <n-list-item>
        <n-thing title="为 Naive UI Admin 项目编写详尽的说明文档">
          <template #avatar>
            <n-avatar
              round
              size="large"
              src="https://cdn.staticaly.com/gh/Vinter7/img_storage@master/profile/ProfilePhoto.1pdcnpolxli8.webp"
            />
          </template>
          <template #description>
            <n-time :time="new Date('2023-01-12T17:47:06')" />
            <span>&nbsp;&nbsp;</span>
            <n-tag round :bordered="false" type="error" size="small">
              push
            </n-tag>
          </template>
        </n-thing>
      </n-list-item>
    </n-list>
  </NCard>
</template>
