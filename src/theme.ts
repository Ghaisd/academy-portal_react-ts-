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
      dark: '#7b342a',
      main: '#f75842',
    },
  },
  typography: {
    fontFamily: ['Verdana', 'cursive'].join(','),
    h1: {
      fontSize: '2.5rem',
      fontWeight: 400,
      letterSpacing: 'normal',
      lineHeight: '3rem',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 400,
      letterSpacing: 'normal',
      lineHeight: '3rem',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
      letterSpacing: 'normal',
      lineHeight: '1.5rem',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      letterSpacing: 'normal',
      lineHeight: '1.5rem',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      letterSpacing: 'normal',
      lineHeight: '1.5rem',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
      letterSpacing: 'normal',
      lineHeight: '1.5rem',
    },
    body1: {
      fontSize: '1.5rem',
      fontWeight: 500,
      letterSpacing: 'normal',
      lineHeight: '2.5rem',

    }
  },
});

export default theme;
