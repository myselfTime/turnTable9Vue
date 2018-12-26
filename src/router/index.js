import Vue from 'vue'
import Router from 'vue-router'
import lottery from '@/components/lottery'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'lottery',
      component: lottery
    }
  ]
})
