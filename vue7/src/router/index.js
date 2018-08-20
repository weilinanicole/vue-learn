import Vue from 'vue'
import Router from 'vue-router'
import style from '../css/style.css'
import font from '../fonts2/iconfont.css'
import HelloWorld from '@/components/HelloWorld';
import Index from '@/components/Index';
import Vip from '@/components/vip';
import Shopping from '@/components/shopping';
import My from '@/components/my';

import child from '@/components/child'


Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: Index
    }, {
        path: '/vip',
        component: Vip
    }, {
        path: '/shopping',
        component: Shopping
    }, {
        path: '/my',
        component: My
    }, {
        path: '/child',
        name: 'child',
        component: child
    }]
})