<template>
  <div id="app">

    <topHead></topHead>

    <router-view></router-view>

    <bottom></bottom>

  </div>
</template>

<script>
import topHead from './components/topHead.vue'
import bottom from './components/bottom.vue'

export default {
  name: 'app',
  components: {
    topHead,
    bottom
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
