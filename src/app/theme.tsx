'use client'

import { createTheme, PaletteOptions, Theme } from "@mui/material";




// Define a custom interface for your theme
interface CustomPalette extends PaletteOptions {
  color1?: {
    main: string;
  };
  color2?: {
    main: string;
  };
  color3?: {
    main: string;
  };
  color4?: {
    main: string;
  };
  color5?: {
    main: string;
  };
  color6?: {
    main: string;
  };
  color7?: {
    main: string;
  };
  // Add more custom colors if needed
}

// Create custom theme
const theme = createTheme({
  palette: {
    // Define your custom color 'color1'
    text: {
      primary: '#ff0000',
    },
    color1: {
      main:  '#0586F4',
    },
    color2: {
      main:  '#F6DF98',
    },
    color3: {
      main:  '#CB4A4C',
    },
  } as CustomPalette,
} );


export default theme