import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Change from '@/components/radio-change'
import More from '@/components/radio-more'
import Table from '@/components/table'



import Register from '@/pages/personal/register'     // 注册
import Login from '@/pages/personal/login'            // 登录


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Register',
      component: Register,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },

    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    // {
    //   path: '/',
    //   name: 'Change',
    //   component: Change
    // }
    // {
    //   path: '/',
    //   name: 'More',
    //   component: More
    // }
    // {
    //   path: '/',
    //   name: 'Table',
    //   component: Table
    // }
  ]
})
