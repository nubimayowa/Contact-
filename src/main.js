import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import axios from "axios";

Vue.config.productionTip = false
//setting up default vuejs http modules for api calls 



Vue.prototype.$http = axios;
//load the token from the local storage
const token = localStorage.getItem("token");


//if theres a token then simple default axious authorization headers

if(token){
  Vue.prototype.$http.defaults.headers.common["Authorization"]= token; 
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
