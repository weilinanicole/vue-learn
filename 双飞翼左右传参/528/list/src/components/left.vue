<template>
    <div class="leftList">
        <li v-for="(item,index) in datas" :key='index'>{{item.tags}}</li>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    props:{
        datas:''
    }
}
</script>
