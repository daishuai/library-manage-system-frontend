// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import iView from "view-design";
import 'view-design/dist/styles/iview.css';
import axios from 'axios';
import VueAxios from "vue-axios";

axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.timeout = 5000;
axios.defaults.headers['Content-Type'] = 'application/json';

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(iView)
Vue.use(VueAxios, axios)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
