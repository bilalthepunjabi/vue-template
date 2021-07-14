import { createWebHistory } from "vue-router";

const config = {
  history: createWebHistory(),
  hash: false,
  linkActiveClass: "link-active",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
};

export default config;
