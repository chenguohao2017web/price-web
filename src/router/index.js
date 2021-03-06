import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../pages/home"
Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: "/",
            redirect: "/home"
        },
        {
            path: "/home",
            component: Home
        }
    ]
})