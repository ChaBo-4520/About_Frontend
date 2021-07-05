import Vue from "vue";
import VueRouter from "vue-router";
import slotParent from "../views/slotParent";
import exDashBoard from "../views/exampleDashBoard";
import animationWithWatch1 from "../components/examples/animationWithWatch1";
import animationWithWatch2 from "../components/examples/animationWithWatch2";
import staggeringList from "../components/examples/staggeringList";
import transition1 from "../components/examples/transition1";

Vue.use(VueRouter);
const routes = [
  { path: "/slotParent", name: "slot-Parent", component: slotParent },
  { path: "/exDashBoard", name: "ex-DashBoard", component: exDashBoard },
  {
    path: "/animationWithWatch1",
    name: "animation-with-watch1",
    component: animationWithWatch1,
  },
  {
    path: "/animationWithWatch2",
    name: "animation-with-watch2",
    component: animationWithWatch2,
  },
  {
    path: "/staggeringList",
    name: "staggering-list",
    component: staggeringList,
  },
  {
    path: "/transition1",
    name: "transition1",
    component: transition1,
  },
];
const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
