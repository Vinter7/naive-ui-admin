<script setup>
import CLayout from '@/components/layout/CLayout.vue'
import CSidebar from '@/components/layout/CSidebar.vue'
import CHeader from '@/components/layout/CHeader.vue'
</script>

<template>
  <c-layout>
    <template #sideBar="props">
      <c-sidebar :collapsed="props.collapsed" />
    </template>
    <template #header>
      <c-header></c-header>
    </template>
    <template #default>
      <router-view></router-view>
    </template>
  </c-layout>
</template>
