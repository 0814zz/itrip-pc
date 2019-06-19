import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Change from '@/components/radio-change'
import More from '@/components/radio-more'
import Table from '@/components/table'



import Index from '@/pages/index/index'     // 首页
import Register from '@/pages/personal/register'     // 注册
import Login from '@/pages/personal/login'            // 登录
import Tavern_index from '@/pages/tavern/tavern-index'          // 酒店首页
import Tavern_list from '@/pages/tavern/tavern-list'          // 酒店首页


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index,
    },
    {
      path: '/tavern-index',
      name: 'Tavern_index',
      component: Tavern_index,
    },
    {
      path: '/',
      name: 'Tavern_list',
      component: Tavern_list,
    },
    {
      path: '/register',
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
