import Vue from 'vue';
// import Child from './father.vue';
// new Vue({
//     el: '#app',
//     render: h => h(Child)
// })
import test from './test.vue';
new Vue({
    el: '#app',
    render: h => h(test)
})