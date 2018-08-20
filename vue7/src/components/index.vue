<template>
    <div id="index">
        <div class="head">
            <div class="top">
                <li></li>
                <li><img src="../assets/img_20161026155951214.png" alt=""><span>北京市V</span></li>
                <li>
                    <i class="icon iconfont icon-fangdajing"></i>
                    <span>搜索</span>
                </li>
            </div>
            <nav></nav>
        </div>

        <div class="cont">

        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data:function(){
        return {
            arr:[]
        }
    },
    methods:{
        getNav:function(){
            axios.get('/navs')
            .then(function(response){
                console.log(response)
            }).catch(function(err){
                console.log(err)
            })
        }
    },
    mounted:function(){
        this.getNav()
    }
       
}
</script>


