import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Post from '@/views/Post.vue'
import Unrouted from '@/views/Unrouted.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/post/:id',
    component: Post
  },
  {
    path: '**',
    component: Unrouted
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
