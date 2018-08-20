<template>
    <header>
        <Left/>
        <slot name='center'></slot>
        <Right/>
    </header>
</template>

<script>
import Left from '../views/header/left.vue'
import Right from '../views/header/right.vue'
export default {
    components:{
        Left,
        Right
    }
}
</script>

<style scoped lang='css'>
header{
    width: 100%;
    height: .6rem;
    border-bottom:1px solid #eee;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:0 .1rem;
}
</style>
