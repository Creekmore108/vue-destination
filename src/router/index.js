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
    path: "details/:id",
    name: "DestinationDetails",
    component: DestinationDetails,
    // component: () =>
    //   import(/* webpackChunkName: "DestinationDetails"*/ "../views/DestinationDetails.vue")
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
