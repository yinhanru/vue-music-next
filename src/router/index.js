import { createRouter, createWebHashHistory } from 'vue-router'
import RecommendTab from '@/views/RecommendTab'
import SingerTab from '@/views/SingerTab'
import TopList from '@/views/TopList'
import SearchTab from '@/views/SearchTab'
const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: RecommendTab
  },
  {
    path: '/singer',
    component: SingerTab
  },
  {
    path: '/top-list',
    component: TopList
  },
  {
    path: '/search',
    component: SearchTab
  }
]

const router = createRouter({
  // history模式 createWebHistory
  // hash模式
  history: createWebHashHistory(),
  routes
})

export default router
