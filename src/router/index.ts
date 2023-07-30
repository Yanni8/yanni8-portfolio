import { createRouter, createWebHistory } from 'vue-router'
import FrameworkOverview from '../views/FrameworkOverview.vue'

const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    {path: "/frameworks", component: FrameworkOverview }
  ]
})

export default router
