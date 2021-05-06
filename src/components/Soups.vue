<template>
    <section :style="'background-image:url('+image+')'">
        <div class="image">
        </div>
        <div class="text">
          <h2>{{title}}</h2>
          <Icons :icons="icons"/>
          <p>{{text}}</p>
        </div>
      </section>
</template>

<script>
import Icons from '/src/components/sub-components/Icons.vue'

export default {
  components:{
    Icons
  },
  data(){
    return{
          title: 'Borscht',
          text: `Borscht is a sour soup popular in several Eastern European cuisines, including Ukrainian, Russian, Polish, Lithuanian, Belarusian, Romanian, Ashkenazi Jewish and Armenian cuisines. The variety most commonly associated with the name in English is of Ukrainian origin and includes beetroots as one of the main ingredients, which gives the dish its distinctive red color.`,
          image: 'http://pdxmag.com/wp-content/uploads/2013/12/borscht-bowl-1-2.jpg',
          icons: {
          foodInfo: ['fas fa-utensils'],
          priceInfo: ['fas fa-dollar-sign','fas fa-dollar-sign','fas fa-dollar-sign'],
          rating: ['far fa-star','far fa-star','far fa-star'],
          time: []
          }
     }
  }
}
</script>
