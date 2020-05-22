<template>
  <div >
    <landing/>

    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import landing from '../components/landing.vue'

export default {
  name: 'app',
  components: {
    landing
  }
}
</script>
