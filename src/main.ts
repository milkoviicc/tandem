import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { motionPlugin } from '@oku-ui/motion'

createApp(App).use(router).use(motionPlugin).mount('#app')
