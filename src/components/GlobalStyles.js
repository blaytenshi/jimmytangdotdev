import { createGlobalStyle } from 'styled-components';
import OpenSansRegular from '../assets/fonts/OpenSans-Regular.ttf';
import OpenSansItalic from '../assets/fonts/OpenSans-Italic.ttf';
import OpenSansSemiBold from '../assets/fonts/OpenSans-SemiBold.ttf';
import OpenSansSemiBoldItalic from '../assets/fonts/OpenSans-SemiBoldItalic.ttf';
import OpenSansBold from '../assets/fonts/OpenSans-Bold.ttf';
import OpenSansBoldItalic from '../assets/fonts/OpenSans-BoldItalic.ttf';
import OpenSansExtraBold from '../assets/fonts/OpenSans-ExtraBold.ttf';
import OpenSansExtraBoldItalic from '../assets/fonts/OpenSans-BoldItalic.ttf';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans';
    src: url(${OpenSansRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url(${OpenSansItalic}) format('truetype');
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url(${OpenSansSemiBold}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Open Sans';
    src: url(${OpenSansSemiBoldItalic}) format('truetype');
    font-weight: 600;
    font-style: italic;
  }
  
  @font-face {
    font-family: 'Open Sans';
    src: url(${OpenSansBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Open Sans';
    src: url(${OpenSansBoldItalic}) format('truetype');
    font-weight: 700;
    font-style: italic;
  }
  
  @font-face {
    font-family: 'Open Sans';
    src: url(${OpenSansExtraBold}) format('truetype');
    font-weight: 800;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Open Sans';
    src: url(${OpenSansExtraBoldItalic}) format('truetype');
    font-weight: 800;
    font-style: italic;
  }
  
  * {
    margin: 0;
    padding: 0;
    margin-block-start: 0;
    margin-block-end: 0;
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
    font-family: 'Open Sans', sans-serif;
  }
  
  body {
    margin: 0;
    box-sizing: border-box;
  }
  
  h1,
  h2 {
    margin: 0;
  }
  
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;

export default GlobalStyles;
