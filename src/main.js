
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入element-ui插件 npm i element-ui -S
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


//引入字体图标
import "font-awesome/css/font-awesome.css"

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  components: { App },
  template: '<App/>'
})
