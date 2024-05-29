'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';


const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(232,195,158,1)",
      dark: "rgba(175,141,106,1)",
    },
    secondary: { main: "#ffffff" },
    warning: {
      main: "rgba(175,141,106,0.6)"
    }
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

const darkTheme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export { theme, darkTheme };
