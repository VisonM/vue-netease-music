import apiModule from "./api/index";

export default {
  install: function(Vue) {
    Vue.prototype.$api = apiModule;
  }
};
