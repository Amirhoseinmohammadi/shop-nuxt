<template>
    <div   >
      <Html>
        <Head>
          <Title>Shop</Title>
          <Meta name="description" content="My page is cool"/>
        
          

        </Head>

      </Html>
 

    
   <div
    class="  ">
    <div class=" md:flex justify-center   p-6">
        <div
      
         class="  basis-1/2 space-y-6 p-10  mx-auto   flex flex-col justify-center items-center gap-5"> 
           <h1 class=" text-5xl font-semibold uppercase"><span class=" text-accent ">Wellcome</span> to Shop</h1>
           <p class="    font-normal text-2xl  text-white/75">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Delectus recusandae in corrupti. Porro corporis laudantium 
            perferendis necessitatibus voluptatem! Architecto quisquam 
            sapiente iusto officiis dignissimos 
            maxime fugit deserunt reiciendis sed optio?
            </p>

          
        </div>
        <div class=" basis-1/2">
        
          <div class=" flex  justify-center items-center ">
            <Swiper
      class=" w-[200px] md:w-[400px]     "
      
      :modules="[SwiperAutoplay, SwiperEffectCards]"
      :slides-per-view="1"
      :loop="true"
      :effect="'cards'"
      :autoplay="{
        delay: 4000,
        disableOnInteraction: true
      }"
    >
      <SwiperSlide
        v-for=" (product, index) in useCard.products"
        
        :key="index"
        class="  bg-secondary  shadow-2xl   rounded-md    text-center flex justify-center    "
      >

     
        <div class=" flex  flex-col gap-3 ">
          <img :src="product.image" class="  mt-3  w-64     shadow-2xl  mx-auto transition duration-500 hover:scale-105 ">
          <h2 class="   font-semibold p-2 text-xl">{{ product.title }}</h2>
        <h2  class="  font-semibold text-2xl   "><span class=""> $</span> {{ product.price }}</h2>
        <NuxtLink to="/cards" @click="useCard.addToCart(product)" class=" btn btn-accent  w-34 mx-auto mb-2 ">by now ...</NuxtLink>
        </div>
       
       
      </SwiperSlide>
    </Swiper>
          </div>
        </div>
        
        

    </div>
   </div>


   <section class="p-5 ">
  <div  
  data-aos="fade-down"
      data-aos-easing="linear"
       data-aos-duration="900"        
        
  class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8" >
    <header class="text-center text-white/75">
      <h2 class="text-xl font-bold sm:text-3xl">
        New Collection
      </h2>

      <p class="max-w-md mx-auto mt-4 ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
        praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
        natus?
      </p>
    </header>

    <ul class="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
      <li class=" shadow-2xl">
        <a href="#" class="relative block group">
          <img
            src="../assets/image/h1.jpg"
            alt=""
            class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-100 opacity-80"
          />

          <div
            class="absolute inset-0 flex flex-col items-start justify-end p-6"
          >

            <button
              class="mt-1.5 inline-block  font-medium uppercase tracking-wide  btn btn-accent"
            >
              Shop  now
            </button>
            
          </div>
        </a>
      </li>

      <li class=" shadow-2xl">
        <a href="#" class="relative block group">
          <img
            src="../assets/image/h2.jpg"
            alt=""
            class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-100 opacity-80"
          />

          <div
            class="absolute inset-0 flex flex-col items-start justify-end p-6"
          >

            <button
              class="mt-1.5 inline-block btn btn-accent  font-medium uppercase tracking-wide "
            >
              Shop Now
            </button>
          </div>
        </a>
      </li>

      <li class="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1 shadow-2xl">
        <a href="#" class="relative block group">
          <img
          src="../assets/image/womens-clothing.png"            alt=""
            class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-100 opacity-80"
          />

          <div
            class="absolute inset-0 flex flex-col items-start justify-end p-6"
          >

            <button
              class="mt-1.5 inline-block btn btn-accent  font-medium uppercase tracking-wide "
            >
              Shop Now
            </button>
          </div>
        </a>
      </li>
    </ul>
  </div>
</section>


   </div>
</template>

<script setup>
import {useShoppingStore} from'@/store/products';

const useCard = useShoppingStore()
 



</script>

<style>






</style>