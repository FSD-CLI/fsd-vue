import { createApp } from 'vue'
import App from '@/app/App.vue'
import { installAppProviders } from '@/app/providers'
import { router } from '@/app/routing'
import '@/app/styles/index.css'

const app = createApp(App)

installAppProviders(app)
app.use(router)
app.mount('#app')
