module.exports = {
  theme: {
    screens: {
      'mobile': '360px',
      'tablet': '640px',
      'laptop': '1280px',
      'desktop': '1920px'
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
    backgroundColor: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: [],
};
