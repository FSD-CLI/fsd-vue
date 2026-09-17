import { WelcomePage } from '@/pages/welcome'
import { createRouter, createWebHistory } from 'vue-router'
// fsd-cli:route-imports:start
// fsd-cli:route-imports:end

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'welcome', component: WelcomePage },
    // fsd-cli:routes:start
    // fsd-cli:routes:end
  ],
})
