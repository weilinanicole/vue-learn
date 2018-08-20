<template>
    <header class="header">
        <a href="#"><</a>
        <span>分类</span>
    </header>
</template>

<script>
export default {

}
</script>

<style scoped>
.header{
    width:100%;
    display: flex;
    padding:0 10px;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #ccc;
}
.header a{
    color:#000;
}
.header span{
    flex:1;
    text-align: center;
}
</style>
