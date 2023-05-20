<template>
    
      
    <div>
      <Html>
        <Head>
          <Title>Products</Title>
          <Meta name="description" content="My page is cool"/>
        
          

        </Head>

      </Html>
      <div class="">
        
        <section class="   " >
<div class="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
  <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
    <div class="grid p-6   bg-secondary  rounded place-content-center sm:p-8">
      <div class="max-w-md mx-auto text-center lg:text-left">
        <header>
          <h2 class="text-4xl font-bold   ">Watches</h2>

          <p  class="mt-4 text-lg  ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
            rerum quam amet provident nulla error!
          </p>
        </header>

        <NuxtLink
          to="/cards"
          class="inline-block px-12 py-3 mt-8 text-sm font-semibold  transition rounded hover:shadow focus:outline-none focus:ring btn btn-info   "
        >
          Shop All
        </NuxtLink>
      </div>
    </div>

    <div class="lg:col-span-2 lg:py-8 p-5   bg-secondary rounded">
      <div class=" flex  justify-center items-center ">
          <Swiper
    class=" w-[90%]  h-[50%] rounded-md shadow-2xl  "
    
    :modules="[SwiperAutoplay, SwiperEffectCreative]"
    :slides-per-view="1"
    :loop="true"
    :effect="'creative'"
    :autoplay="{
      delay: 4000,
      disableOnInteraction: true
    }"

    :creative-effect="{
    prev: {
      shadow: false,
      translate: ['-20%', 0, -1],
    },
    next: {
      translate: ['100%', 0, 0],
    },
  }"
  >
    <SwiperSlide
     
      
    
      class="bg-primary shadow-2xl      text-center flex justify-center    "
    >

   <img src="@/assets/image/a1.jpg" class=" w-fit " alt="">
    
     
     
    </SwiperSlide>

    <SwiperSlide
     
      
    
     class="bg-primary shadow-2xl   rounded-md    text-center flex justify-center    "
   >

  <img src="@/assets/image/womens-clothing.png"   class=" w-fit " alt="">
     
    
    
   </SwiperSlide>

   <SwiperSlide
     
      
    
     class="bg-primary shadow-2xl   rounded-md    text-center flex justify-center    "
   >

  <img src="@/assets/image/a3.jpg"  class=" w-full " alt="">
   
    
    
   </SwiperSlide>
  </Swiper>
        </div>
        <div>
          <h2 class=" font-bold text-2xl   uppercase my-6">
            somethings else
          </h2>
          <p class=" text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Provident facilis sequi iste
            qui molestias est doloremque recusandae id 
            asperiores illo eius sunt, minus facere quis 
            cupiditate. Eveniet quisquam quibusdam nisi?
          </p>
        </div>
    </div>
  </div>
</div>
        </section>




    </div>
      <div class=" flex justify-center items-center flex-wrap  p-5  m-5 ">
        
      
        <ProductCard/>
     

         
      </div>
    </div>
   









</template>

<script setup >
import {useShoppingStore} from'@/store/products';

const useCard = useShoppingStore()


</script>

<style scoped>

</style>