import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'

import { BootstrapVue, BIconPlus, BIconChevronLeft } from "bootstrap-vue";

Vue.use(VueAxios, axios)

Vue.use(BootstrapVue);


Vue.component("BIconPlus", BIconPlus);
Vue.component("BIconChevronLeft", BIconChevronLeft);

Vue.config.productionTip = false

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
