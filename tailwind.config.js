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
      },
      opacity: {
        '10': '.1',
        '20': '.2',
        '30': '.3',
        '40': '.4',
        '50': '.5',
        '60': '.6',
        '70': '.7',
        '80': '.8',
        '90': '.9',
      }
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    transitionProperty: ['responsive', 'hover', 'focus']
  },
  plugins: [],
};
