<template>
    <div>
        <h1 @click='click'>我的页面</h1>
        <input type="text" placeholder="请输入内容" v-model.lazy="inp">
    </div>
</template>
<script>
import Dispatch from '../js/dispatch.js'
export default {
    data(){
        return {
            inp:''
        }
    },
    watch:{
        inp(v){
            this.inp=v
            Dispatch.emit('pass',this.inp)
        }
    },
    methods:{
        click(){
            this.$router.push({path:'/child',query:{id:1}})
        }
    }
}
</script>

