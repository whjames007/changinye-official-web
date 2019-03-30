import Vue from 'vue'
import Router from 'vue-router'
import ChanginyeHome from '@/views/ChanginyeHome'
import ChanginyeTest from '@/views/ChanginyeTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ChanginyeHome',
      component: ChanginyeHome
    }, {
      path: '/test',
      name: 'ChanginyeTest',
      component: ChanginyeTest
    }
  ]
})
