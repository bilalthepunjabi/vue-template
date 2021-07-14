import { createRouter } from "vue-router";
import registery from "./register";
import config from "./config";

config.routes = registery;
const router = createRouter(config);

const installer = [router];

export default {
  install: (app, options) => {
    if (installer.length > 0) {
      installer.forEach((bulks, bulk_index) => {
        app.use(bulks);
      });
    }
  }
};
