import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

//==========Buefy========================
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)
//========================================

import './assets/css/myapp.css';

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
