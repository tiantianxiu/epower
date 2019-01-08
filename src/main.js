import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mui from './assets/js/mui.min.js'
import store from './store'
import axios from './store/modules/http'


Vue.use({router: router})
Vue.use({mui: mui})
// 将axios挂载到prototype上，在组件中可以直接使用this.axios访问
Vue.prototype.axios = axios

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    if (localStorage.getItem('token')) {  // 通过vuex state获取当前的token是否存在
      // store.dispatch({
      //   type: 'profile',
      //   axios: axios
      // })
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next()
  }
});

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  axios,
  store
})
