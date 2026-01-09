/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        // Slow zoom for the Hero background image
        'slowZoom': 'slowZoom 20s ease-in-out infinite',
        // Smooth entrance for text and buttons
        'slideUp': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        slowZoom: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.15)' },
        },
        slideUp: {
          '0%': { 
            transform: 'translateY(40px)', 
            opacity: '0' 
          },
          '100%': { 
            transform: 'translateY(0)', 
            opacity: '1' 
          },
        },
      },
      // Optional: Add custom cubic-beziers for smoother industrial feel
      transitionTimingFunction: {
        'expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      }
    },
  },
  plugins: [],
};