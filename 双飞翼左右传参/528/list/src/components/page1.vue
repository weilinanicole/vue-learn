<template>
    <div class='box'>
        <Left :datas='this.leftList'/>
        <Right/>
    </div>
</template>
<script>
import axios from 'axios'
import Left from './left.vue'
import Right from './right.vue'
export default {
    data(){
        return {
            leftList:[],
            firstList:[],
            currentList:[]
        }
    },
    methods:{
        getData(){
            axios.get('/data')
            .then((response)=>{
                this.leftList=response.data
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    },
    mounted(){
        this.getData()
    },
    components:{
        Left,
        Right
    }
}
</script>

