import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

// 利用插件 postcss-pxtorem 和 lib-flexible 实现rem响应式布局
// 375px 即100%宽度，写px会自动rem处理，如果不想被rem处理，可以使用PX来写。
import 'amfe-flexible/index.js'

Vue.config.productionTip = false

// const app = new Vue({
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

// axios.defaults.baseURL = 'http://47.105.165.248:8110';
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.token = token;
  }
  return config;
});
/*axios.interceptors.response.use((response) => {
  if (response) {

  }
  return response;
});*/
