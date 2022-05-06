import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('../views/transfer.pg.vue')
    },
    {
        path: '/to/:id',
        component: () => import('../views/transferTo.pg.vue')
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})