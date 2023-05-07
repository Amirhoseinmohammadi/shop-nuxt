// https://nuxt.com/docs/api/configuration/nuxt-config
// hgkbkholfcvvdbdgvcdbnv
export default defineNuxtConfig({
    modules: [
        '@pinia/nuxt',
        '@nuxtjs/tailwindcss',
        'nuxt-swiper',
        'nuxt-icon'
       
        
        
       
    ],

    css:['@/assets/css/main.css'],
    
 
  
    plugins: [
        { src: "~/plugins/swiper.ts", mode: "client",  },
      ],   


      app: {
        // global transition
        pageTransition: { name: 'page', mode: 'out-in' },
        layoutTransition: { name: 'layout', mode: 'out-in' },
      },
     
     
   
})
