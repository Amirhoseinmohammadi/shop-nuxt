<template>
    <div>
        <Html>
        <Head>
          <Title> Product | {{product?.title  }}</Title>
          <Meta name="description" content="My page is cool"/>
        
          

        </Head>

      </Html>
     
        
     <div class=" flex    flex-col justify-center items-center gap-4 bg-secondary md:w-1/2  md:mx-auto mx-2  p-2 my-3 shadow-md">

        <div class=" flex justify-end w-full "> 
            <NuxtLink class=" btn  btn-accent  my-2 rounded-md  shadow-2xl  font-semibold transition hover:scale-105" to="/Store">       <Icon name="material-symbols:arrow-back-ios-rounded" class=" w-6 h-6 " /> <span class=" ">Back to shop </span>   </NuxtLink>
        </div>
        <div>
            <img :src="product?.image" alt="productImage" class=" w-full rounded-md mt-16  shadow-2xl hover:scale-105 transition-all duration-500">
        </div>
        <div class=" flex flex-col justify-center items-center ">
            <h2 class=" mx-7 font-mono text-[2rem] uppercase">{{ product?.title }}</h2>
            <div class=" p-10 flex flex-col justify-center items-start">
                <span class="  font-bold mx-4  my-3 text-xl">Detals : </span>
            <p class=" mx-4  font-extralight text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Reiciendis similique, aliquid fuga maxime alias adipisci magnam necessitatibus, 
            laboriosam, exercitationem iusto tenetur saepe? Expedita sit est ipsum, odio nobis reprehenderit laudantium.</p>
            <h1 class=" font-bold text-[2rem]   mx-auto "><span class=" ">$</span>{{ product?.price }}</h1>
            </div>
        </div>
        <div>
            <NuxtLink @click="useCard.addToCart(product)" to="/cards" class=" btn  btn-info   my-2  shadow-2xl  font-semibold transition hover:scale-105 rounded-md ">by now ...</NuxtLink>
        </div>
     </div>
   
    </div>
</template>

<script setup lang="ts">
import {useShoppingStore} from'@/store/products';
import { useMeta } from '@nuxtjs/composition-api';
const route = useRoute();
const useCard = useShoppingStore();
const current = route.params.title
const product = useCard.products.find((p) => p.title === current )


</script>

<style >

</style>