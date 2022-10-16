import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;

    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  #root {
    margin: 0;
    min-height: 100vh;

    background-image: url("/disney.png");
    background-repeat: no-repeat;
    background-size: cover;
  }

  h1 {
    font-size: min(32px, 5vw);
  }
  h3 {
    font-size: min(18.72px, 4vw);
  }
  h4 {
    font-size: min(16px, 4vw);
  }

`;
