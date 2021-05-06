<template>
<div class="icons">
  <div v-for="(icon, index) in icons.foodInfo" :key="index">
      <i :class="icon"></i>
         </div>
  <div v-for="(icon, index) in icons.priceInfo" :key="index">
      <i :class="icon"></i>
          </div>
  <div v-for="(icon, index) in icons.rating" :key="index">
      <i :class="icon"></i>
        </div>
  <div v-for="(icon, index) in icons.time" :key="index">
      <i :class="icon"></i>
  </div>
   </div> 
</template>

<script>
export default{
  props:['icons']
}
</script>


