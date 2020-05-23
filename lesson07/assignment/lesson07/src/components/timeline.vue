<template>
    <div>
      <h1 class="display-4 mt-3">Timeline</h1>
      <div class="container-fluid">
        <div class="row bg-info text-white lead">
          <div class="col-xs-1 col-sm-1 col-md-1 col-lg-2">
            Years
          </div>
          <div class="col-xs-1 col-sm-1 col-md-2 col-lg-2">
            Genre Name
          </div>
          <div class="col-xs-1 col-sm-1 col-md col-lg">
            Description
          </div>
        </div>
      </div>

      <!-- <div class="row pt-2 pb-2 bg-light">
        <div v-for="era in eras" :key="era.year" class="col-xs-1 col-sm-1 col-md-1 col-lg-2">
          {{eras.year}}
        </div>
        <div v-for="era in eras" :key="era.genre" class="col-xs-1 col-sm-1 col-md-2 col-lg-2">
          {{eras.genre}}
        </div>
        <div v-for="era in eras" :key="era.descrip" class="col-xs-1 col-sm-1 col-md col-lg">
          {{eras.descrip}}
        </div>
      </div> -->

      <!-- <div id="test">
        <li v-for="item in items" :key="item.message">
          {{ item.message }}
        </li>
      </div> -->
      <ul>
        <li v-for="{person, index} in persons" :key="index">
          {{person.name}}
          {{person.age}}
          {{person.color}}
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'timeline',
  data () {
    persons:[
      {name: 'jenny', age: '45', color: 'yellow'},
      {name: 'jones', age: '43', color: 'blue'}
    ]
    // return {
    //   eras: [
    //     {year: '1400-1600', genre: 'Renaissance', descrip: 'Natural elements, individualism, realism, attention-to-detail, precision of human anatomy'},
    //     {year: '1527-1580', genre: 'Mannerism', descrip: 'Stylized features, exaggerated details, decorative elements'}
    //   ]
    // }
  }
}

// new Vue({
//   el: '#test',
//   data: {
//     items: [
//       {message: 'foo'},
//       {message: 'bar'}
//     ]
//   }
// })
</script>
