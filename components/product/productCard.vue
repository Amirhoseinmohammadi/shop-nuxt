<template>
  <div 
    v-for="(product ,index) in useCard.products"
    :key="index"
    class=" m-2 shadow-2xl ">

    <div class="group relative block overflow-hidden  bg-secondary    rounded">
   
       <img
            :src="product.image"
             alt=""
             class="h-64 w-64 mx-auto  m-2  my-4   rounded-md object-cover transition duration-500 group-hover:scale-105 sm:h-72 shadow-2xl"
        />

  <div class="relative   bg-secondary p-8">
  

   <div class=" flex-col flex ">
<div class="flex gap-2">     
  

  <h3 class="   font-semibold text-xl     uppercase font-mono ">{{product.title}}</h3>
</div>
<div class="flex gap-2 items-center ">  

  <h3 class="font-semibold  ">Price:</h3>
   <p class="text-2xl  font-semibold  "><span class=" font-semibold text-green-700 ">$</span>{{product.price}}</p>
</div>
   </div>

    
<div class=" flex justify-center items-center gap-2 ">
  <button

      @click="useCard.addToCart(product)"
        class="btn  btn-accent  btn-circle rounded-full   mt-3   shadow-2xl  font-semibold transition hover:scale-105 "
      >
       <Icon name="mdi:briefcase-plus-outline" class=" w-7 h-7 text-black  " />
      </button>


      <NuxtLink
        :to="`/Store/${product.title}`"
        class="block mx-auto   btn     btn-primary   p-4 mt-3  shadow-2xl   font-semibold transition hover:scale-105"
      >
        Veiw Product
      </NuxtLink>

    <button 
    @click="useCard.addToFavorite(product)"
    class=" btn  btn-accent  btn-circle rounded-full   mt-3   shadow-2xl  font-semibold transition hover:scale-105 ">
      <Icon name="mdi:heart-plus-outline" class=" w-7 h-7 text-black   " />
      
    </button>
</div>
 
  </div>
   </div>
  </div>
</template>

<script setup  lang="ts">
import {useShoppingStore} from'@/store/products';

const useCard = useShoppingStore()

</script>

<style lang="scss" scoped>

</style>