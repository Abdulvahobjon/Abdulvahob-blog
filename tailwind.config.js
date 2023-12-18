/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor:{
        'main-bg': "#0F172A",
        "list-item-bg":"rgba(30, 41, 59, 0.40)"
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
      },
      borderRadius:{
        "5":"20px"
      },
    },
  },
  plugins: [],
}

