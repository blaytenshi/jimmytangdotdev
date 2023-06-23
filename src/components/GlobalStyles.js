import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    margin: 0;
    box-sizing: border-box;
  }
`

export default GlobalStyles;
