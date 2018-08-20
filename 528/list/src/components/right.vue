<template>
    <div class="right">
        <a  v-for="(item,index) in listItem" :key='index'  :tag='item.name'>
            <h2>{{item.tags}}</h2>
            <div class="box">
                 <ul v-for="(value,key) in item.datas">
                    <img src="../assets/1.png" alt="">
                     <li>{{value.title}}</li>
                </ul>
            </div>
            
        </a>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            listItem:[]
                      
        }
    },
    methods:{
        getData(){
            axios.get('/data')
            .then((response)=>{
                this.listItem=response.data.right
              
            })
            .catch((err)=>{
                console.log(err)
            })
        },

        getTags(){
            if(!window.localStorage.getItem('tags')){
                return
            }else{
                // console.log(window.localStorage.getItem('tags'))
            }
          
        }
    },
    mounted(){
        this.getData()
        this.getTags()
    }
}
</script>