<template>
    <div class="left">
        <li v-for="(item,index) in leftList" @click="click(item)" :key='index'>{{item.items}}</li>
    </div>
</template>
<script>
export default {
    props:{
        leftList:'',
        callback:''
    },
    methods:{
        click(item){
            this.callback(item)
        }
    },
    mounted(){
        console.log()
    }
}

</script>
<style scoped>
    li{
        height:.6rem;
        line-height: .6rem;
        text-align: center;
    }
</style>

