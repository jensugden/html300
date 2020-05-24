<template>
    <div>
      <h1 class="display-4 mt-3">Gallery</h1>

      <div>
        <div class="flex">
          <img class="img-thumbnail img-fluid" :src="image1" alt="Esther before Ahasuerus"/>
          <img class="img-thumbnail img-fluid" :src="image2" alt="Girl with Cherries"/>
          <img class="img-thumbnail img-fluid" :src="image3" alt="Bianca Maria Sforza"/>
          <img class="img-thumbnail img-fluid" :src="image4" alt="The Day Dream"/>
          <img class="img-thumbnail img-fluid" :src="image5" alt="Portrait of a Lady"/>
      </div>
    </div>
    </div>
</template>

<script>
import image1 from "../assets/Esther_before_Ahasuerus.jpg"
import image2 from "../assets/375px-Girl_with_Cherries.jpg"
import image3 from "../assets/299px-Bianca_Maria_Sforza.jpg"
import image4 from "../assets/The_Day_Dream.jpg"
import image5 from "../assets/350px-Portrait_of_a_Lady.jpg"

export default {
  data: function (){
    return {
      image1: image1,
      image2: image2,
      image3: image3,
      image4: image4,
      image5: image5
    }
  }
}
</script>

<style>
.flex {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

img {
  margin: .25rem;
}
</style>
