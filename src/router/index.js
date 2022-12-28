import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DestinationDetails from "../views/DestinationDetails.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/brazil",
    name: "brazil",
    component: () =>
      import(/* webpackChunkName: "brazil" */ "../views/BrazilView.vue"),
  },
  {
    path: "/jamaica",
    name: "jamaica",
    component: () =>
      import(/* webpackChunkName: "jamaica" */ "../views/JamaicaView.vue"),
  },
  {
    path: "/panama",
    name: "panama",
    component: () =>
      import(/* webpackChunkName: "panama" */ "../views/PanamaView.vue"),
  },
  {
    path: "/hawaii",
    name: "hawaii",
    component: () =>
      import(/* webpackChunkName: "hawaii" */ "../views/HawaiiView.vue"),
  },
  {
    path: "/details/:id",
    name: "DestinationDetails",
    component: DestinationDetails,
    // component: () =>
    //   import(
    //     /* webpackChunkName: "DestinationDetails" */ "../views/DestinationDetails.vue"
    //   ),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
