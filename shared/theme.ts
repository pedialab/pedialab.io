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
    error: {
      main: red.A400
    },
    background: {
      default: '#191919'
    }
  },
  typography: {
    fontFamily: ['Noto Sans'].join(','),
    h1: {
      color: '#E5E5E5',
      fontSize: '32px',
      fontWeight: 'bold'
    }
  },
  overrides: {
    MuiButton: {
      text: {
        textTransform: 'none',
        minWidth: 'auto',
        paddingLeft: '4px',
        paddingRight: '4px',
        lineHeight: '1',
        paddingBottom: '13px'
      }
    }
  }
});

export default theme;
