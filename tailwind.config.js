const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: [
    './(components|constant|layouts|pages)/**/*.(ts|tsx)',
    './data/(blog|snippets|authors)/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        dots: 'radial-gradient(circle at center, #037A76 0%, #037A76 30%, transparent 30%)',
      },
      spacing: {
        '9/16': '56.25%',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: colors.indigo,
        gray: colors.gray,
        dark: '#22272e',
        brand: '#037A76',
        code: {
          green: '#b5f4a5',
          yellow: '#ffe484',
          purple: '#d9a9ff',
          red: '#ff8383',
          blue: '#93ddfd',
          white: '#fff',
        },
        spotify: '#1DB954',
        twitter: '#1da1f2',
        facebook: '#1877f2',
      },
      width: {
        4.5: '1.125rem',
        5.5: '1.375rem',
      },
      height: {
        4.5: '1.125rem',
        5.5: '1.375rem',
      },
      cursor: {
        'zoom-in': 'zoom-in',
        'zoom-out': 'zoom-out',
      },
    },
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
