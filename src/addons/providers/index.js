//load all providers that is being registered
import registery from "./register";

export default {
  install: (app, options) => {
    for (const iterator of registery) {
      app.provide(iterator.name, iterator.data);
    }
  }
};
