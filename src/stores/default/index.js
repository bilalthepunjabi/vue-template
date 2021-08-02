import { createStore } from "vuex";
import registery from "./register";

const modules = {};
registery.forEach((module)=>{
    modules[Object.keys(module)[0]] = module[Object.keys(module)[0]]
})

const store = createStore({
    modules : modules
})

export default store;
