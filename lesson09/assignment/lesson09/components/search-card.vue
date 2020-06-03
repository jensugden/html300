<template>
  <article class="card">
    <!-- <img :src="object.primaryImageSmall" :alt="object.objectName" class="card___img"> -->
    <!-- <h2 class="card___title">{{ object.culture }}</h2> -->
    <!-- <p class="card___copy">{{ object.artistDisplayName }}</p>
    <p class="card___copy">{{ object.artistDisplayBio }}</p>
    <p class="card___copy">{{ object.artistNationality }}</p>
    <p class="card___copy">{{ object.artistBeginDate }} + '-' + {{ object.artistEndDate }}</p>
    <p class="card___copy">{{ object.objectDate }}</p>
    <p class="card___copy">{{ object.medium }}</p>
    <p class="card___copy">{{ object.country }} + ', ' + {{ object.region }}</p>
    <p class="card___copy">{{ object.creditLine }}</p>
    <p class="card___copy">{{ object.isPublicDomain }}</p>
    <p class="card___copy">{{ object.linkResource }}</p> -->
  </article>
</template>


<script>
  export default {
    name: 'searchCard',
    props: {
      object: Array
    }
  }
</script>
