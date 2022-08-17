import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    text: {
      primary: '#FFFFFF',
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
    },
    warning: {
      main: '#f75842',
    },
  },
  typography: {
    fontFamily: ['Lemonada', 'cursive'].join(','),
  },
});

export default theme;
