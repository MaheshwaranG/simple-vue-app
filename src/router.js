import Vue from "vue";
import Router from "vue-router";
import Create from "./components/Create.vue";
import List from "./components/List.vue";

Vue.use(Router);
let routes = [
  //   { path: "/", exact: true, component: () => import("./App.vue") },
  {
    path: "/actions/:operation/:id",
    name: "operation",
    component: Create,
    props: true
  },
  {
    path: "/",
    name: "home",
    component: List
  }
];
export default new Router({
  routes,
  mode: "history"
});
