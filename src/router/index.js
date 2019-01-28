import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import ToggleButton from "vue-js-toggle-button";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";

Vue.use(ToggleButton);
Vue.use(BootstrapVue);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    }
  ]
});
