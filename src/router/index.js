import { createRouter, createWebHistory } from 'vue-router'
import { useLoginStore } from '@/stores/login'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import TestView from '@/views/TestView.vue'
import AnalysisView from '@/views/AnalysisView.vue'
import ErrorView from '@/views/ErrorView.vue'
import CSignin from '@/components/CSignin.vue'

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
          name: 'analysis',
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
          path: 'profile',
          component: () => import('@/views/ProfileView.vue'),
        },
        {
          path: ':pathMatch(.*)*',
          component: ErrorView,
        },
      ],
    },
    {
      path: '/test',
      name: 'test',
      component: TestView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      children: [
        {
          path: '',
          name: 'login',
          redirect: { name: 'signin' },
        },
        {
          path: 'signin',
          name: 'signin',
          component: CSignin,
        },
        {
          path: 'reset',
          name: 'reset',
          component: () => import('@/components/CRegister.vue'),
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('@/components/CRegister.vue'),
        },
        {
          path: 'byphone',
          name: 'byphone',
          component: () => import('@/components/CByPhone.vue'),
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/NotFoundView.vue'),
    },
  ],
})

router.beforeEach((to, from) => {
  const { islogin } = useLoginStore()

  if (!islogin && to.path.split('/')[1] !== 'login')
    return { name: 'signin' }
})

export default router
