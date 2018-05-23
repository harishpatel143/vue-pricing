// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/plugins/bootstrap/css/bootstrap.min.css';
import './assets/js/jquery.min.js';
import './assets/css/pricing.min.css';
import './assets/css/components.css';
//import './assets/plugins/bootstrap-toastr/toastr.min.css';
//import './assets/css/custom.css';
//import './assets/css/layout.css';
//import './assets/css/themes/darkblue.css';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
})
