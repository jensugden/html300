<template>
  <article class="card">
    <img :src="country.primaryImageSmall" :alt="country.objectName" class="card___img">
    <h2 class="card___title">{{ country.title }}</h2>
    <p class="card___copy">{{ country.artistDisplayName }}</p>
    <p class="card___copy">{{ country.artistDisplayBio }}</p>
    <p class="card___copy">{{ country.artistNationality }}</p>
    <p class="card___copy">{{ country.artistBeginDate }} + '-' + {{ country.artistEndDate }}</p>
    <p class="card___copy">{{ country.object.Date }}</p>
    <p class="card___copy">{{ country.medium }}</p>
    <p class="card___copy">{{ country.country }} + ', ' + {{ country.region }}</p>
    <p class="card___copy">{{ country.creditLine }}</p>
    <p class="card___copy">{{ country.isPublicDomain }}</p>
    <p class="card___copy">{{ country.linkResource }}</p>
  </article>
</template>


<script>
  export default {
    props: {
      country: Object
    }
  }
</script>
