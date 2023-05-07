<template>
  


<div class="flex flex-wrap place-items-center  ">
  <section class="relative mx-auto">
      <!-- navbar -->
    <nav class="flex justify-between bg-primary text-white/75 w-screen">
      <div class="px-5 xl:px-12 py-4 flex w-full items-center">
        <a class="text-3xl font-bold font-heading" href="#">
          <!-- <img class="h-9" src="logo.png" alt="logo"> -->
          Logo Here.
        </a>
        <!-- Nav Links -->
        <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
          <li><NuxtLink to="/" class="hover:text-gray-200">Home</NuxtLink></li>
          <li><NuxtLink to="/Store"  class="hover:text-gray-200" >Products</NuxtLink></li>
          <li><NuxtLink to="/about" class="hover:text-gray-200" >About us</NuxtLink></li>
          <li><NuxtLink to="/login" class="hover:text-gray-200" >Profile</NuxtLink></li>
        </ul>
        <!-- Header Icons -->
        <div class="  ml-auto flex  space-x-5 items-center">
          <NuxtLink to="/favorite" class="hover:text-gray-200">
            <svg  xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>

            <span v-if="useCard.cartFavorite.length"  class="flex absolute -mt-7 ml-4">
              <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500 text-center">
                 
                </span>
              </span>
          </NuxtLink>
          <NuxtLink to="/cards" class="flex items-center hover:text-gray-200" >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            <span v-if="useCard.cartItems.length" class="flex absolute -mt-5 ml-4">
              <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-cyan-500 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-cyan-600 text-center">
                 
                </span>
              </span>
          </NuxtLink>
          <!-- Sign In / Register      -->
          <NuxtLink to="/login" class="flex items-center hover:text-gray-200" >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
          </NuxtLink>
          
          
        </div>
      </div>
      <!-- Responsive navbar -->
   
      <a  class="navbar-burger md:hidden self-center mr-5 dropdown dropdown-bottom dropdown-end " href="#">
          <svg tabindex="0"  xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <div tabindex="0" class="dropdown-content menu  shadow-lg p-5 z-50    bg-primary  rounded w-52 mt-8">
        <div class=" flex flex-col   gap-2     w-fit">
          <div class=" hover:bg-slate-700 p-2  rounded-md ">
            <Icon name="uil:home"  class=" w-7 h-7 mb-2"/>
            <NuxtLink  to="/" class="text-xl"> Home</NuxtLink>
          </div>
          <div class=" hover:bg-slate-700 p-2  rounded-md ">
            <Icon name="uil:shop" class="w-7 h-7 mb-2"/>
            <NuxtLink  to="/Store"  class="text-xl"  > Products</NuxtLink>
          </div>
          <div class=" hover:bg-slate-700 p-2  rounded-md ">
            <Icon name="uil:lamp" class=" w-7 h-7 mb-2"/>
            <NuxtLink  to="/about"  class="text-xl" > About Us</NuxtLink>
          </div>
          <div class=" hover:bg-slate-700 p-2  rounded-md ">
            <Icon name="uil:user-plus" class=" w-7 h-7 mb-2"/>
            <NuxtLink  to="/login"  class="text-xl"  > Profile</NuxtLink>
          </div>

       

        </div>
    
  </div>
      </a>

    </nav>
    
  </section>
</div>





</template>

<script setup>
import {useShoppingStore} from'@/store/products';

const useCard = useShoppingStore()







</script>

<style   >


</style>