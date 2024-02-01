import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Defina uma altura mínima */
  width: 100%;
  background-color: #383838;
`;

export const Form = styled.form`
  display: flex;
  padding: 3rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #201d1d;
  border-radius: 5px;
  width: 100%;
  max-width: 450px;
  gap: 30px 0px;

  h1 {
    color: white;
    font-size: 20px;
    font-weight: light;
  }

  h2 {
    color: blue;
    font-size: 20px;
    font-weight: light;
    text-align: center;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  h3 {
    color: blue;
    font-size: 30px;
    font-weight: light;
    text-align: center;
    margin-bottom: 20px;
  }

  p {
    color: white;
    font-size: 16px;
    font-weight: bold; 
  }

  a {
    color: white;
    font-size: 14px;
  }

  b{
    color: white;
    text-align: justify;
    text-transform: uppercase;
  }
  

  @media screen and (max-width: 768px) {
    /* Estilos para telas menores */
    padding: 1.5rem;
    max-width: 90%; /* Ajusta a largura máxima */
  }

  
`;



export const SubContainerSign = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0px 20px;
  align-items: center;
`;


export const CloseButton = styled.button`
  background-color: #dc3545;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
 
  /* Adicione mais estilos conforme necessário */
`;


