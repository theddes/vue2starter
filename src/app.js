import Vue from 'vue'
import {sync} from 'vuex-router-sync'
import router from './router'
import store from './store'
import App from './App.vue'
sync(store, router)

const app = new Vue({
    router,
    store,
    ...App
})

export {app, router, store}