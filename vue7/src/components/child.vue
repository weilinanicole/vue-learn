<template>
    <h2>这是子页面</h2>
</template>

<script>
export default {
    mounted(){
        console.log(this.$route.query)
    }
}
</script>

<style>

</style>
