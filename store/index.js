import { createStore } from 'vuex'
import { GET_OBJECT_INFO, SET_OBJECT_INFO, REMOVE_INFO, SET_INFO } from '@/services/browser/localStorage'
import { UserStorage, TOKEN } from '@/helpers/Keys'

export default createStore({
    state: {
        user: null,
        title: ''
    },
    getters: {

    },
    mutations: {
        login(state, data) {
            SET_OBJECT_INFO(UserStorage, data)
            state.user = data
        },
        logout(state) {
            state.user = null
            REMOVE_INFO(UserStorage)
        },
        initializeStore(state) {
            const user = GET_OBJECT_INFO(UserStorage)
            if (user) {
                state.user = user;
            }
        },
        setTitle(state, data)
        {
            state.title = data
        }
    }
})