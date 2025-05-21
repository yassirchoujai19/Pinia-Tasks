import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import './assets/main.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia) // 🔥 This line is MANDATORY to activate Pinia
app.mount('#app')
