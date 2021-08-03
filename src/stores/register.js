//global file for registering of stores
import  default_store  from "./default/index";
import  store_a from "./store-a/index"
export { default_store };
export default [
  //register stores you want to use globally
  {default_store},
  {store_a}
];
