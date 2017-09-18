import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articleSave: false,
    aa: 'aa'
  },
  getters: {
    toUp (state) {
      return state.aa.toUpperCase()
    }
  },
  mutations: {
    changeSave (state, xx) {
      state.articleSave += xx.xx
    }
  },
  actions: {
    changeSave ({ commit }) {
      commit('changeSave')
    }
  }
})
