import Vue from "vue";
import "./plugins/fontawesome";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import store from "./store";
import AnimateCSS from "animate.css";
// lodash
import VueLodash from "vue-lodash";
import lodash from "lodash";
Vue.use(AnimateCSS);
Vue.config.productionTip = false;
Vue.use(VueLodash, { name: "custom", lodash: lodash });
new Vue({
  el: "#app",
  router,
  vuetify,
  store,
  render: (h) => h(App),
});
