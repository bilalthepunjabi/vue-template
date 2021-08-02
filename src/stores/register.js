//global file for registering of stores
import  default_store  from "./default/index";

export { default_store };
export default [
  //register stores you want to use globally
  {store : default_store}
];
