<template>
    <div>
      <h1 class="display-4 mt-3" >{{ message | to-uppercase }}</h1>

      <div class="flex " >
        <img class="color apply img-thumbnail img-fluid"
          v-for="pic in pics"
          :key="pic.id"
          :src="pic.url"
          :alt="pic.alt"
          :class="[isActive ? 'gray' : 'blue']"
          @click="toggleClass()"/>
      </div>

    </div>
</template>

<script>
import toggleMixin from '../mixins/toggleMixin'
import uppercaseMixin from '../mixins/uppercaseMixin'

export default {
  props: {
    pics: {
      type: Array,
      required: true,
    }
  },
  data(){
    return {
      message: 'Gallery'
    }
  },
  mixins: [toggleMixin, uppercaseMixin]
}
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

img {
  height: 300px;
  margin: .25rem;
}

.gray {
  border: 2px solid gray;
}

.blue {
  border: 2px solid blue;
}

/* .color {
  border: 2px solid gray;
} */
</style>
