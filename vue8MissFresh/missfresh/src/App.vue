<template>
  <div id="app">
    <router-view/>
    <vFoot></vFoot>
  </div>
</template>

<script>
import vFoot from './components/footer.vue'
export default {
  name: 'App',
  components:{
    vFoot
  }
}
</script>

<style>

</style>
