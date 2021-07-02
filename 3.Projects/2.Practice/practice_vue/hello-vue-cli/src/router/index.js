import Vue from "vue";
import VueRouter from "vue-router";
import slotParent from "../views/slot-Parent";

Vue.use(VueRouter);
const routes = [{ path: "/slotParent", component: slotParent }];
const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
