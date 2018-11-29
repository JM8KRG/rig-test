import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    freq: 145000000,
    mode: 'SSB',
    step: 25000
  },
  mutations: {
    updateFreq (state, newFreq) {
      state.freq = newFreq
    },
    updateMode (state, newMode) {
      state.mode = newMode
    },
    updateStep (state, newStep) {
      state.step = newStep
    }
  }
})
