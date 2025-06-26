import { createApp } from 'vue'
import App from './App.vue'
import { setup } from './utils/bootstrap'
import router from './router'

import '@/assets/css/tailwind.css'
import '@/assets/css/fonts.css'
import 'animate.css'

setup({
  onProduction: () => {
    createApp(App).use(router).mount('#app')
  },
  onDevelopment: () => {
    createApp(App).use(router).mount('#app')
  }
})
