import style from '../css/style.css';
import sass from '../css/styles.scss';
import vue from 'vue';
import Index from '../js/app.vue';

//http请求
// import vueResource from 'vue-resource';
// vue.use(vueResource);
// vue.config.productionTip = false;
new vue({
    el: '#app',
    render: h => h(Index)
})

//app.vue//监听input变化
// data:function(){
//     return {
//        datas:'',
//        username:'',
//        password:''
//     }
// },
// watch:{
//   username:function(val){
//     console.log(val)
//   },
//   password:function(val){
//     console.log(val)
// }
// }