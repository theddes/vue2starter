import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = require('../views/Home')
const Lost = require('../views/Lost')

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    abstract: true,
    transitionOnLoad: true,
    linkActiveClass: 'active',
    routes: [
        {
            name: 'Home',
            path: '/',
            component: Home,
            beforeEnter (route, redirect, next) {
                console.log('index route hook beforeEnter', route)
                next()
            }
        },
        {
            name: 'Lost',
            path: '/lostgrid',
            component: Lost
        }
    ]
})

router.beforeEach((route, redirect, next) => {
    console.log('global hook beforeEach', route)
    next()
})

router.afterEach((route, redirect) => {
    console.log('global hook afterEach', route)
})

export default router
