import VueAxios from 'vue-axios';
import axios from 'axios';
import { createStore } from "vuex";

import registery from "./register";

const installer = registery;

export default {
  install: (app, options) => {
    app.use(VueAxios, axios);
    if (installer.length > 0) {
      app.config.globalProperties.$store = {};
      installer.forEach((store_instance,index)=>{
        if(index === 0){
          app.use(store_instance[Object.keys(store_instance)[0]]);
        }
        if(app.config.globalProperties.$store !== undefined){
          app.config.globalProperties.$store[Object.keys(store_instance)[0]] = store_instance[Object.keys(store_instance)[0]]
        }
      })
    }
  }
};
