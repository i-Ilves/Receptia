import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import Burgers from '/src/components/Burgers.vue'
import Soups from '/src/components/Soups.vue'
import Desserts from '/src/components/Desserts.vue'
import Foods from '/src/components/Foods.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/burgers',
        name: 'Burgers',
        component: Burgers,
    },
    {
        path: '/soups',
        name: 'Soups',
        component: Soups,
    },
    {
        path: '/desserts',
        name: 'Desserts',
        component: Desserts,
    },
    {
        path: '/foods/:category',
        name: 'Foods',
        component: Foods,
    }

]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router