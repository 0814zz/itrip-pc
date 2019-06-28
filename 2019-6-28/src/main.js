
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入element-ui插件 npm i element-ui -S
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//引入字体图标
import "font-awesome/css/font-awesome.css"

// 导入axios（要先在terminal里安装：npm install axios）
import Axios from 'axios'
// 这里我们起别名为 $axios
Vue.prototype.$axios = Axios;
//  将本地HOST映射到  /api 上
Vue.prototype.HOST ='/api';          //api名称要一致

//  引用手风琴组件
// import {vueAccordion} from 'vue-accordion'
// Vue.component('vue-accordion', vueAccordion)
// 引用地图组件
// import myCharts from 'static/js/myCharts.js'
// Vue.use(myCharts)

// 视频播放插件
// import VideoPlayer from 'vue-video-player'
// require('video.js/dist/video-js.css')
// require('vue-video-player/src/custom-theme.css')
// Vue.use(VideoPlayer)




Vue.config.productionTip = false
Vue.use(ElementUI);    // elementUi

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  components: { App },
  template: '<App/>'
})
