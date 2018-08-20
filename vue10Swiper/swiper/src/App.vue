<template>
  <div id="app">
    <header>
      <li><i class="icon iconfont icon-xiangzuo"></i></li>
      <li>分类</li>
      <li></li>
    </header>
    <section>
        <div class="box">
           <Left @leftChild='toFather'/>
           <Right :toRight='ind' />
        </div>
        
    </section>
  </div>
</template>

<script>
import Left from './components/left.vue'
import Right from './components/right.vue'
import axios from 'axios'
export default {
  name: 'App',
  data(){
    return {
      ind:'',
      toRight:''
    }
  },
  methods:{
    toFather({id}){
      this.ind=id;
    }
  },
  components:{
    Left,
    Right
  }
}
</script>


