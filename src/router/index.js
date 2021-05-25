import { createRouter, createWebHistory } from "vue-router";

import store from "../store";

import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import user from "@/components/user.vue";
import countryList from "@/components/countryList.vue";
import item from "@/components/item.vue";

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "",
        component: user,
      },
      {
        path: "countryList",
        component: countryList,
      },
      {
        path: "item",
        component: item,
      },
    ],
    meta: { requireAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requireAuth)) {
    if (!store.state.username || !store.state.password) {
      next({
        name: "login",
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
