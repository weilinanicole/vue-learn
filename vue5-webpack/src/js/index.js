import Index from '../component/index.vue';
import style from '../css/style.css';
import font from '../fonts2/iconfont.css';

import vue from 'vue';
new vue({
    el: '#app',
    render: h => h(Index)
})