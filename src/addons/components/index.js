//load all components that is being registered
import registery from "./register";

export default {
  install: (app, options) => {
    for (const iterator of registery) {
      app.component(iterator.name, iterator);
    }
  }
};
