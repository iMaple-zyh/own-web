import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import Login from '../views/login.vue'
import BlogDetail from '../views/blogDetail.vue'
import Publish from '../views/publish.vue'
import Remark from '../views/remark.vue'
import Regist from '../views/regist.vue'
import Home from '../views/Home.vue'
import Search from '../views/search.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/blog/detail/:blogId',
    name: 'BlogDetail',
    component: BlogDetail
  },
  {
    path: '/Home/:userId',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog/post',
    name: 'Publish',
    component:Publish 
  },
  {
    path: '/blog/detail/remark/:blogId',
    name: 'Remark',
    component: Remark
  },
  {
    path: '/regist',
    name: 'Regist',
    component: Regist
  },
  {
    path:'/search',
    name: 'Search',
    component: Search
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router