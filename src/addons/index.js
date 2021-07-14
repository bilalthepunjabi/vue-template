import plugins from "./plugins/index";
import components from "./components/index";
import directives from "./directives/index";
import filters from "./filters/index";
import providers from "./providers/index";

const installer = [directives, filters, plugins, components, providers];

export default {
  install: (app, options) => {
    if (installer.length > 0) {
      installer.forEach((bulks, bulk_index) => {
        bulks.install(app, options);
      });
    }
  }
};
