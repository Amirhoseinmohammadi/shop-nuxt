<template>
  <div class="flex justify-center">
    <Html>
        <Head>
          <Title>Login</Title>
          <Meta name="description" content="My page is cool"/>
        
          

        </Head>

      </Html>

  
<div
  class="container  bg-secondary   m-4  p-4  max-w-md   xl:max-w-3xl h-full flex  rounded-lg shadow overflow-hidden"
>
  <div class="relative hidden xl:block xl:w-1/2 h-full">
    <img
      class="absolute h-auto w-full object-cover mt-10 mx-3 shadow-2xl"
      src="@/assets/image/a3.jpg"
      alt="my zomato"
    />
  </div>
  <div class="w-full xl:w-1/2 p-8">
    <form method="post" action="#" onSubmit="return false">
      <h1 class=" text-2xl font-bold">{{ authState }} </h1>
      <div >
        <span class=" text-sm">
         {{ authState ==="Sign in" ? " Don't have an account?" :"Already have a account please sin in " }}
        </span>
        <button @click="ToggleauthState"  class=" text-sm font-semibold">
         {{ authState ==="Sign in" ? "sign up" : "sign in" }}
        </button>
      </div>
      <div class="mb-4 mt-6">
        <label
          class="block text-sm font-semibold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          class="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
          id="email"
          type="text"
          placeholder="Your email address"
        />
      </div>
      <div class="mb-6 mt-6">
        <label
          class="block  text-sm font-semibold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          class="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
          id="password"
          type="password"
          placeholder="Your password"
        />
        <a
          class="inline-block align-baseline text-sm hover:text-info"
          href="/forgot"
        >
          Forgot Password?
        </a>
      </div>
      <div class="flex w-full mt-8">
        <button
          class="w-full  btn btn-info hover:bg-grey-900  text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
          type="button"
        >
          Sign in
        </button>
      </div>
    </form>
  </div>
</div>


  </div>
</template>

<script setup lang="ts">
const authState = ref<"Sign in" | "Sign up">("Sign in");
const ToggleauthState = () =>{
  if(authState.value === "Sign in") authState.value = "Sign up"
  else authState.value = "Sign in"
};

</script>

<style  scoped>

</style>