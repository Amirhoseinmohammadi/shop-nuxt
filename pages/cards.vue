<template>
    <div>
      <Html>
        <Head>
          <Title>Box</Title>
          <Meta name="description" content="My page is cool"/>
        </Head>
      </Html>
<section v-if="useCard.getCartItems.length" class="  ">
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div class="mx-auto max-w-3xl">
      <header class="text-center">
        <h1 class="text-xl font-semibold uppercase sm:text-3xl text-white/75  ">Your Carts</h1>
      </header>
      <div class="mt-8 p-2">
        <div class="  space-y-6 bg-secondary p-6  rounded-md ">
          <div
          v-for="item in useCard.getCartItems"
          :key="item.id"
           class=" flex    items-center  justify-center gap-3 my-2 ">
           <div class=" flex-1 flex-shrink ">
            <img
            :src="item.image"
            alt="product"
              class=" md:h-36 md:w-36 rounded object-cover shadow-2xl"
            />
           </div>
            <div class="flex-1 ">
              <p class=" md:text-[20px] text-sm   uppercase  font-semibold ">{{ item.title}}</p>
              <dl class="mt-0.5 space-y-px  font-semibold ">
              <div class=" text-sm">
                  <dt class="inline   md:text-2xl  ">Price :</dt>
                  <dd class="inline md:text-xl"> <span class=" "> $</span>{{item.price}}</dd>
                </div>
              </dl>
            </div>
<div class="flex flex-col md:flex-row md:justify-center md:items-center ">
 <button
    @click="useCard.incrementQ(item)"
      type="button"
      class="w-10 h-10 leading-10   btn-primary   btn  transition hover:opacity-75"
    >
      &plus;
    </button>
    <input
      disabled
      type="number"
      id="Quantity"
      :value="item.quantity"
      class="  h-10 w-10 border-transparent bg-transparent text-center    [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
    />
    <button
    @click="useCard.decrementQ(item)"
      type="button"
      class="w-10 h-10 leading-10  btn  btn-primary     transition hover:opacity-75"
    >
      &minus;
    </button>
</div>
<div class="">
  <button 
              @click="useCard.removeFromCart(item)"
              class=" transition hover:text-red-600  ">
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

        <div class="mt-8 flex justify-center   bg-secondary rounded-md  p-8">
          <div class="w-screen max-w-lg space-y-4 ">
            <dl class="space-y-0.5 text-sm  ">
              <div class="flex justify-between">
                <dt>Subtotal</dt>
                <dd>.....</dd>
              </div>

              <div class="flex justify-between">
                <dt>VAT</dt>
                <dd class="">£25</dd>
              </div>

              <div class="flex justify-between">
                <dt>Discount</dt>
                <dd class="">-£20</dd>
              </div>

              <div class="flex justify-between !text-base font-medium">
                <dt>Total</dt>
                <dd>${{ useCard.cartItems.reduce((acc,item) => acc += item.price * item.quantity,0) }}</dd>
              </div>
            </dl>

            <div class="flex justify-strat">
              <span
                class="inline-flex items-center justify-center rounded-full   px-2.5 py-1 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="-ml-1 mr-1.5 h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                  />
                </svg>

                <p class="whitespace-nowrap text-xs">2 Discounts Applied</p>
              </span>
            </div>

            <div class="flex justify-end">
              <a
                href="#"
                class="block rounded  px-5 py-3 text-sm  transition  btn  btn-info shadow-2xl"
              >
                Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section v-else>
  <!-- Container for empty state message and button -->
  <div class="md:flex-row flex-col flex justify-center my-7 gap-6 items-center w-full h-[50vh]">
    <div>
      <!-- Empty state message -->
      <h1 class="text-xl text-white/75 font-semibold">Your Box is empty</h1>
      <!-- Button to redirect to the store -->
      <NuxtLink to="/Store" class="btn btn-error text-black text-lg my-9">Shop Now ...</NuxtLink>
    </div>

    <!-- Image container -->
    <div class="">
      <img src="@/assets/image/SeekPng.com_card-suits-png_947514.png" alt="">
    </div>
  </div>
</section>

    </div>
</template>

<script setup>

import {useShoppingStore} from'~~/store/products';

const useCard = useShoppingStore()

</script>

<style lang="scss" scoped>

</style>