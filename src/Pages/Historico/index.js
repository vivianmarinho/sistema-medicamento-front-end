import React from 'react';

const DetalhesMedicacao = ({ medicacao, onEdit, onDelete }) => {
  return (
    <div className="detalhes-medicacao">
      <h2>Medicação</h2>
      <p>Data de Início: {medicacao.dataInicio}</p>
      <p>Data de Fim: {medicacao.dataFim}</p>
      <p>Hora de Início: {medicacao.horaInicio}</p>
      <p>Quantidade: {medicacao.quantidade}</p>
      <p>Intervalo: {medicacao.intervalo}</p>
      <p>Nome do Medicamento: {medicacao.nomeMedicamento}</p>
      <button onClick={onEdit}>Editar</button>
      <button onClick={() => onDelete(medicacao.idMedicacao)}>Excluir</button>
    </div>
  );
};

export default DetalhesMedicacao;
