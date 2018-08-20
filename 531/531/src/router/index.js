import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'



import style from '../css/style.css'
import font from '../fonts2/iconfont.css'

import one from '@/components/pageOne'
import two from '@/components/pageTwo'
import three from '@/components/pagethree'
import four from '@/components/pageFour'
import Child from '@/components/child'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'one',
        component: one
    }, {
        path: '/two',
        name: 'two',
        component: two
    }, {
        path: '/three',
        name: 'three',
        component: three
    }, {
        path: '/four',
        name: 'four',
        component: four
    }, {
        path: '/child',
        name: 'child',
        component: Child
    }]
})