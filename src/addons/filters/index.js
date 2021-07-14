//load all filters that is being registered
import registery from "./register";

export default {
  install: (app, options) => {
    if (app.config.globalProperties.$filters === undefined) {
      app.config.globalProperties.$filters = {};
    }
    for (const iterator of registery) {
      app.config.globalProperties.$filters[iterator.name] = iterator.fn;
    }
  }
};
