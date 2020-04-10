import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import ThePlatform from "../views/ThePlatformPage.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "ThePlatform",
    component: ThePlatform
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
