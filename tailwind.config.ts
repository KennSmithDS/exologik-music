import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette — sunset (Posse flyer + Sedona sunset)
        sunset: {
          umber: '#120b09',
          clay: '#22150f',
          bronze: '#c98a4b',
          gold: '#e6c27a',
          'red-rock': '#b8542e',
          ember: '#f0a05a',
          'dusk-peach': '#f5b38a',
          sandstone: '#f2e4c8',
        },
      },
      fontFamily: {
        display: ['Cinzel', 'serif'],
        body: ['Cormorant Garamond', 'serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
