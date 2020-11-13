import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import "@lottiefiles/lottie-player";
import "./assets/scss/main.scss";

const base = axios.create({
  baseURL: "https://web-animation-api.herokuapp.com"
});

library.add(fas);

Vue.prototype.$http = base;
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
