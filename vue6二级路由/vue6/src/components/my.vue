<template>
<div>
    <h1>我是我的页面</h1>
    <!-- <router-link :to='{path:"/my/read",query:{x:1,y:2}}'>去已读消息页</router-link>
    <router-link :to='{path:"/my/unread",query:{x:3,y:4}}'>去未读消息页</router-link> -->
    <button @click='goRead'>去已读页面</button>
    <button @click='goUnread'>去未读页面</button>
    <router-view></router-view>
</div>
   
</template>
<script>
export default {
    mounted:function(){
        console.log(this.$route)
    },
    methods:{
        goRead:function(){
            this.$router.push({path:'/my/read',query:{x:1,y:2}})
        },
        goUnread:function(){
            this.$router.push({name:'unread',params:{a:3,b:4}})
        }
    }
}
</script>

