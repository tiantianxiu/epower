import Vue from 'vue'
import Router from 'vue-router'

import IndexView from '../view/IndexView.vue'
import DetailView from '../view/DetailView'

Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'IndexView',
      component: IndexView
    },
    {
      path: '/detail/:id',
      name: 'DetailView',
      component: DetailView
    }
  ]
})