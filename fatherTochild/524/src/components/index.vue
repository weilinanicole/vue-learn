<template>
     <ul>
            <img :src="img" alt="">
            <li>
                <span>{{message}}</span>
                <div class="littlebox">
                    <img :src="exp" v-if='exp'>
                    <span v-if="news">{{news}}</span>
                    <i class="icon iconfont icon-youjiantou-01"></i>
                </div>
                
            </li>
     </ul>
</template>
<script>
export default {
    props:['img','message','exp','news']
}
</script>


