import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';
Vue.use(VueRouter)
import VueResource from 'vue-resource'
Vue.use(VueResource)
import routerArr from './components/router.config.js'
import store from './store/index.js'
var router=new VueRouter({
	routes:routerArr,
	mode:'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
