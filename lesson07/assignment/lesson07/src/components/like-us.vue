<template>
    <div class="layout container-fluid">

      <h1 class="display-4 mt-3">Like Us!</h1>

      <button v-if="likedUs">Like Us</button>
      <button v-else>Don't Like Us</button>


    </div>
</template>

<script>
export default {
  name: 'likeUs',
  props: ['like'],
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
