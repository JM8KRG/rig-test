// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
