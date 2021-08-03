//global file for registering of store-plugins
import  example_plugin  from "./example_plugin/index";
import { createLogger } from 'vuex'

export { example_plugin };
export default [
  //register store-plugins you want to use globally
  example_plugin,
  createLogger()
];
