//global file for registering of store-modules
import  api  from "./modules/api";
import plugins from "./plugins/index";

export { api, plugins };

export default {
  //register store-modules you want to use globally
  modules : [
    {api}
  ],
  plugins : plugins
};