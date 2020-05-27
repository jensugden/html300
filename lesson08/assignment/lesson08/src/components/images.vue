<template>
    <div>
      <h1 class="display-4 mt-3">Gallery</h1>

      <div class="flex" >
        <img class="img-thumbnail img-fluid" v-for="pic in pics" :key="pic.id" :src="pic.url" :alt="pic.alt"/>
      </div>

    </div>
</template>

<script>
import toggleMixin from '../mixins/toggleMixin'

export default {
  props: {
    pics: {
      type: Array,
      required: true,
    }
  },
  mixins: [toggleMixin]
}
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

img {
  margin: .25rem;
}
</style>
