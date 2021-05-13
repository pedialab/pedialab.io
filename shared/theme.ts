import { createMuiTheme } from '@material-ui/core/styles';
import NotoSansRegular from '../public/Noto_Sans/NotoSans-Regular.ttf';
import NotoSansBold from '../public/Noto_Sans/NotoSans-Bold.ttf';
import NotoSansLight from '../public/Noto_Sans/NotoSans-Light.ttf';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#E0E0E0'
    },
    secondary: {
      main: '#828282'
    },
    text: {
      // button title
      primary: '#4F4F4F',
      // case studies component title
      secondary: '#A1A1A1'
    },
    background: {
      paper: '#F2F2F2',
      default: '#191919'
    }
  },
  typography: {
    fontFamily: ['Noto Sans'].join(','),
    // Company name
    h1: {
      color: '#E5E5E5',
      fontSize: '2rem',
      fontWeight: 'bold',
      lineHeight: '1.3'
    },
    // article header
    h2: {
      fontSize: '3.75rem',
      fontWeight: 300,
      lineHeight: '1.266'
    },
    // section header
    h3: {
      fontSize: '2.125rem',
      fontWeight: 700,
      lineHeight: '1.5'
    },
    // button title, 18px
    button: {
      fontSize: '1.125rem',
      fontWeight: 700,
      lineHeight: '1.225'
    },
    // index article text
    body1: {
      fontSize: '1.5rem',
      lineHeight: '1.335'
    },
    // case-study article paragraph
    body2: {
      fontSize: '1.125rem',
      lineHeight: '1.56',
      marginTop: '1.625rem',
      marginBottom: '1.625rem'
    },
    // 12px
    subtitle1: {
      fontSize: '0.75rem',
      fontWeight: 700
    },
    // index list item
    subtitle2: {
      fontSize: '1.5rem',
      lineHeight: '2'
    },
    // 14px
    caption: {
      fontSize: '0.875rem'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1152,
      xl: 1920
    }
  },
  props: { MuiContainer: { maxWidth: 'xl' } },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        a: {
          textDecoration: 'none'
        },
        img: {
          width: '100%',
          height: 'auto',
          objectFit: 'cover'
        },
        '@font-face': [
          {
            fontFamily: 'Noto Sans',
            src: `url(${NotoSansRegular}) format("truetype")`,
            fontWeight: 400,
            fontStyle: 'normal'
          },
          {
            fontFamily: 'Noto Sans',
            src: `url(${NotoSansBold}) format("truetype")`,
            fontWeight: 700,
            fontStyle: 'normal'
          },
          {
            fontFamily: 'Noto Sans',
            src: `url(${NotoSansLight}) format("truetype")`,
            fontWeight: 300,
            fontStyle: 'normal'
          }
        ]
      }
    },
    MuiTypography: {
      button: {
        textTransform: 'none'
      }
    },
    MuiButton: {
      root: {
        '&:hover': {
          backgroundColor: ''
        }
      },
      text: {
        textTransform: 'none',
        paddingLeft: '0',
        paddingRight: '0',
        paddingBottom: '0.875rem',
        paddingTop: '0.875rem'
      }
    }
  }
});

export default theme;
