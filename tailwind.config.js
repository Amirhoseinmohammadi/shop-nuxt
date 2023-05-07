/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite/**/*.js"

    
  ],

  daisyui: {
    themes: [
      {
     
        mytheme: {
          

 
          "primary": "#0d0a0a",
                    
          
           
          "secondary": "#f7fcfc",
                    
          
           
          "accent": "#f43f5e",
                    
          
           
          "neutral": "#f5f5f4",
                    
          
           
          "base-100": "#FFFFFF",
                    
          
           
          "info": "#0ea5e9",
                    
          
           
          "success": "#84cc16",
                    
          
           
          "warning": "#facc15",
                    
          
           
          "error": "#dc2626",
                    },
                  }
    ],

  },

 
 
  plugins: [require("daisyui"),
  require('@tailwindcss/forms')],

  
 
}
