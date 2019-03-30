import Vue from 'vue'
import Vuex from 'vuex'
import loginModule from './login-module'
import commonModule from './common-module'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    loginModule: loginModule,
    commonModule: commonModule
  }
})
