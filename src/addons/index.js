import plugins from "./plugins/index";
import components from "./components/index";
const installer = [plugins, components];

export default {
  install: (app, options) => {
    if (installer.length > 0) {
      installer.forEach((bulks, bulk_index) => {
        console.log({ bulk: bulks });
        bulks.install(app, options);
      });
    }
  }
};
