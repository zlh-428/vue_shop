import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

// 引入小图标css
import "./assets/fonts/iconfont.css"
// 导入全局样式
import "./assets/css/global.css"

// 引入axios
import axios from "axios"
// 配置请求的根路径
axios.defaults.baseURL = "http://127.0.0.1:8888/api/private/v1/"
// 通过axios请求拦截器添加token，保证拥有获取数据的权限
axios.interceptors.request.use(config => {
  // 将sessionStorage中的token添加给config
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 返回config
  return config
})
Vue.prototype.$http = axios;


Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')