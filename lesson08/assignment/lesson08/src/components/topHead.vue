<template>
  <div>
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
  </div>
</template>
