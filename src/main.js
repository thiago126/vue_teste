import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VeeValidate from 'vee-validate';
import Swal from 'sweetalert2';

window.Swal = Swal;

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VeeValidate, {
  locale: 'pt',
  fieldsBagName: 'veeFields'
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
