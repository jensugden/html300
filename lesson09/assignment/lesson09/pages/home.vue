<template>
  <div >
    <search>
      <div slot="search-text">
        <input type="text" placeholder="search"/>
        <p>Search for artist name</p>
      </div>
      <div slot="search-button">
        <button class="mb-5 btn-lg btn-warning" type="submit" >Search</button>
      </div>
    </search>

    <div>
      <p v-for="record in records" :key="record.id" v-text="record.century"></p>
    </div>
    <!-- <div v-for="record of records" :key="record.id">{{ record.title }}</div> -->
    <!-- <div class="container"> -->
      <!-- <searchCard v-for="object of objects" :key="object.id"/> -->
    <!-- </div> -->
  </div>
</template>

<script>
import search from '~/components/search.vue'
import searchCard from '~/components/search-card.vue'
import axios from 'axios'

export default {
  name: 'app',
  components: {
   search, searchCard
  },
  
  data() {
    return {
    records: [],
    }
  },
  // data() {
  //   return {
  //     records: [],
  //     loading: true,
  //     objects: null,
  //     errored: false
  //   }
  // },

  mounted () {
    axios.get('https://api.harvardartmuseums.org/object/?apikey=506c1dd0-a5c3-11ea-bd1f-99670da43555')
    // axios.get('https://collectionapi.metmuseum.org/public/collection/v1/objects')
    // axios.get('https://trefle.io/api/plants?token=cDBjQkt6cG9KZXQ0ay9tRU44clBUUT09')
    .then(response => (this.records = response.data))
    .catch(error => {
      console.log(error)
      this.errored = true
    })
    .finally(() => this.loading = false)
  },


}
</script>

<style scoped>
img {
  width: 100px;
}

.card {
  margin: 1rem;
  border: 1px solid #000;
  padding: 1.5rem;
  &___img {
    display: block;
    margin-bottom: 1rem;
  }
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
