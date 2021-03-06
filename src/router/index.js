import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import chatroom from '@/components/chatroom'
import Message from '@/components/Message'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'chatroom',
      component: chatroom
    },
    {
      path: '/Message',
      name: 'Message',
      component: Message
    }
  ]
})
