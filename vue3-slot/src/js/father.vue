<template>
   <div class="wrap">
        <h1>这是父页面</h1>
        <child :message=data></child>
   </div>
</template>


<script>
import child from './child.vue'
export default {
    data:function(){
        return{
            data:'cmy'
        }
    },
    components:{
       child
    }
}
</script>

