import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#240750',
    },
    secondary: {
      main: '#344C64',
    },
    text: {
      primary: '#070F2B',
      secondary: '#FFFFFF',
    },
    error: {
      main: '#f44336',
    },
  },
  typography: {
    fontFamily: 'Aleo, Roboto, Arial, sans-serif',
    h1: {
      fontSize: '32px',
      fontWeight: 400,
      color: '#070F2B',
    },
    h2: {
      fontSize: '24px',
      fontWeight: 400,
      color: '#070F2B',
    },
    h3: {
      fontSize: '20px',
      fontWeight: 400,
      color: '#070F2B',
    },
    h4: {
      fontSize: '16px',
      fontWeight: 400,
      color: '#070F2B',
    },
    body1: {
      fontSize: '14px',
      fontWeight: 400,
      color: '#070F2B',
    },
    body2: {
      fontSize: '12px',
      fontWeight: 400,
      color: '#070F2B',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@global': {
          '@import': [
            'url("https://fonts.googleapis.com/css2?family=Aleo:wght@400;700&display=swap")',
          ],
          body: {
            backgroundColor: '#EEEEEE',
            margin: 0,
            padding: 0,
            boxSizing: 'border-box',
            fontFamily: 'Aleo, Roboto, Arial, sans-serif',
            color: '#070F2B',
          },
          a: {
            textDecoration: 'none',
            color: 'inherit',
          },
        },
      },
    },
  },
});

export default theme;
