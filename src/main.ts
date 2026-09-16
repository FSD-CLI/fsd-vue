import { createApp } from 'vue'
import App from '@/app/App.vue'
import { installAppProviders } from '@/app/providers'
import '@/app/styles/index.css'

const app = createApp(App)

installAppProviders(app)
app.mount('#app')
