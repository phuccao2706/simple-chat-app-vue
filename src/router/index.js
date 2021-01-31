import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Category from "../views/Category/Category.vue";
import CategoryDetail from "../views/Category/CategoryDetail.vue";
import Playlist from "../views/Playlist/Playlist";

import Team from "../views/Team.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/category",
    name: "Category",
    component: Category,
  },
  {
    path: "/category/:id",
    name: "CategoryDetail",
    component: CategoryDetail,
  },
  {
    path: "/playlist/:id",
    name: "Playlist",
    component: Playlist,
  },
  {
    path: "/team",
    name: "Team",
    component: Team,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (to.name !== "Dashboard" && !isLoggedIn) next({ name: "Dashboard" });
//   else next();
// });

export default router;
