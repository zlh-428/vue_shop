import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login.vue'
import Home from "../components/home.vue"
import Welcome from "../components/welcome.vue"
import User from "../components/user/User.vue"
import Rights from "../components/power/Rights.vue"

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/login'
  }, {
    path: "/login",
    component: Login
  },
  {
    path: "/home",
    component: Home,
    redirect: "/welcome",
    children: [{
        path: '/welcome',
        component: Welcome
      },
      {
        path: '/users',
        component: User
      },
      {
        path: '/rights',
        component: Rights
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

// 路由导航守卫控制页面访问
router.beforeEach((to, form, next) => {
  // 当输入为 /login 直接放行
  if (to.path == "/login") return next();
  // 获取客户端保存的token值
  const tokenStr = window.sessionStorage.getItem('token');
  // 如果token值为空，强制跳转到login界面
  if (!tokenStr) return next('/login')
  next();
})

export default router
