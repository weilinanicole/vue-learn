import Vue from 'vue'
import Router from 'vue-router'
import one from '@/components/one'
import two from '@/components/two'
import three from '@/components/three'
import four from '@/components/four'


import style from '../css/style.css'

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
    }]
})