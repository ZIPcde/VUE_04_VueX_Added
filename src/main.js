import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from '@/App.vue';
import store from '@/store/store';
import router from '@/router/index.js'; 
import './assets/styles.css'

Vue.use(VueRouter);
Vue.use(Vuex);

new Vue({
  router, 
  store,
  render: h => h(App)
}).$mount('#app');
