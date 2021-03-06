import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'index',
      component: resovle => require(['@/views/index.vue'], resovle)
    },
    {
      path:'/index2',
      name:'index2',
      component: resovle => require(['@/views/index2.vue'], resovle)
    },
    {
      path:'/index3',
      name:'index3',
      component: resovle => require(['@/views/index3.vue'], resovle)
    }
  ]
})
