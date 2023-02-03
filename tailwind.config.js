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
        dots: `radial-gradient(circle at center, #037A76 0%, #037A76 30%, transparent 30%)`,
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
        dark: '#22272e',
        primary: '#037A76',
        accent: '#E9DAAC',
        'accent-light': colors.yellow[200],
        'button-text': '#616161',
        body: {
          light: '#262626',
          dark: colors.gray[300],
        },
        h1: {
          light: '#3D3D3D',
          dark: colors.gray[100],
        },
        prompt: {
          divider: '#176461',
          content: {
            light: '#FAFAFA',
            dark: '#3A3E43',
          },
          'border-l-r': {
            light: '#E6E6E6',
            dark: '#505050',
          },
        },
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
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-radix')(),
  ],
}
