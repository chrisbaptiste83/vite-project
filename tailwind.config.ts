import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts, tsx, js, jsx}'],
    extend: {},
  },

  plugins: [require('daisyui')],

}

export default config
