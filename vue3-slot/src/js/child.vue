<template>
    <div class="wrap">  
        <h1>这是子页面,要添加到父页面中</h1>
        <p>{{message}}</p>
        <button @click='click'>按钮</button>
    </div>
</template>
<script>
import Father from './father.vue';
export default {
    props:['message'],
    methods:{
        click:function(){
            alert(11)
        }
    }
   
}
</script>

