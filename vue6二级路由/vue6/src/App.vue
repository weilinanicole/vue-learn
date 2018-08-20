<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <transition name='on'>
       <router-view/>
    </transition>
  
    <router-link to='/'>我是主页</router-link>
    <router-link to='/message'>我是消息</router-link>
    <router-link to='/shopping'>我是购物页</router-link>
    <router-link to='/my'>我是我的</router-link>
  </div>
</template>

<script>
import child from './components/my.vue'
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.on-enter-active,.on-enter-active{
  transition: all 3s ease-in
}
.on-leave{
  opacity: 1;
  transform: translate3d(0,0,0)
}

.on-leave-to{
  opacity: 0;
  transform: translate3d(0,-100%,0)
}
.on-enter{
   opacity: 0;
  transform: translate3d(0,100%,0)
}
.on-enter-to{
   opacity: 1;
  transform: translate3d(0,0,0)
}
</style>
