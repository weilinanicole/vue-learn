<template>
    <div>
        <load v-if='loading'></load>
        <div v-else>
            <vHead></vHead>
            <div id="section">
            <swiper :options='swiperOption' class='banner'>
                <swiper-slide v-for="(item,index) in swiperSlides" :key='index'>
                    <img :src="item.path" alt="">
                </swiper-slide>
                <div class="swiper-pagination" slot='pagination'></div>
            </swiper>
            <div class="lists" >
                <li v-for="(item,index) in anxin" :key='index'>
                    <img :src="item.image" alt="">
                    <span>{{item.name}}</span>
                </li>
            </div>
            <div class="imgList">
                <div class='left'>
                    <img alt="">
                </div>
                <div class='right'>
                    <img src="https://j-image.missfresh.cn/img_20180517014223439.png" alt="">
                    <ul class='ulbox'>
                        <li><img src="https://j-image.missfresh.cn/img_20180517013627818.png" alt=""></li>   
                        <li><img src="https://j-image.missfresh.cn/img_20180518134408478.png" alt=""></li>    
                    </ul>
                </div>
            </div>
            <div class="today">
                <img src="https://image.missfresh.cn/category_group_images/B8B9F8169D12314ED4558672F8F19A14.PNG" alt="">
            </div>
            <div class="itemList" ref='itemListBox'>
            <div class='every' v-for="(item,index) in currentList" :key='index' v-if="!item.code">
             <img :src="item.image">
             <ul>
                <h1>{{item.name}}</h1>
                <h2>{{item.subtitle}}</h2>
                <h3><span v-for="(val,keys) in item.product_tags" :key='keys'>{{val.name}}</span></h3>
                <h6>
                    <li><span>￥{{item.vip_price_pro&&item.vip_price_pro.price_down.price/100}}</span><span v-if="item.vip_price_pro.price_up.price>item.vip_price_pro.price_down.price">{{item.vip_price_pro&&item.vip_price_pro.price_up.price/100}}</span></li>
                    <div id='emit' class='shops'>
                        <img :src="item.cart_image" v-if="item.onoff" @click="shop(item)"/>
                        <li v-else>
                            <em class='del' @click="del(item)">-</em>
                            <span class='num'>{{item.count}}</span>
                            <em class='add' @click="add(item)">+</em>
                        </li>
                    </div>
                </h6>
                <span class='fix'><img :src="item.promote_tag" alt=""></span>
             </ul>
            </div>
            </div>
            </div>
        </div>
    </div>
    
</template>
<script>
import axios from 'axios'
import vHead from './header.vue'
import {swiper,swiperSlide} from 'vue-awesome-swiper'
import swiperstyle from 'swiper/dist/css/swiper.css'
import load from './loading.vue'
import Bus from '../js/bus.js'
import Dispatch from '../js/dispatch.js'
export default {
    data:function(){
        return {
            swiperOption:{
                autoplay:true,
                loop:true,
                pagination:{
                    el:'.swiper-pagination',
                    clickable:true,
                    type:'fraction'
                }
            },
            swiperSlides:[],
            anxin:[],
            itemList:[],
            currentList:[],
            message:'',
            newArr:[],
            newNum:[],
            loading:true
        }
    },
    methods:{
        getNav(){
            let arr=[]
            axios.get('/nav')
            .then((response)=>{
                //swiper
                this.loading=false;
                this.swiperSlides=response.data.product_list.banner;
                
                this.anxin=response.data.product_list.brands;
                //itemList
                this.itemList=response.data.product_list.products.slice(1);
                for(let i=0;i<this.itemList.length;i++){
                    this.itemList[i].onoff=true,
                    this.itemList[i].count=0
                }
               
                this.currentList=this.itemList.slice(0,20)
               
            })
            .catch(function(err){
                console.log(err)
            })
        },
        shop(item){
            for(let i=0;i<this.currentList.length;i++){
                if(this.currentList[i].name===item.name){
                    this.currentList[i].onoff=false
                    this.currentList[i].count=1
                }
            };
            this.$forceUpdate()
            this.changeCar()
        },
        add(item){
            item.count++;
            this.$forceUpdate()
            this.changeCar()
        },
        del(item){
            if(item.count==1){
                item.onoff=true
                item.count=0
            }else{
                 item.count--  
            }
             this.$forceUpdate()
             this.changeCar()
        },
        changeCar(){
            let arr=[];
            for(let i=0;i<this.currentList.length;i++){
                if(this.currentList[i].count){
                    arr.push(this.currentList[i])
                }
            }
            Dispatch.emit('data',arr)
        }
    },
    mounted(){
        this.getNav();
        let count=1;
            window.onscroll=()=>{
                var Top=document.documentElement.scrollTop;//滚动条距页眉的高度
                var client=document.documentElement.scrollHeight;//数据高度
                if(count>6){
                    return
                }
                if(Top/client>0.8){
                    count+=1;
                    let counts=count*20;
                    this.currentList=this.itemList.slice(0,counts);
                    this.$forceUpdate()
                }
            }
      
    },
    components:{
        swiper,
        swiperSlide,
        vHead,
        load
    }
}
</script>
