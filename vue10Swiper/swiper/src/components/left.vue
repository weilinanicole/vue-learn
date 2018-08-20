<template>
    <div class="left">
        <li v-for="(item,index) in nav" :key='index' @click='getInd(item.id)'>{{item.tags}}</li>
    </div> 
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            nav:[]
        }
    },
    methods:{
        getNav(){
            axios.get('/nav')
            .then((response)=>{
                 this.nav=response.data;
            })
            .catch((err)=>{
                console.log(err)
            })
        },
        getInd(v){
             this.$emit('leftChild',{"id":v})
        }
    },
    mounted(){
        this.getNav()
    }
}
</script>

