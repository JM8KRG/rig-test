// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import store from "./store/store";
import App from "./App";
import router from "./router";
import VueSocketIO from "vue-socket.io";

Vue.config.productionTip = false;

Vue.use(
  new VueSocketIO({
    connection: "http://localhost:3000"
  })
);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>",
  store
});
