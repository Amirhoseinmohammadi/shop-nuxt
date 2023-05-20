<template> 
<div > 
  <Html>
        <Head>
          <Title>Favorite</Title>
          <Meta name="description" content="My page is cool"/>
        
          

        </Head>

      </Html>
  
    <div v-if="useCard.getCartFavorites.length"  class=" flex flex-wrap justify-center gap-4 my-10  ">
       
        <div    v-for=" item in useCard.getCartFavorites " :key="item.id">
           <div class=" flex flex-col gap-2 items-center  bg-secondary rounded-md shadow-2xl p-4">
            <img :src="item.image" class=" w-36 h-36 m-2" >
            <p class="  font-semibold">{{ item.title }}</p>
            <p class=" text-xl font-semibold">${{ item.price }}</p>
            <div class=" flex gap-2 ">

                <NuxtLink to="/cards" @click="useCard.addToCart(item)" class=" btn btn-success">By Now</NuxtLink>
                <button 
              @click="useCard.removeFavoriteCart(item)"
              class="  btn btn-error ">
                <span class="sr-only">Remove item</span>

                    <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-6 w-6"
                         >
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
               </button>
            </div>
           </div>
        </div>
    </div>

  <div v-else class=" text-center w-full  md:flex justify-center  items-center  h-[70vh]">
       
       <div class=" basis-1/2 ">
        <h1 class=" text-5xl  text-white   mx-auto  font-semibold  mt-24 ">Empty...</h1>
       </div>

       <div class=" basis-1/2">
        <img src="@/assets/image/image_processing20210830-1007-6xb9g4.gif"  class=" mt-8 mx-auto w-[80%] md:w-[70%]   rounded-2xl" alt="gif">
       </div>
  </div>
</div>  
</template>

<script setup lang="ts">

import {useShoppingStore} from'@/store/products';

const useCard = useShoppingStore()


</script>

<style scoped>

</style>