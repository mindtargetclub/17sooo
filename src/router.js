import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    // {
    //   path: "/",
    //   alias: "/tutorials",
    //   name: "tutorials",
    //   component: () => import("./components/TutorialsList")
    // },
    {
      path: "/posGM_0",
      name: "posGM",
      component: () => import("./components/posGM")
    }, 
    {
      path: "/add",
      name: "add",
      component: () => import("./components/TutorialAdd")
    },
    {
      path: "/v3",
      name: "v3",
      component: () => import("./components/v3")
    },
    {
      path: "/",
      name: "PMNAdd",
      component: () => import("./components/PMNAdd")
    },
    {
      path: "/PMSAdd",
      name: "PMSAdd",
      component: () => import("./components/PMSAdd")
    },
    {
      path: "/PMSList",
      name: "PMSList",
      component: () => import("./components/PMSList")
    }, 
    {
      path: "/PMNAdd",
      name: "PMNAdd",
      component: () => import("./components/PMNAdd")
    },
    {
      path: "/PMNList",
      name: "PMNList",
      component: () => import("./components/PMNList")
    },
    {
      path: "/cardDisplay",
      name: "cardDisplay",
      component: () => import("./components/cardDisplay")
    },
  ]
});
