import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: []
  },
  mutations: {
    loadCards(state, payload) {
        state.cards = payload;
    }
  },
  actions: {

  }
})

