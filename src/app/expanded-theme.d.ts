import '@material-ui/core/styles';

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    color1?: Palette['primary'];
  }
  interface PaletteOptions {
    color1?: PaletteOptions['primary'];
  }
}