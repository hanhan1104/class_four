// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'

Vue.prototype.$axios = axios

Vue.use(ElementUI);
Vue.config.productionTip = false

//路由拦截
router.beforeEach((to,from,next)=>{
  if(to.meta.isLogin){
    next()
  }
  else if(window.sessionStorage.getItem('account')){
    next()
  }else{
    alert('请登录')
    next('/')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
