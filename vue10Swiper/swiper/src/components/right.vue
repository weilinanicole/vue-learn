<template>
    <div class="right" >
        <div v-for="(item,index) in list" :key='index' class='rightBox' >
            <h2>{{item.title}}</h2>
            <div class="proList">
                <ul v-for="(value,key) in item.list" :key='key'>
                    <img src='../assets/2.png'>
                    <li>{{value.theme}}</li>
                </ul>
            </div>
            <li>{{currentList[toRight]}}</li>
        </div>
    </div> 
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            list:[],
            currentList:[]
        }
    },
    methods:{
        getNav(){
            axios.get('/nav')
            .then((response)=>{
                 this.currentList=response.data;
                 this.list=response.data[0].datas;
                
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    },
    props:{
      toRight:''
    },
    mounted(){
         
        this.getNav()
    }
}
</script>
