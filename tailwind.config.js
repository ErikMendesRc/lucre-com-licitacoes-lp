/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0d1b2a', // Azul escuro
        secondary: '#1b263b', // Azul mais claro
        accent: '#f0a500', // Dourado
        textLight: '#e0e1dd', // Texto claro
        textDark: '#1b1b1e', // Texto escuro
        success: '#4caf50', // Verde
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Poppins', 'serif'],
      },
      screens: {
        'xs': '475px', // Tela extra pequena
        'sm': '640px', // Tela pequena
        'md': '768px', // Tela média
        'lg': '1024px', // Tela grande
        'xl': '1280px', // Tela extra grande
        '2xl': '1536px', // Tela 2x extra grande
      },
    },
  },
  plugins: [],
}