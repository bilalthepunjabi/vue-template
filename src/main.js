import "es6-promise/auto";
import { createApp } from "vue";
import App from "./App.vue";
import addons from "./addons/index";
createApp(App).use(addons).mount("#app");
