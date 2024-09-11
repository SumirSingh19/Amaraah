/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'helvetica': ['Helvetica', 'Arial', 'sans-serif'],
        'helvetica-bold': ['Helvetica-Bold', 'Arial', 'sans-serif'],
        'inter': ['Inter', 'system-ui', 'sans-serif'],
        'abeezee': ['ABeeZee', 'sans-serif'],
        'nephilm': ['Nephilm', 'sans-serif'],
        'barlow': ['Barlow','sans-serif'],
        'lato': ['Lato','sans-serif'],
        'cormorant': ['Cormorant', 'sans-serif'],
        'quattrocento': ['Quattrocento', 'sans-serif'],
        'domine': ['Domine', 'serif'],
      },
    },
    screens:{
      sm: { max: '640px'},       // Small devices (sm)
      md: { max: '768px'},       // Medium devices (md)
      lg: { max: '1024px', min: '768px'},       // Large devices (lg)
      xl: { max: '1280px', min: '1024px'},     // Extra large devices (xl)
      '2xl': { min: '1536px' },    // Extra extra large devices (2xl)
    },
    clipPath: {
      'ribbon': 'polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)',
    },
  },
  plugins: [],
}
