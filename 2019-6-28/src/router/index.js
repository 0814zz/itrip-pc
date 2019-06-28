import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Change from '@/components/radio-change'
import More from '@/components/radio-more'
import Table from '@/components/table'
import Echart from '@/components/echart'
import Date from '@/components/date'

import Index from '@/pages/index/index'     // 首页
import Register from '@/pages/personal/register'     // 注册
import Login from '@/pages/personal/login'            // 登录
import Tavern_index from '@/pages/tavern/tavern-index'          // 酒店首页
import Tavern_list from '@/pages/tavern/tavern-list'          // 酒店搜索
import HotelDetail from '@/pages/tavern/hotelDetail'          // 酒店详情页
import Method_index from '@/pages/method/method-index'        // 攻略首页
import MethodDetail from '@/pages/method/MethodDetail'       // 攻略成都
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
      path: '/hotelDetail',
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
    {
      path: '/method-index',      // 攻略首页
      name: 'Method_index',
      component: Method_index
    },
    {
      path: '/methodDetail',      // 攻略成都
      name: 'MethodDetail',
      component: MethodDetail
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
    // {
    //   path: '/',
    //   name: 'Echart',
    //   component: Echart
    // }
    {
      path: '/',
      name: 'Date',
      component: Date
    }
  ]
})
