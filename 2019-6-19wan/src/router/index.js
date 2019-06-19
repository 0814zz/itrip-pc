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
import Tavern_list from '@/pages/tavern/tavern-list'          // 酒店搜索
import HotelDetail from '@/pages/tavern/hotelDetail'          // 酒店详情页


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',       // 页面首页
      name: 'Index',
      component: Index,
    },
    {
      path: '/tavern-index',    // 酒店首页
      name: 'Tavern_index',
      component: Tavern_index,
    },
    {
      path: '/tavern-list',
      name: 'Tavern_list',    // 酒店搜索
      component: Tavern_list,
    },
    {
      path: '/',
      name: 'HotelDetail',    // 酒店详情
      component: HotelDetail,
    },
    {
      path: '/register',   // 注册
      name: 'Register',
      component: Register,
    },
    {
      path: '/login',      // 登录
      name: 'Login',
      component: Login
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
