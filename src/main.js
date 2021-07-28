import "es6-promise/auto";
import { createApp } from "vue";
import App from "./App.vue";
import addons from "./addons/index";
import router from "./router/index";
import './assets/styles/css/index.css';
createApp(App).use(addons).use(router).mount("#app");
