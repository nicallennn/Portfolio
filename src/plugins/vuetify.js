import Vue from "vue";
import Vuetify from "vuetify/lib";
import "vuetify/src/stylus/app.styl";

//register vuetify plugin
Vue.use(Vuetify, {
  iconfont: "md",
  theme: {
    primary: "#1B5E20",
    secondary: "#9E9E9E",
    success: "#388E3C",
    info: "#263238",
    error: "#B71C1C"
  }
});

// theme cols ->
