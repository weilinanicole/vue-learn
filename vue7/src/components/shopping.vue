<template>
    <h1>购物车页</h1>
</template>
<script>
import Dispatch from '../js/dispatch.js'
export default {
    mounted(){
        Dispatch.on(this,'pass',res=>{
            console.log(res)
        });

    }
}
</script>