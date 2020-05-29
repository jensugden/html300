<template>
    <div class="layout container-fluid">

      <h1 class="display-4 mt-3" v-if="show">Like Us!</h1>
      <h1 class="display-4 mt-3" v-else>Thanks!</h1>
      <button class="btn-lg btn-success mb-3" v-on:click="show = !show">Click Here</button>



    </div>
</template>

<script>
export default {
  name: 'likeUs',
  props: ['like'],
  data (){
    return {
      show: true,
    }
  }
}
</script>

<style>

</style>
