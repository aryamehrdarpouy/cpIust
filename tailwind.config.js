/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#1A0959',
          dark: '#120640',
          secondary: '#5E549F',
          lilac: '#E5DEFF',
          'lilac-soft': 'rgba(229, 222, 255, 0.3)',
          page: '#F7F9FB',
          header: '#F2F4F6',
          tag: '#E6E8EA',
          border: '#DFE0E0',
          'border-light': '#ECEEF0',
          heading: '#191C1E',
          body: '#484550',
          muted: '#616363',
          dim: '#787581',
          coral: '#F73846',
          emerald: '#10B981'
        }
      },
      fontFamily: {
        vazir: ['Vazirmatn', 'sans-serif'],
        mono: ['"Liberation Mono"', 'monospace']
      },
      boxShadow: {
        'card': '0px 1px 2px rgba(0, 0, 0, 0.05)',
        'header': '0px 1px 8px rgba(26, 9, 89, 0.04)',
        'hover': '0px 4px 12px rgba(26, 9, 89, 0.08)'
      }
    },
  },
  plugins: [],
}
