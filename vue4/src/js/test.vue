<template>
    <div>
        <input type="text" v-model.lazy.trim='userName'>
        <input type="password" v-model.number.lazy='userPwd'>
    </div>
</template>
<script>
export default {
    data(){
        return {
            userName:'',
            userPwd:''
        }
    },
    watch:{
        userName(v){
            this.userName=v;
            // console.log(this.userName)
        },
        userPwd(v){
            this.userPwd=v;
            // console.log(this.userPwd,typeof this.userPwd)
        }
    }
}
</script>

