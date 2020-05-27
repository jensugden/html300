<template>
  <div>

    <images v-bind:pics="pics"></images>

  </div>
</template>

<script>
import images from '../components/images.vue'
// import image1 from "../assets/Esther_before_Ahasuerus.jpg"
// import image2 from "../assets/375px-Girl_with_Cherries.jpg"
// import image3 from "../assets/299px-Bianca_Maria_Sforza.jpg"
// import image4 from "../assets/The_Day_Dream.jpg"
// import image5 from "../assets/350px-Portrait_of_a_Lady.jpg"


export default {
  components: {
    images
  },
  data: function (){
    return {
      pics: [
        {url: require('../assets/Esther_before_Ahasuerus.jpg'), alt: 'Esther before Ahasuerus'},
        {url: require('../assets/375px-Girl_with_Cherries.jpg'), alt: 'Girl with Cherries'},
        {url: require('../assets/299px-Bianca_Maria_Sforza.jpg'), alt: 'Bianca Maria Sforza'},
        {url: require('../assets/The_Day_Dream.jpg'), alt: 'The Day Dream'},
        {url: require('../assets/350px-Portrait_of_a_Lady.jpg'), alt: 'Portrait of a Lady'},
      ]
    }
  }
}
</script>
