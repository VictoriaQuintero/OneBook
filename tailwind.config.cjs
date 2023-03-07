/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backNaranja: "#FF8A00",
        letrasHead: "#C8C8C8",
        letrasNaraOscuro: "#A6360D",
        negroClaro: "#0D0D0D",
        marronOscuro: "#591C05",
        marronClaro: "#A68263",
        marronForm: "#7C593B",
        degradado: "bg-gradient-to-r from-amber-800 to-yellow-700"
      },
      fontFamily: {
        fj: ["Fjalla One", "sans-serif"],
        chakra: ["Chakra Petch", "sans-serif"],
      },
      screens: {
        's': '412px',

        'sm': '740px',
  
        'md': '820px',
  
        'lg': '912px',
  
        'xl': '1024px',
  
        '2xl': '1280px',
      },
      backgroundImage: {
        inicio: "url('./assets/pexels-lil-artsy-3368816.jpg')",
        categoria : "url(./assets/pexels-koshevayak-4170629.jpg)",
        autor : "url(./assets/pexels-aline-viana-prado-2465877.jpg)",
        fecha: "url(./assets/pexels-stanislav-kondratiev-2908984.jpg)",
        ciencias:"url(./assets/ComboLibrosReyes2017bis.jpg)",
        romance: "url(./assets/thumbnail_7DEBE86E-538D-4DF6-80C6-1C23E7A8ECE9.webp)",
        fantasia: "url(./assets/fantasia.jpg)",
        terror: "url(./assets/terror.jpg)",
        drama:"url(./assets/drama.webp)",
        animados:"url(./assets/animados.avif)",
        about : "url(./assets/pexels-element-digital-1370296.jpg)"
      }
    },
  },
  plugins: [],
};
