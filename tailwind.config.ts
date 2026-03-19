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
        // Brand palette from Reincarnation album art
        cosmos: {
          black: '#05030f',
          indigo: '#0d0820',
          'steel-blue': '#4a7fa8',
          'ice-blue': '#6db3d4',
          violet: '#7b4fa8',
          'cosmic-violet': '#c084fc',
          'lotus-pink': '#f0a8d8',
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
