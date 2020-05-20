import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/',
      home:'Login',
      component:()=>import('@/components/login'),
      meta:{isLogin:true}
    },
    {
      path:'/home',
      home:'Home',
      component:()=>import('@/components/home'),
      redirect:"/user",
      children:[
        {
          path:'/user',
          home:'User',
          component:()=>import('@/components/children/user'),
        },
        {
          path:'/resource',
          home:'Resource',
          component:()=>import('@/components/children/resource'),
        },
      ]
    },
    {
      path:'/register',
      home:'Register',
      component:()=>import('@/components/register'),
      meta:{isLogin:true}
    }
  ]
})
