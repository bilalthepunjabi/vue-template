//global file for registering of any providers
import global_provide, { provide } from "./provide";

export default [
  //register providers you want to use globally
  { name: "provide", data: provide }
];
