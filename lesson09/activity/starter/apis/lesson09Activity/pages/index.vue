<template>
  <div class="wrapper">
    <h1 class="heading">Lord of the Rings</h1>
    <!-- <h3 v-for="album of albums" :key="album.id">{{ album.title }}</h3> -->

  </div>
</template>

<script>
import Card from '~/components/Card.vue'
import axios from 'axios'
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    Card
  },
  data() {
    return {
      // albums: []
    //   loading: true,
    //   drinks: null,
    //   errored: false
    }
  },
  created (){
    // axios.get('https://jsonplaceholder.typicode.com/albums')
    // .then(function(response){
    //   console.log(data);
    //   this.albums = response.data.slice(0,10);
    // })
    // .then(response => response.json())
    // .then(json => console.log(json))
    // axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka&api_key=1')
    axios.get('https://the-one-api.herokuapp.com/v1/character&api_key=w05brxg8tvGQbD9UFjt4')
    .then(response => {
      (this.albums = response.data)
      console.log(response.data)
    })
    .catch(error => {
      console.log(error)
      this.errored = true
    })
    .finally(() => this.loading = false)
  }
}
</script>

<style>
img {
  width: 100px;
}

.card {
  margin: 1rem;
  border: 1px solid #000;
  padding: 1.5rem;
  /* &___img {
    display: block;
    margin-bottom: 1rem;
  } */
}
.container {
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
