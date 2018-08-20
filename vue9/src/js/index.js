import vue from 'vue';
import Index from '../component/app.vue';




new vue({
    el: '#app',
    render: h => h(Index)
})