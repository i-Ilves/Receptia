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
          title: 'Blueberry pie',
          text: `Blueberry pie is a pie with a blueberry filling. Blueberry pie is considered one of the easiest pies to make because it does not require pitting or peeling of fruit. It usually has a top and bottom crust. The top crust can be a circular crust but the pie can also have a crumble crust or no top crust at all. Blueberry pies are often eaten in the summertime because that is when blueberries are in season.`,
          image: 'https://images.unsplash.com/photo-1490323948794-cc6dde6e8f5b?ixlib=rb-0.3.5&s=0156b72692625eb21ab8e23d54bd37ec&auto=format&w=1024&q=80',
          icons: {
          foodInfo: ['fas fa-stroopwafel', 'fas fa-utensils'],
          priceInfo: ['fas fa-dollar-sign', 'fas fa-dollar-sign'],
          rating: ['far fa-star', 'far fa-star', 'far fa-star'],
          time: []
          }    
    }
  }
}
</script>
