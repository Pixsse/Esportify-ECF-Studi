import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import EventView from '@/views/EventView.vue'
import SignInView from '@/views/SignInView.vue'
import SignUpView from '@/views/SignUpView.vue'

const routes = [
  { path: '/',
    name: 'Home',
    component: HomeView 
  },

  { path: '/event',
    name: 'Event',
    component: EventView 
  },

  { path: '/sign-in',
    name: 'SignIn',
    component: SignInView 
  },

  { path: '/sign-up',
    name: 'SignUp',
    component: SignUpView 
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router