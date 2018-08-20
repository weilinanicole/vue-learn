<template>
  <div id="app">
        <router-view/>
        <Foot/>
    </div>
</template>

<script>
import Foot from './components/footer.vue';
export default {
  name: 'App',
  components:{
    Foot
  }
}
</script>
