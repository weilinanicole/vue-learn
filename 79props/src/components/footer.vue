<template>
    <footer>
        <router-link to="/home" @click="click('Home')" tag="li">Home</router-link>
        <router-link to="/demo" @click="click('Demo')" tag="li">Demo</router-link>
    </footer>
</template>

<script>
export default {
    methods:{
        click(val){
            console.log(val)
        }
    }
    ,
    mounted(){
        this.click()
    }
}
</script>

<style scoped>
footer{
    width: 100%;
    height: .5rem;
    display: flex;
    align-items: center;
    border-top:1px solid #eee;
}
li{
    flex:1;
    text-align: center;
}
</style>
