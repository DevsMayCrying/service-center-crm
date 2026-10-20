import {createRouter, createWebHistory} from 'vue-router'
import LoginWiew from '../views/LoginWiew.vue'
import dashboardView from '../views/DashboardView.vue'

const routes = [
    {path: '/', redirect: '/login'},
    {path: '/login', component: LoginWiew},
    {path: '/dashboard', component: dashboardView}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router