<template>
  <div id="app">
      <header>
        <i class="icon iconfont icon-xiangzuo"></i>
        <li>Miss</li>
        <i class="icon iconfont icon-fangdajing"></i>
      </header>
      <section>
        <router-view/> 
      </section>
      <footer>
        <router-link to="/">
           <i class="icon iconfont icon-fangdajing"></i>
           <span>首页</span>
        </router-link>
        <router-link to="/vip">
           <i class="icon iconfont icon-fangdajing"></i>
           <span>vip</span>
        </router-link>
       <router-link to="/shopping">
           <i class="icon iconfont icon-fangdajing"></i>
           <span>购物车</span>
       </router-link>
       <router-link to="/my">
           <i class="icon iconfont icon-fangdajing"></i>
           <span>我的</span>
       </router-link>
      </footer>
      
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>



