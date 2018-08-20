import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import message from '@/components/message'
import shopping from '@/components/shopping'
import my from '@/components/my'
import read from '@/components/read'
import unread from '@/components/unread'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'index',
        component: index
    }, {
        path: '/message',
        name: 'message',
        component: message
    }, {
        path: '/shopping',
        name: 'shopping',
        component: shopping
    }, {
        path: '/my',
        name: 'my',
        component: my,
        children: [{
            path: 'read',
            name: 'read',
            component: read
        }, {
            path: 'unread',
            name: 'unread',
            component: unread
        }]
    }]
})