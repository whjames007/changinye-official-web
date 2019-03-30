// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

import i18n from './i18n/index.js'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// import './icons/ali-iot-icon/iconfont.css'

import ChanginyeCommonConstants from '@/utils/ChanginyeCommonConstants'

Vue.use(VueAxios, axios)
Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.constants = ChanginyeCommonConstants

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
