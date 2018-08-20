<template>
    <div class="box">
        <h2>您已选择的城市</h2>
        <li v-for="(item,index) in toBox" :key='index' @click='delData(item)'>{{item.name}}</li>
    </div>
</template>
<script>
export default {
    methods:{
        delData(val){
            this.$emit('del',val)
        }
    },
    props:['toBox']
}
</script>

