import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PrivateMessageInbox from '@/components/PrivateMessageInbox'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/inbox-pms',
      name: 'inbox-pms',
      component: PrivateMessageInbox,
      meta:{requiresAuth: true}
    }
  ]
})
