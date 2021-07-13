import plugins from "./plugins/index";

const installer = [plugins];

export default {
  install: (app, options) => {
    if (installer.length > 0) {
      installer.forEach((bulks, bulk_index) => {
        bulks.install(app, options);
      });
    }
  }
};
