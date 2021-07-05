import Vue from "vue";
import "./plugins/fontawesome";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import store from "./store";
import AnimateCSS from "animate.css";
Vue.use(AnimateCSS);
Vue.config.productionTip = false;
new Vue({
  el: "#app",
  router,
  vuetify,
  store,
  render: (h) => h(App),
});
