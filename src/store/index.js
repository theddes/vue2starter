import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count: 0
}

const mutations = {
    INCREMENT(state) {
        state.count++
    },
    DECREMENT(state) {
        state.count--
    }
}

const actions = {
    INCREMENT({commit}) {
        commit('INCREMENT')
    },
    INCREMENT_ASYNC({commit}) {
        setTimeout(() => {
            commit('INCREMENT')
        }, 1000)
    },
    DECREMENT({commit}) {
        commit('DECREMENT')
    },
}

const store = new Vuex.Store({
    state,
    mutations,
    actions
})

export default store
