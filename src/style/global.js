import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
  }

  html, body {
    width: 100vw; /* Ocupa toda a largura da janela de visualização */
    height: 100vh; /* Ocupa toda a altura da janela de visualização */
    font-family: Poppins;
    overflow-x: visible; /* Ou 'initial' para permitir o overflow-x */
    overflow-y: auto; /* Mantendo o overflow-y */
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f0f2f5;
    min-height: 100vh; /* Ocupa toda a altura da janela de visualização */
    width: 100%;
    font-family: 'Poppins', sans-serif;
  }
`;

export default GlobalStyle;
