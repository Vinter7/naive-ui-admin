import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDarkStore = defineStore('dark', () => {
  const isdark = ref(true)
  return { isdark }
})
