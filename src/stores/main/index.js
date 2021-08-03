import { createStore } from "vuex";
import registery from "./register";

const modules = {};
registery.modules.forEach((module)=>{
    modules[Object.keys(module)[0]] = module[Object.keys(module)[0]]
})
 
export default createStore({
    modules : modules,
    plugins : registery.plugins
});