import Vue from 'vue'
import Router from 'vue-router'
import style from '../css/style.css'
import font from '../fonts2/iconfont.css'



import Index from '@/components/index'
import Vip from '@/components/vip'
import Shopping from '@/components/shopping'
import My from '@/components/my'
// import Head from '@/components/header'

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
    }]
})