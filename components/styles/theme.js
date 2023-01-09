export default {
  breakpoints: ['48em', '62em', '80em'],
  fonts: {
    body: 'Poppins, helvetica',
    heading: 'Poppins, helvetica',
    cursiveFont: '"Pacifico", cursive'
  },
  space: {
    px: '1px',
    0: '0',
    0.5: '0.5rem',
    0.6: '0.6rem',
    0.8: '0.8rem',
    1: '1rem',
    1.5: '1.5rem',
    2: '2rem',
    2.5: '2.5rem',
    3: '3rem',
    3.5: '3.5rem',
    4: '4rem',
    5: '5rem'
  },
  sizes: {
    full: '100%'
  },
  fontSizes: {
    xs: '1rem', // 10px
    '2xs': '1.2rem', // 12px
    '3xs': '1.3rem', // 13px
    '4xs': '1.4rem', // 14px
    sm: '1.5rem', // 15px
    md: '1.7rem', // 17px
    lg: '1.8rem', // 18px
    '2lg': '2rem', // 20px
    '3lg': '2.5rem', // 25px
    xl: '3rem', // 30px
    '2xl': '3.5rem', // 35px
    '3xl': '4.5rem', // 45px
    '4xl': '6rem' //60px
  },
  fontWeights: {
    thin: 300,
    normal: 400,
    medium: 500,
    bold: 600,
    thick: 700
  },
  lineHeights: {
    normal: 'normal',
    none: '1',
    shorter: '1.25',
    short: '1.375',
    base: '1.5',
    tall: '1.625',
    taller: '2'
  },
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em'
  },
  zIndices: {
    hide: -1
  },
  colors: {
    background: '#282a36',
    accent: 'rgba(225, 225, 225, 0.2)',
    primary: '#1d444e',
    secondary: '#ffcb00',
    muted: 'rgba(0,0,0,.5)',
    text: '#fff'
  },
  styles: {
    global: {
      html: {
        scrollBehavior: 'smooth',
        fontSize: '62.5%'
      },
      body: {
        boxSizing: 'border-box',
        fontFamily: 'body',
        backgroundColor: 'background',
        color: 'text',
        maxWidth: '100%',
        overflowX: 'hidden',
        position: 'relative'
      },
      a: {
        fontSize: 'sm',
        textDecoration: 'none',
        px: 1,
        py: 0.5
      },
      h1: {
        fontSize: '4xl'
      },
      h2: {
        fontSize: '3xl'
      },
      h3: {
        fontSize: '2xl'
      },
      h4: {
        fontSize: 'xl'
      },
      h5: {
        fontSize: '3lg'
      },
      h6: {
        fontSize: '2lg'
      },
      p: {
        fontSize: '2lg'
      }
    }
  }
};
