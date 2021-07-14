import { createStore } from "vuex";

import axios from "axios";
import VueAxios from "vue-axios";

const installer = [];

export default {
  install: (app, options) => {
    app.use(VueAxios, axios);
    if (installer.length > 0) {
      installer.forEach((bulks, bulk_index) => {
        app.use(bulks);
      });
    }
  }
};
