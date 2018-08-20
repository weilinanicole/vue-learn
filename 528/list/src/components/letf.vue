<template>
    <div class="left">
        <li v-for="(item,index) in listItem" :key='index' :tag='item.name' class='items' @click='leftClick(item.name)'>{{item.items}}</li>
    </div>
</template>
<script>
import axios from 'axios'
import Dispatch from '../js/dispatch.js'
export default {
    data(){
        return {
            listItem:[],
            tags:''
        }
    },
    methods:{
        getData(){
            axios.get('/data')
            .then((response)=>{
                this.listItem=response.data.left
            })
            .catch((err)=>{
                console.log(err)
            })
        },
        leftClick(v){
            this.tags=v
        }
    },
    mounted(){
        this.getData()
        this.$emit('left',{tags:this.tags})
    }
}
</script>

