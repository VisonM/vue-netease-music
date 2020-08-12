import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home/index.vue";
import Video from "@/views/Video/index.vue";
import Personal from "@/views/Personal/index.vue";
import Yuncun from "@/views/Yuncun/index.vue";
import Account from "@/views/Account/index.vue";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/video",
    name: "Video",
    component: Video
  },
  {
    path: "/personal",
    name: "Personal",
    component: Personal
  },
  {
    path: "/yuncun",
    name: "Yuncun",
    component: Yuncun
  },
  {
    path: "/account",
    name: "Account",
    component: Account
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
