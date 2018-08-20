<template>
    <div class="wrap">
        <name>
            <!-- <template slot='cmy'> -->
                <h1>这是子页面</h1>
            <!-- </template> -->
        </name>
    </div>
</template>
<script>
// import Father from './father.vue';
export default {
    data:function(){
        return {
            name:'子cmy',
            status:'子happy'
        }
    },
    components:{
        name:Father
    }
}
</script>

