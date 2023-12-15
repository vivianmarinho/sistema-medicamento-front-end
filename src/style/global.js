import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
  }

  html, body {
    width: 100vw;
    min-height: 100vh; /* Altura mínima da janela de visualização */
    font-family: Poppins;
  }

  body {
    overflow-x: hidden; /* Para evitar a barra de rolagem horizontal */
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f0f2f5;
    min-height: 100vh; /* Ocupa toda a altura da janela de visualização */
    width: 100%;
  }
`;

export default GlobalStyle;
