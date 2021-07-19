import Vue from "vue";
import VueRouter from "vue-router";
import slotParent from "../views/slotParent";
import exDashBoard from "../views/exampleDashBoard";
import animationWithWatch1 from "../components/examples/animationWithWatch1";
import animationWithWatch2 from "../components/examples/animationWithWatch2";
import staggeringList from "../components/examples/staggeringList";
import transition1 from "../components/examples/transition1";
import transition2 from "../components/examples/transition2";
import transition3 from "../components/examples/transition3";
import transitionBetweenElement from "../components/examples/transitionBetweenElement";
import watchVsComputed1 from "../components/examples/watchVsComputed1";
import watchDeep from "../components/examples/watchDeep";
import computed from "../components/examples/computed";
import listTransition from "../components/examples/listTransition";
import keepAliveParent from "../components/examples/keepAliveParent";
import propsParent from "../components/examples/propsParent";
import pseudoClass from "../components/examples/pseudoClass";
import vIfWithKey from "../components/examples/vIfWithKey";
import HelloWorld from "../components/HelloWorld";
import hoisting from "../components/examples/hoisting";

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(() => {
    return window.location.reload();
  });
};
Vue.use(VueRouter);
const routes = [
  { path: "/", name: "Home", component: HelloWorld },
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
  {
    path: "/transition2",
    name: "transition2",
    component: transition2,
  },
  {
    path: "/transition3",
    name: "transition3",
    component: transition3,
  },
  {
    path: "/watchVsComputed1",
    name: "watch-vs-computed1",
    component: watchVsComputed1,
  },
  {
    path: "/watchDeep",
    name: "watch-Deep",
    component: watchDeep,
  },
  {
    path: "/computed",
    name: "computed",
    component: computed,
  },
  {
    path: "/keepAliveParent",
    name: "keep-alive-parent",
    component: keepAliveParent,
  },
  {
    path: "/listTransition",
    name: "list-transition",
    component: listTransition,
  },
  {
    path: "/propsParent",
    name: "props-parent",
    component: propsParent,
  },
  {
    path: "/pseudoClass",
    name: "pseudo-class",
    component: pseudoClass,
  },
  {
    path: "/transitionBetweenElement",
    name: "transition-between-element",
    component: transitionBetweenElement,
  },
  {
    path: "/vIfWithKey",
    name: "v-if-with-key",
    component: vIfWithKey,
  },
  {
    path: "/hoisting",
    name: "hoisting",
    component: hoisting,
  },
];
const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
