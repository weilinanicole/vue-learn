<template>
    <div class='sort'>
        <!-- 排序 -->
        <div class="ll">
             <li v-for="(item,index) in clickTop"  @click='val(item)'>
                {{item}}
            </li>
            <div class="sortData" v-for="(item,key) in sortData">
                {{item}}
            </div>
        </div>
       
      
       
        <!-- 品牌 -->
        <li v-for="(val,keys) in brandData">{{val}}</li>

        
    </div>
    
</template>

<script>
export default {
    data(){
        return {
            isShow:false
        }
    },
    props:['clickTop','sortData','brandData'],
    methods:{
        val(item){
            this.$emit('child',item)
        }
    }
}
</script>

<style>
    .sort{
        width: 100%;
        height: 100%;
        background: #fff;
        overflow-y: auto;
    }
    .sort>li{
        padding-left:.1rem;
        width: 100%;
        height: .5rem;
        line-height: .5rem;
        border-bottom:1px solid #ccc;
    }
    .brand{
        width: 100%;
        height: 100%;
        overflow-y: auto;
    }
    .brand>li{
        height: .5rem;
        line-height: .5rem;
        border-bottom:1px solid #ccc;
        padding-left:.1rem;
    }
</style>
