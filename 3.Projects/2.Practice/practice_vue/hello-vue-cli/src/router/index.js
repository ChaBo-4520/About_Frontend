import Vue from "vue";
import VueRouter from "vue-router";
import slotParent from "../views/slotParent";

Vue.use(VueRouter);
const routes = [
  { path: "/slotParent", name: "slot-Parent", component: slotParent },
];
const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
