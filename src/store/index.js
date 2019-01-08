import Vue from 'vue'
import Vuex from 'vuex'

import detail from './modules/detail'
import Mui from './modules/mui'



Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    Mui,
    detail
  }
})
