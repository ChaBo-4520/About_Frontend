import Vue from 'vue'
import VueRouter from 'vue-router'
import TestPage1 from '../views/TestPage1.vue'


Vue.use(VueRouter)

const routes = [
    {
        path:"/Home",
        component: () => import('../views/HelloWorld.vue')
    },
    {
        path: "/css_test",
        name: "css_test",
        component: TestPage1,
    },
    {
        path: "/event_test",
        name: "event_test",
        component: ()=>import ('../views/TestPage2.vue'),
    },
    {
        path: "/vuex_test",
        name: "vuex_test",
        component: ()=>import ('../views/VuexTest.vue'),
    },
]

const router = new VueRouter({
    mode : "history",
    base : process.env.BASE_URL,
    routes, 
})

export default router