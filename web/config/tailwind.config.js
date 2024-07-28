/** @type {import('tailwindcss').Config} */
export const content = ['src/**/*.{js,jsx,ts,tsx}']
export const theme = {
  extend: {
    fontFamily: {
      sf: ['-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
    },
    colors: {
      logo: {
        DEFAULT: '#1559cf',
        hover: '#0948B5',
      },
    },
  },
}
export const plugins = [require('daisyui'), require('tailwindcss-animate')]

export const daisyui = {
  themes: [
    {
      custom_light: {
        primary: '#1559cf',
        secondary: '#0948b5',
        accent: '#470ba9',
        neutral: '#d6d6d4',
        'base-100': '#f6f5f7',
        info: '#49cfff',
        success: '#27df30',
        warning: '#dbaf11',
        error: '#1559cf',
      },

      custom_dark: {
        primary: '#1559cf',
        secondary: '#0948b5',
        accent: '#470ba9',
        neutral: '#1f1f1e',
        'base-100': '#242424',
        info: '#49cfff',
        success: '#27df30',
        warning: '#dbaf11',
        error: '#1559cf',
      },
    },
  ],
}
