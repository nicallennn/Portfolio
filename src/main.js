import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

// make window scroll to top when route is changed
router.beforeEach(function(to, from, next) {
  window.scrollTo(0, 0);
  next();
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
