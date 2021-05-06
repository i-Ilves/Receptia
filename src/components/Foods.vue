<template>
<div>
    <section v-for="food in foods" :key="food.title" :style="'background-image:url('+food.image+')'">
        <div class="image">
        </div>
        <div class="text">
          <h2>{{food.title}}</h2>
          <Icons :icons="food.icons"/>
          <p>{{food.text}}</p>
        </div>
      </section>
</div>
</template>

<script>
import Icons from '/src/components/sub-components/Icons.vue'

export default {
  components:{
    Icons
  },
  computed:{
    foods(){
      return this.$store.state.foods[this.$route.params.category]
    }
  }

}
</script>
