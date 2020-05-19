<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-light bg-info p-5">
        <h1 class="name-brand">ArtSearch</h1>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link class="nav-item nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
            <router-link class="nav-item nav-link" to="/About">About</router-link>
            <router-link class="nav-item nav-link" to="/timeline">Timeline</router-link>
            <router-link class="nav-item nav-link" to="/artists">Artists</router-link>
            <router-link class="nav-item nav-link" to="/gallery">Gallery</router-link>
          </div>
        </div>
      </nav>
    </div>
    <router-view></router-view>

    <landing/>

    <footer class="bg-info mt-2 p-5">
      <h6>Thank you for visiting ArtSearch</h6>
      <p class="small">Powered by Jenny Sugden</p>
    </footer>

  </div>
</template>

<script>
import landing from './components/landing.vue'

export default {
  name: 'app',
  components: {
    landing
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
