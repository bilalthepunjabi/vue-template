//global file for registering of any plugins
import registery from "./register";

export default {
  install: (app, options) => {
    for (const iterator of registery) {
      iterator.install(app, options);
    }
  }
};
