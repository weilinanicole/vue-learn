<template>
   <div class="wrap">
        <form>
            用户名：<input type="text" id='username' v-model="userL"><br>
            密码：<input type="password" id='userpwd' v-model="pwdL"><br>
            <input type="checkbox" id='check' v-model="isCheck">
            <button @click="click" type='button'>点击</button>
        </form>
   </div>
</template>
<script>
import axios from 'axios';
export default {
    data:function(){
        return {
            userL:'',//v-model声明
            pwdL:'',//v-model声明
            isCheck:'',//v-model声明
            name:'',
            pwd:''
        }
    },
     watch:{
        userL:function(v){
            this.name=v;
        },
        pwdL:function(v){
             this.pwd=v;
        },
        isCheck:function(v){
            if(v==true){
               localStorage.user=this.name;
               localStorage.pwd=this.pwd
            }
        }
    },
    methods:{
        click:function(){
            axios.get('/login',{
                params:{
                    name:this.name,
                    pwd:this.pwd
                }
            })
            .then(function(response){
                if(response.data.code!==1){
                    alert(response.data.msg);
                }
                else{
                    alert('登陆成功')
                }
            }).catch(function(err){
                console.log(err)
            })
        },
        getData:function(){
            if(localStorage.getItem('pwd')&&localStorage.getItem('user')){
            var name1=document.getElementById('username');
            var pwd1=document.getElementById('userpwd');
            console.log(name1,pwd1);
            name1.value=localStorage.getItem('pwd');
            pwd1.value=localStorage.getItem('user');
            }
        }
    },
    mounted:function(){
        this.getData()        
    }
}
</script>

