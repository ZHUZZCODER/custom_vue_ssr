import { createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: () => import("../views/home.vue"),
  },
  {
    path: "/user",
    component: () => import("../views/user.vue"),
  },
];

export default function (history) {
  return createRouter({
    history,
    routes,
  });
}
