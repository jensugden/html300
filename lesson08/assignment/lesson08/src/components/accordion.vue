<template>
    <div>
      <h1 class="display-4 mt-3">{{ message | to-uppercase }}</h1>

      <div v-for="panel in panels" :key="panel.id" class="accordion" id="artistAccordion">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h2 class="mb-0">
              <button class="btn btn-link artistLink" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                {{ panel.genre }}
              </button>
            </h2>
          </div>
        </div>
        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#artistAccordion">
          <div class="card-body">
            {{ panel.info }}
          </div>
        </div>
      </div>

    </div>
</template>

<script>
import uppercaseMixin from '../mixins/uppercaseMixin'

export default {
  name: 'accordion',
  props: ['panel'],
  data () {
    return {
      panels: [
        {genre: 'Renaissance', info: 'The intention of this accordion is to list out major artists of the designated period.'},
        {genre: 'Mannerism', info: 'Just say anything, George, say what ever is natural, the first thing that comes to your mind. Take that you mutated son-of-a-bitch. My pine, why you. You space bastard, you killed a pine. You do? Yeah, its 8:00. Hey, McFly, I thought I told you never to come in here. Well its gonna cost you. How much money you got on you?'},
        {genre: 'Baroque', info: 'Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce parsley jícama salsify.'},
        {genre: 'Rococo', info: 'Well, the way they make shows is, they make one show. That show is called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they are going to make more shows. Some pilots get picked and become television programs. Some do not, become nothing. She starred in one of the ones that became nothing.'},
      ],
      message: 'Artists'
    }
  },
  mixins: [uppercaseMixin]
}
</script>

<style>
.artistLink {
  color: rgb(253, 192, 47);
}

.message {
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.message-header {
  cursor: pointer;
}

.message-body   {
  padding: 0;
  max-height: 10em;
  overflow: hidden;
  transition: 0.3s ease all;
}

.is-closed .message-body {
  max-height: 0;
}

.message-content {
  padding: 20px;
}
</style>
