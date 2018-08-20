<template>
  <div id="app">
    <Header/>
    <section/>
    <Footer/>
  </div>
</template>

<script>
import '../src/css/style.css'
import Header from './components/head.vue'
import Section from './components/section.vue'
import Footer from './components/footer.vue'
export default {
  name: 'App',
  components:{
    Footer,
    Header,
    Section
  }
}
</script>

<style>
</style>
