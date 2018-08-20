<template>
  <div id="app">
    <header>
      <li>11</li>
      <li>11</li>
      <li>11</li>
    </header>
    <section>
      <router-view></router-view>
    </section>
    <footer>
      <router-link to="/">one</router-link>
      <router-link to="/two">two</router-link>
      <router-link to="/three">three</router-link>
      <router-link to="/four">four</router-link>
    </footer>
    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
