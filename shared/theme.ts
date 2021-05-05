import { createMuiTheme } from '@material-ui/core/styles';

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
      lineHeight: '1.27',
      color: '#E0E0E0'
    },
    // section header
    h3: {
      color: '#E0E0E0',
      fontSize: '2.125rem',
      fontWeight: 700,
      lineHeight: '1.5'
    },
    // button title
    button: {
      fontSize: '1.125rem',
      fontWeight: 700,
      lineHeight: '1.225'
    },
    // index article text
    body1: {
      fontSize: '1.5rem',
      lineHeight: '1.335',
      color: '#828282'
    },
    // case-study article paragraph
    body2: {
      fontSize: '1.125rem',
      color: '#828282',
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
      lineHeight: '2',
      color: '#828282'
    },
    caption: {
      fontSize: '0.875rem'
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        img: {
          width: '100%',
          height: 'auto'
        }
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
