import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#000',
        surface: '#0a0a0a',
        border: '#1a1a1a',
        text: '#ededed',
        muted: '#888'
      },
      boxShadow: {
        glow: '0 0 40px rgba(9, 120, 255, 0.35)',
      },
    },
  },
  plugins: [],
}

export default config
