import { createRouter, createWebHistory } from "vue-router";
import LogIn from './components/LogIn.vue'
import Forbidden from './components/Forbidden.vue'
import NotFound from './components/NotFound.vue'
import SignIn from './components/SignIn.vue'
import VueX from './components/VueX.vue'
const routers =[
    {
        path : '/login',
        component : LogIn
    },
    {
        path : '/sigin',
        component : SignIn
    },
    {
        path : '/:pathMatch',
        component : NotFound
    },
    {
        path : '/403',
        component : Forbidden
    },
    {
        path : '/vuex',
        component : VueX
    },

]

const router = createRouter({
routers,
history:createWebHistory()
})
export default router