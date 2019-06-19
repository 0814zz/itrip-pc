
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
import {vueAccordion} from 'vue-accordion'

// 引用地图组件
// import {city} from 'src/assets/js/kuCity.js'

Vue.component('vue-accordion', vueAccordion)

Vue.config.productionTip = false
Vue.use(ElementUI);    // elementUi

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  components: { App },
  template: '<App/>'
})
