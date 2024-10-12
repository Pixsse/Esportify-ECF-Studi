import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import EventView from '@/views/EventView.vue'
import LoginView from '@/views/LoginView.vue'

const routes = [
  { path: '/',
    name: 'Home',
    component: HomeView 
  },

  { path: '/event',
    name: 'Event',
    component: EventView 
  },

  { path: '/login',
    name: 'Login',
    component: LoginView 
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router