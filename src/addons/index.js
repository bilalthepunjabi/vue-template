import plugins from "./plugins/index";
import components from "./components/index";
import directives from "./directives/index";

const installer = [directives, plugins, components];

export default {
  install: (app, options) => {
    if (installer.length > 0) {
      installer.forEach((bulks, bulk_index) => {
        bulks.install(app, options);
      });
    }
  }
};
