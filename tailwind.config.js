/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor:{
        'main-bg': "#0F172A",
      },
      colors:{
        "blog":{
          'slate-50':'#F8FAFC',
          'slate-300':'#CBD5E1',
        }
      },
      fontFamily:{
        "roboto" : ["Roboto" , "sans-serif"],
      },
      fontSize:{
        "logo-text":"15px" ,
        "26":"26px" ,
      }
     
    },
  },
  plugins: [],
}

