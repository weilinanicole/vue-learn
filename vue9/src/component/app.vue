<template>
    <div class="wrap">
        用户名<input type="text" v-model.lazy="userName"><br>
        密码<input type="password" v-model.lazy="userPwd"><br>
        <button @click="getData">提交</button>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            userName:'',
            userPwd:''
        }
    },
    watch:{
        userName:function(v){
            this.userName=v
         
        },
        userPwd:function(v){
            this.userPwd=v
           
        }
    },
    methods:{
        getData(){
            axios.get('/login',{
                params:{
                    userName:this.userName,
                    userPwd:this.userPwd
                }
            })
            .then((response)=>{
                if(response.data.code==1){
                    alert(response.data.msg)
                }else{
                    alert(response.data.msg)
                }
                
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }
}
</script>

