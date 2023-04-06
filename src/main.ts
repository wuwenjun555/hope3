import { createApp } from 'vue'
// [DEL]: import './style.css'
import '@/styles/index.less'
import App from './App.vue'
import router from '@/router'
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)

app.mount('#app')
