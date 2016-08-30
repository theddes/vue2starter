import Vue from 'vue'
import {sync} from 'vuex-router-sync'
import router from './router'
import store from './store'
import App from './App.vue'
sync(store, router)

Vue.config.debug = Vue.config.devtools = (process.env.NODE_ENV === 'development')

const app = new Vue({
    router,
    store,
    ...App
})

export {app, router, store}
