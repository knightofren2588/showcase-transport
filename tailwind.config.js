/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom brand colors for Showcase Transport
      colors: {
        brand: {
          primary: '#00CC6F',      // Main green - use for primary actions
          secondary: '#0F2931',    // Navy - use for headers and emphasis
          accent: '#F2B94C',       // Gold - use for highlights and CTAs
          background: '#F8F9FA',   // Light gray - use for page backgrounds
          text: '#1C1C1C',         // Almost black - use for body text
        },
        // Alternative naming (st-* prefix for Showcase Transport)
        st: {
          green: '#00CC6F',        // Main green
          navy: '#0F2931',         // Navy
          gold: '#F2B94C',         // Gold
          background: '#F8F9FA',   // Light gray
          text: '#1C1C1C',         // Almost black
        },
      },
      
      // Custom fonts - make sure to import these in your HTML or CSS
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],  // Use for h1, h2, h3, etc.
        body: ['Open Sans', 'sans-serif'],      // Use for paragraphs and text
      },
      
      // Custom box shadows
      boxShadow: {
        'soft': '0 6px 24px rgba(0, 0, 0, 0.08)',  // Gentle shadow for cards
      },
      
      // Custom border radius
      borderRadius: {
        'brand': '1rem',  // 16px - consistent rounded corners
      },
    },
  },
  plugins: [],
}
