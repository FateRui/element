import Vue from 'vue'
import loadingVue from './loading'

const loading = {}

loading.install = () => {
  const LoadingClass = Vue.extend(loadingVue)
  Vue.prototype.$showLoading = (el) => {
    let myLoading = el.$loading
    if (!myLoading) {
      myLoading = new LoadingClass()
      myLoading.$mount(document.createElement('div'))
      el.appendChild(myLoading.$el)
      el.$loading = myLoading
    }
    myLoading.show = true
  }
  Vue.prototype.$hideLoading = (el) => {
    let myLoading = el.$loading
    if (myLoading) {
      myLoading.show = false
    }
  }
}

export default loading
