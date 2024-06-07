'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

enum Themes {
  LIGTH = 'ligth',
  DARK = 'dark',
}
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ed6c02', // Primary color
    },
    secondary: {
      main: '#fff', // A complementary blue for secondary
    },
    text: {
      primary: '#1A1A1A', // Dark text for light theme
      secondary: '#757575', // Light grey for secondary text
    },
    background: {
      default: '#f5f5f5', // Light background color
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

const darkTheme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#E8C39E', // Primary color (can be adjusted for dark theme)
    },
    secondary: {
      main: '#F5CA8E', // A lighter version of primary for dark theme contrast
    },
    text: {
      primary: '#fff', // White text for dark theme
      secondary: '#e0e0e0', // Light grey for secondary text
    },
    background: {
      default: '#212121', // Dark background color
    },
  }
});

export { theme, darkTheme, Themes };
