import Vue from 'vue'
import Router from 'vue-router'
import Login from '../view/login/login'
import Hello from "../view/Hello";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello,
      // 需要登陆才能访问
      meta: {
        requireAuth: true
      }
    }
  ]
})

