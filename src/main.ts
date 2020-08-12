import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// extend
import extraPlugin from "@/plugins/index";
import VueTouch from "vue-touch";
Vue.use(VueTouch, { name: "v-touch" });

// utils
import "./registerServiceWorker";
import "./utils/rem";
// import "@/assets/js/hide-address-bar.js";

// import "normalize.css";
import "reset-css";
import "@/style/index.less";

//devtool
import VConsole from "vconsole";
if (process.env !== "production") {
  new VConsole();
}

Vue.use(extraPlugin);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
