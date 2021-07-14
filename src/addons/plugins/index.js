//load all plugins that is being registered
import registery from "./register";

export default {
  install: (app, options) => {
    for (const iterator of registery) {
      iterator.install(app, options);
    }
  }
};
