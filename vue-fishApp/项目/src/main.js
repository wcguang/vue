import Vue from 'vue'
import App from './App.vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import vueResource from 'vue-resource';
Vue.use(vueResource);
import filter from './filter/index.js';
Object.keys(filter).forEach(function(key){
	Vue.filter(key,filter[key])
})
import VueCookie from 'vue-cookie';
Vue.use(VueCookie)
import loading from './loading';
Vue.use(loading);
import store from './store/index.js'
import routerArr from "./components/router.config.js";
var router=new VueRouter({
	routes:routerArr,
	mode:'history'
})
new Vue({
  el: '#app',
  data:{
  	aa:true
  },
  components:{
  	App
  },
  router,
  store
})
