import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    text: {
      primary: '#FFF',
    },
    primary: {
      dark: '#2c302e',
      main: '#474a48',
      light: '#909590',
    },
    secondary: {
      main: '#537a5a',
    },
    success: {
      main: '#00bf8e',
      contrastText: '#fff',
    },
    info: {
      main: '#000',
    },
    warning: {
      main: '#f75842',
    },
  },
  typography: {
    fontFamily: ['Lemonada', 'cursive'].join(','),
    body1: {
      color: '#fff',
    },
  },
});

export default theme;
