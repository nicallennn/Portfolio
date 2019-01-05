import Vue from "vue";
import Router from "vue-router";
// view imports
import Profile from "./views/Profile.vue";
import Cv from "./views/CV.vue";

//uni project view imports
import ThreeD from "./views/uni-projects/3dgraphics.vue";
import Fyp from "./views/uni-projects/fyp.vue";
import Oo from "./views/uni-projects/oo.vue";
import Sem from "./views/uni-projects/sem.vue";
import Webapp from "./views/uni-projects/webapp.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Profile
    },
    {
      path: "/cv",
      name: "cv",
      component: Cv
    },
    {
      path: "/3dgraphics",
      name: "3dgraphics",
      component: ThreeD
    },
    {
      path: "/fyp",
      name: "fyp",
      component: Fyp
    },
    {
      path: "/oo",
      name: "oo",
      component: Oo
    },
    {
      path: "/sem",
      name: "sem",
      component: Sem
    },
    {
      path: "/webapp",
      name: "webapp",
      component: Webapp
    }
  ]
});
