import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store/store'
//import $ from "jquery";

import './assets/css/bootstrap-grid.css';
import './assets/css/icons.css';
import './assets/css/animate.min.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import './assets/css/chosen.css';
import './assets/css/bootstrap-grid.css';
import './assets/css/colors/colors.css';
import './assets/css/bootstrap.css';

// importing the helper
import interceptorsSetup from './interceptor';

// and running it somewhere here
interceptorsSetup();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
