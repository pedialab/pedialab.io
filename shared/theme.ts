import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#E0E0E0'
    },
    secondary: {
      main: '#828282'
    },
    text: {
      secondary: '#A1A1A1'
    },
    background: {
      default: '#191919'
    }
  },
  typography: {
    fontFamily: ['Noto Sans'].join(','),
    // Company Name
    h1: {
      color: '#E5E5E5',
      fontSize: '2rem',
      fontWeight: 'bold',
      lineHeight: '1.3'
    },
    // Content Header
    h2: {
      fontSize: '3.75rem',
      lineHeight: '1.27'
    },
    body1: {
      fontSize: '1.5rem',
      lineHeight: '1.335'
    },
    caption: {
      fontSize: '0.875rem'
    }
  },
  overrides: {
    MuiButton: {
      text: {
        textTransform: 'none'
        // minWidth: 'auto',
        // paddingLeft: '0',
        // paddingRight: '0',
        // lineHeight: '1',
        // paddingBottom: '13px'
      }
    }
  }
});

export default theme;
