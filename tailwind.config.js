module.exports = {
  theme: {
    screens: {
      'mobile': '480px',
      'tablet': '768px',
      'laptop': '992px',
      'desktop': '1200px'
    },
    extend: {
      fontFamily: {
        openSans: ['"Open Sans"', 'san-serif']
      },
      fontSize: {
        '7xl': '5rem'
      }
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    transitionProperty: ['responsive', 'hover', 'focus']
  },
  plugins: [],
};
