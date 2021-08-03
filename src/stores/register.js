//global file for registering of stores
import  default_store  from "./default/index";
import main from "./main/index";

export { default_store,main };
export default [
  //register stores you want to use globally
  {default_store},
  {main}
];