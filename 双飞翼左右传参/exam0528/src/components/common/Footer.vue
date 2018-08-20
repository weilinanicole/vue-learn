<template>
    <footer class="footer">
        <a href="#" v-for="(item, index) in data.list" :key="index" @click="clickProduct(item)">
        {{item.name}}
        </a>
    </footer>
</template>

<script>
import Dispatch from '../../dispatch.js'
export default {
    name:"Footer",
    data:function(){
        return {
           everyList:[]
        }
    },
    props:{
        data:'',
        callback:''
    },
    mounted(){
       //  console.log(this.data);
    },
    methods:{
        clickProduct(item){
            this.data.list.forEach((val)=>{
                if(item.id == val.id){
                    this.everyList = val;
                    // console.log(this.everyList);
                    this.callback(val)
                }
            })
        }
    }
}
</script>

<style>

</style>
