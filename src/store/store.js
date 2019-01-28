import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    freq: 0,
    mode: "",
    sql: 0,
    step: 25000,
    smeter: 0,
    ptt: 0
  },
  mutations: {
    updateFreq(state, newFreq) {
      state.freq = newFreq;
    },
    updateMode(state, newMode) {
      state.mode = newMode;
    },
    updateStep(state, newStep) {
      state.step = newStep;
    },
    updateSql(state, newSql) {
      state.sql = newSql;
    },
    updateSmeter(state, newSmeter) {
      state.smeter = newSmeter;
    },
    updatePtt(state, newPtt) {
      state.ptt = newPtt;
    }
  }
});
