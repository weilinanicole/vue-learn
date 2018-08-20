<template>
  <div id="app">
    <header>
      <li><i class="icon iconfont icon-xiangzuo"></i></li>
      <li>分类</li>
      <li></li>
    </header>
    <section>
      <left @left='left'/>
      <right/>
    </section>
  </div>
</template>

<script>
import left from './components/letf.vue'
import right from './components/right.vue'
export default {
  name: 'App',
  components:{
     left,
     right
  },
  methods:{
    left({tags}){
      console.log(tags)
    }
  }
}
</script>

