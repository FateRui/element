import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  goods: []
}
const mutations = {
  setGoods (state, goods) {
    state.goods = goods
  }
}

export default new Vuex.Store({
  state,
  mutations
})
