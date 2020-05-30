<template>
    <div class="layout container-fluid">

      <h1 class="display-4 mt-3">{{ message | to-uppercase }}</h1>


        <div class="align row bg-info text-white lead">
          <div class="col-xs-1 col-sm-1 col-md-1 col-lg-2">
            Years
          </div>
          <div class="col-xs-1 col-sm-1 col-md-2 col-lg-2">
            Genre
          </div>
          <div class="col-xs-1 col-sm-1 col-md col-lg">
            Description
          </div>
        </div>

        <div class=" align row"  v-for="era in eras" :key="era.id" >
          <div class="col-xs-1 col-sm-1 col-md-1 col-lg-2">
            {{ era.year }}
          </div>

          <div class="col-xs-1 col-sm-1 col-md-2 col-lg-2">
            {{ era.genre }}
          </div>

          <div class="col-xs-1 col-sm-1 col-md col-lg">
            {{ era.descrip }}
          </div>
        </div>

    </div>
</template>

<script>
import uppercaseMixin from '../mixins/uppercaseMixin'

export default {
  name: 'timeline',
  props: ['era'],
  data () {
    return {
      eras: [
        {year: '1400-1600', genre: 'Renaissance', descrip: 'Natural elements, individualism, realism, attention-to-detail, precision of human anatomy'},
        {year: '1527-1580', genre: 'Mannerism', descrip: 'Stylized features, exaggerated details, decorative elements'},
        {year: '1400-1600', genre: 'Renaissance', descrip: 'Natural elements, individualism, realism, attention-to-detail, precision of human anatomy'},
        {year: '1527-1580', genre: 'Mannerism', descrip: 'Stylized features, exaggerated details, decorative elements'}
      ],
      message: 'Timeline'
    }
  },
  mixins: [uppercaseMixin]
}
</script>

<style>
.align {
  text-align: left;
}

.layout {
  margin: 2rem;
}
</style>
