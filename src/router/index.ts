import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import WidgetOnly from '../views/Widget/index.vue'
import PlaygroundWithWidget from '../views/PlaygroundWrapper.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'WidgetOnly',
    component: WidgetOnly
  },
  {
    path: '/playground',
    name: 'PlaygroundWithWidget',
    component: PlaygroundWithWidget
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
