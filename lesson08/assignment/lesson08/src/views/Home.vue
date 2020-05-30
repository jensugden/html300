<template>
  <div >
    <register>
      <div slot="search-text">
        <input type="text" placeholder="search"/>
        <p>Search for artist name, genre, or year.</p>
      </div>
      <div slot="search-button">
        <button class="mb-5 btn-lg btn-warning" type="submit" >Search</button>
      </div>

    </register>
    <landing/>

  </div>
</template>

<script>
import landing from '../components/landing.vue'
import register from '../components/register.vue'

export default {
  name: 'app',
  components: {
    landing, register
  }
}
</script>
