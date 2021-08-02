import VueAxios from 'vue-axios';
import axios from 'axios';

import registery from "./register";

const installer = registery;

export default {
  install: (app, options) => {
    app.use(VueAxios, axios);
    if (installer.length > 0) {
      installer.forEach((store_instance) => {
        app.use(store_instance.store);
      });
    }
  }
};
