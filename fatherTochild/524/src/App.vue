<template>
      <div ref='wrapper'>
        <ul class='content' ref='cont'>
          <li ref='li'>热卖</li>
          <li ref='li'>热卖</li>
          <li ref='li'>热卖</li>
          <li ref='li'>热卖</li>
          <li ref='li'>热卖</li>
          <li>热卖</li>
          <li>热卖</li>
          <li>热卖</li>
          <li>热卖</li>
          <li>热卖</li>
          <li>热卖</li>
          <li>热卖</li>
          <li>热卖</li>
          <li>热卖</li>
        </ul>
      </div>
</template>
<style>
*{
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-size:.14rem;
}
html,body{
  width: 100%;
  height: 100%;
}
div{
  width: 100%;
  height: .4rem;
  overflow: hidden;
}
.content{
  height: .4rem;
  line-height: .4rem;
  width: 11.2rem;
}
.content>li{
  float:left;
  width: .8rem;
  text-align: center;
}
</style>

<script>
import BScroll from 'better-scroll';
export default {
    mounted(){
      this.$nextTick(()=>{
        this.scroll=new BScroll(this.$refs.wrapper,{
          scrollX:true,
          scrollY:false
        })
      });
     let lis= this.$refs.cont.children;
     let w=0;
     for(let i=0;i<lis.length;i++){
        w+=lis[i].offsetWidth
     }
     console.log(w)
    }
}
</script>

