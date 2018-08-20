import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import style from '../css/style.css'
import font from '../fonts2/iconfont.css'


import total1 from '../components/page1.vue'
import total2 from '../components/page2.vue'
import total3 from '../components/page3.vue'
import total4 from '../components/page4.vue'


Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'total1',
        component: total1
    }, {
        path: '/vip',
        name: 'total2',
        component: total2
    }, {
        path: '/shopping',
        name: 'total3',
        component: total3
    }, {
        path: '/my',
        name: 'total4',
        component: total4
    }]
})