import { createApp } from 'vue'
import './assets/tailwind.css'
import './assets/font-awesome/css/font-awesome.min.css'
import './style.css'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
