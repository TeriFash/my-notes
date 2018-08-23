import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cards: []
    },
    getters: {
        getCards: state => state.cards
    },
    actions: {
        loadCards(context, cardsMain) {
            context.commit('loadCards', cardsMain)
        }
    },
    mutations: {
        loadCards(state, payload) {
            state.cards = payload;
        }
    },
})

