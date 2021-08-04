import "es6-promise/auto";
// import { IonicVue } from '@ionic/vue';
import { createApp } from "vue";
import App from "./App.vue";
import addons from "./addons/index";
import router from "./router/index";
import stores from "./stores/index"
import './assets/styles/css/index.css';
const app = createApp(App).use(addons).use(router).use(stores);
app.mount('#app');
/*
app.use(IonicVue);
//if ionic-router is being used
router.isReady().then(() => {
    app.mount('#app');
});
*/