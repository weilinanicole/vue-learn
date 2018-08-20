<template>
    <div>
        <div class="caption">{{curProduct.name}}</div>
        <div href="#" v-for="(item, index) in curProduct.list" :key="index" class="list">
            <div class="title" v-if="item.listName">{{item.listName}}</div>
            <dl v-for="(val,ind) in item.info" :key="ind">
                <dt><img :src="val.img" alt=""></dt>
                <dd>{{val.productName}}</dd>
            </dl>
        </div>
    </div>
</template>

<script>
import Dispatch from '../../dispatch.js'
export default {
    name:"Content",
    data(){
        return {
            curproducts:''
        }
    },
    methods:{
        
    },
    mounted(){
        // console.log(this.curProduct)
    },
    props:{
        curProduct:''
    },
}
</script>

<style>
.list{
    width:100%;
    display: flex;
    flex-wrap: wrap;
}
.list dl{
    width:32%;
    text-align: center;
}
.list dl dt{
    width:100%;
}
.list dl dt img{
    width:80%;
}
.list .title{
    padding-left:20px;
    width:100%;
    height: 40px;
    line-height:40px;
}
.caption{
    width:100%;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    font-weight: 800;
    text-align: center;
}
</style>
