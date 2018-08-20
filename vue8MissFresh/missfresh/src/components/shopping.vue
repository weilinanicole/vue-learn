<template>
    <div class="contentBox">
        <div class="addr">
            北京市
        </div>
        <div class="listBox">
            <li>
                <input type="checkbox">
            </li>
             <div class='every' @data='getData' v-for="(item,index) in message" :key='index' v-if="item">
                    <!-- <img :src="item.image">
                    <ul>
                        <h1>{{item.name}}</h1>
                        <h2>{{item.subtitle}}</h2>
                        <h3><span v-for="(val,keys) in item.product_tags" :key='keys'>{{val.name}}</span></h3>
                        <h6>
                            <li><span>￥{{item.vip_price_pro&&item.vip_price_pro.price_down.price/100}}</span><span v-if="item.vip_price_pro.price_up.price>item.vip_price_pro.price_down.price">{{item.vip_price_pro&&item.vip_price_pro.price_up.price/100}}</span></li>
                            <div id='emit' @click="shop" class='shops' onoff='true'><li class='true'><img :src="item.cart_image"></li><li style="display:none"><em class='del'>-</em><span class='num'>1</span><em class='add'>+</em></li></div>
                        </h6>
                        <span class='fix' ><img :src="item.promote_tag" alt=""></span>
                    </ul> -->
                    <li>{{getdata}}</li>
                 
            </div>
        </div>
    </div>
    
    
</template>
<style>
    .contentBox{
        width: 100%;
        height: 100%;
        background:#eee;
    }
    .addr{
        width: 100%;
        height: .5rem;
        line-height: .5rem;
        text-align: center;
        background:#fff;
    }
    .listBox{
        margin-top:.1rem;
        width: 100%;
        height: auto;
    }
</style>

<script>
import bus from '../js/bus.js'
export default {
    data(){
        return {
            message:''
        }
    },
    mounted(){
        let storage=window.localStorage.getItem('arr');
        console.log(storage)
        
    }
}
</script>
