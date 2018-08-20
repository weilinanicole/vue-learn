<template>
    <div id='header'>
            <div class="top">
                <li></li>
                <li>
                    <img src="../assets/img_20161026155951214.png" alt="">
                    <span>北京V</span>
                </li>
                <li>
                    <i class="icon iconfont icon-fangdajing"></i>
                    <span>搜索</span>
                </li>
            </div>
            <nav class='iscroll'>
                <div class="box" ref='box'>
                    <ul class='iscrollbox' ref='cont'>
                        <li v-for="(item,key) in nav" :key="key">{{item.name}}</li>
                    </ul>
                </div>
                <p></p>
            </nav>
        </div>
</template>
<script>
import axios from 'axios'
import BScroll from 'better-scroll'
export default {
    data(){
        return{
            nav:''
        }
    },
    methods:{
        getNav(){
            var arr=[];
            axios.get('/nav')
            .then((response)=>{
                 for(let i=0;i<response.data.category_list.length;i++){
                    arr.push(response.data.category_list[i])
                }
                this.nav=arr;
                this.$nextTick(()=>{
                    this.scroll=new BScroll(this.$refs.box,{
                        scrollX:true,
                        scrollY:false
                    })
                })
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    },
    mounted(){
        this.getNav()
    }
}
</script>
