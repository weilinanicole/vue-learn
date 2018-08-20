<template>
    <div class="wrap">
        <header>
            <li>阿拉善盟<i class="icon iconfont icon-angle-down"></i></li>
            <li><input type="text" placeholder="请输入内容"></li>
            <li><i class="icon iconfont icon-fangdajing"></i></li>
        </header>
        <section>
            <div class="nav">
                <li class='sort'>排序<i class="icon iconfont icon-angle-down" @click='clickSort'></i><ol><li>由低到高</li><li>由高到底</li></ol></li>
                <li>品牌<i class="icon iconfont icon-angle-down"></i></li>
                <li>价格<i class="icon iconfont icon-angle-down"></i></li>
                <li>筛选<i class="icon iconfont icon-angle-down"></i></li>
            </div>
            <div class="box" v-for="(value,key) in datas">
                <div class="list" v-for="(item,index) in value">
                    <ul v-for="(items,indexs) in item.carList">
                        <li>{{items.carName}}</li>
                        <li><span>{{items.price}}</span><span class='del'>X</span></li>
                    </ul>
                </div>
            </div>
        </section>
        <footer>
            <li>首页</li>
            <li>买车</li>
            <li>卖车</li>
            <li>我的</li>
        </footer>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data:function(){
        return {
            datas:''
        }
    },
    methods:{
        getData:function(){
            let arr=[];
            axios.get('/login')
            .then(function(response){
                for(let i=0;i<response.data.length;i++){
                    arr.push(response.data[i])
                }
                console.log(arr)
            }).catch(function(err){
                console.log(err)
            })
            this.datas=arr;
        },
        clickSort:function(){
            let sotrbtn=document.getElementsByClassName('sort')[0];
            if(sotrbtn.children[1].style.display=='block'){
                sotrbtn.children[1].style.display='none'
            }else{
                sotrbtn.children[1].style.display='block'
            } 
        }
    },
    mounted:function(){
        this.getData()
        // this.clickSort()
    }
}
</script>
