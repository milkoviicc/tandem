import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { motionPlugin } from '@oku-ui/motion'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MotionPlugin } from '@vueuse/motion'

AOS.init();
createApp(App).use(router).use(motionPlugin).use(MotionPlugin).mount('#app')
