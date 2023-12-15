import React from 'react';
import styled from 'styled-components';

// Estilos para a página de histórico
const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #383838;
  height: 100vh;
  min-width: 100vw;
`;

const HistoryItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #201d1d;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
  width: 80%;
  max-width: 600px;

  p {
    color: white;
    font-size: 16px;
    font-weight: bold;
  }
`;

const Historico = ({ historico }) => {
  return (
    <HistoryContainer>
      <h1>Histórico</h1>
      {historico.map((medicacao, index) => (
        <HistoryItem key={index}>
          <div>
            <p>Data de Início: {medicacao.dataInicio}</p>
            <p>Data de Fim: {medicacao.dataFim}</p>
            <p>Hora de Início: {medicacao.horaInicio}</p>
          </div>
          <div>
            <p>Quantidade: {medicacao.quantidade}</p>
            <p>Intervalo: {medicacao.intervalo}</p>
            <p>Nome do Medicamento: {medicacao.nomeMedicamento}</p>
          </div>
        </HistoryItem>
      ))}
    </HistoryContainer>
  );
};

export default Historico;
