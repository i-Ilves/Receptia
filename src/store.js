import { createStore } from "vuex" 

const store = createStore({
   state:{
      foods:{
         burgers:[
            {
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
         ],
         soups: [
            {
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
         ],
         desserts: [
            {
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
         ],
      }
        
   },
   mutations:{

   },
   actions:{

   }
})

export default store