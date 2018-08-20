<template>
    <div class="iscroll">
        <div class="tit">
            电动车/自行车
        </div>
        <div class="list">
            <dl v-for="(item, index) in product1.zixingche" :key="index">
                 <dt><img :src="item.img" alt=""></dt>
                 <dd>{{item.name}}</dd>
            </dl>
        </div>
        <div class="tit">
            摩托车/用品
        </div>
        <div class="list">
             <dl v-for="(item, index) in product1.motuoche" :key="index">
                 <dt><img :src="item.img" alt=""></dt>
                 <dd>{{item.name}}</dd>
            </dl>
        </div>
    </div> 
</template>

<script>
import axios from 'axios';

export default {
    name: 'Index',
    data(){
        return {
            product1:[],
            product2:[],
        }
    },
    mounted:function(){
        this.getData()
    },
    methods:{
        getData(){
            axios.get('/info').then(res=>{
                console.log(res.data.list);
                res.data.list.forEach((item,index)=>{    
                    if(item.motuoche){
                        this.product1 = item;
                    }
                })
            })
        }
    }
}
</script>

<style>
.tit{
    width:100%;
    font-size: 16px;
}
.list{
    margin-bottom:20px;
    width:100%;
    display: flex;
    flex-wrap: wrap;
}
.list dl{
    text-align: center;
    width:33%;
}
.list dl dt{
    width:100%;
    text-align: center;
}
.list dl dt img{
    text-align: center;
    width:60px;

}
</style>
