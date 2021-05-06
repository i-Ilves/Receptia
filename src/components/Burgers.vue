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
    return {
          title: 'Not a burger',
          text: `This vegetarian, vegan and gluten-free mushroom burger recipe may just surprise you with how tasty it is. While mushrooms provide plenty of flavor and texture, the addition of pinto beans makes this veggie burger recipe high in fiber and protein too. There's not much to them, other than that! Just mash everything up together, form into patties, heat and serve!`,
          image: 'https://images.unsplash.com/photo-1532768641073-503a250f9754?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bceece29b062fe6d758ddfa2400c554c&auto=format&w=1024&q=80',
          icons: {
            foodInfo: ['fas fa-apple-alt','fas fa-utensils'],
            priceInfo: ['fas fa-dollar-sign'],
            rating: ['far fa-star'],
            time: ['far fa-clock']
          }
    }
  }
}
</script>
