<template>
  <div>
    <register>
      <div slot="search-text">
        <input type="text" placeholder="search"/>
        <p>Search for artist name, genre, or year.</p>
      </div>
      <div slot="search-button">
        <button class="mb-5 btn-lg btn-warning" type="submit" >Search</button>
      </div>
      <div class="background" slot="form-header">
        <h3>Sign-Up For Our Newsletter</h3>
        <p>Want to learn more about artists, genres, and art research? Sign-up for our monthly newsletter. We promise we won't inundate your inbox!</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required/>
        <input type="email" placeholder="email" required/>
      </div>
      <div slot="form-controls">
        <button class="mb-5 btn-lg btn-warning" type="submit" >Submit</button>
      </div>

    </register>

    <likeUs/>
  </div>
</template>

<script>
import likeUs from '../components/like-us.vue'
import register from '../components/register.vue'

export default {
  name: 'app',
  components: {
    likeUs, register
  }
}
</script>

<style scope>
input {
  border-radius: 5px;
  margin: 15px;
  width: 300px;
}

.background {
  background-color: rgba(0, 0, 0, 0.10);
  padding: 1.5rem;
  margin: 2rem;
}

</style>
