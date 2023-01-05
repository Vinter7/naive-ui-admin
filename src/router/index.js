import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import TestView from '@/views/TestView.vue'
import AnalysisView from '@/views/AnalysisView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/admin',
    },
    {
      path: '/admin',
      name: 'admin',
      component: HomeView,
      children: [
        {
          path: '',
          name: 'default',
          redirect: '/admin/analysis',
        },
        {
          path: 'analysis',
          component: AnalysisView,
        },
        {
          path: 'working',
          component: () => import('@/views/WorkingView.vue'),
        },
        {
          path: 'table',
          component: () => import('@/views/TableView.vue'),
        },
        {
          path: 'form',
          component: () => import('@/views/FormView.vue'),
        },
        {
          path: 'authority',
          component: () => import('@/views/AuthorityView.vue'),
        },
        {
          path: 'info',
          component: () => import('@/views/InfoView.vue'),
        },
      ],
    },
    {
      path: '/test',
      name: 'test',
      component: TestView,
    },
  ],
})

export default router
