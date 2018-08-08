import Vue from 'vue'
import Router from 'vue-router'
import elem from '../components/page.vue'
import home from '../components/tiles.vue'
import about from '../components/about.vue'
import we from '../components/we.vue'
Vue.use(Router)

export default new Router({
    linkActiveClass: "active",

    routes: [
        {
            path:'/',
            redirect: '/home'
        },
        {
            path: '/page/:id',
            name: 'page',
            component: elem
        },
        {
            path: '/home',
            name: 'home',
            component: home
        },
        {
            path: '/about',
            name: 'about',
            component: about
        },
        {
            path: '/we',
            name: 'we',
            component: we
        }
           ]
})