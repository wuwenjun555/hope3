import { createApp } from 'vue'
// [DEL]: import './style.css'
import '@/styles/index.less'
import App from './App.vue'
import router from '@/router'

const app = createApp(App)

app.use(router)

app.mount('#app')
