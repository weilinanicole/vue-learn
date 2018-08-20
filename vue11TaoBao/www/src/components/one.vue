<template>
    <div class="wrap">
        <Left :leftList='leftList' :callback='callback'/>
        <Right :currentList='currentList'/>
    </div>
</template>
<script>
import Left from './left.vue'
import Right from './right.vue'
import axios from 'axios'
export default {
    data(){
        return{
           leftList:[],
           renderList:[],
           currentList:[],
           callback:(res)=>{
               this.currentList=res
           }
        }
    },
    methods:{
        getData(){
            axios.get('/data')
            .then((res)=>{
                this.leftList=res.data.left;
                this.renderList=res.data.right.slice(1)
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

