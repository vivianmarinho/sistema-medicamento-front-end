import React, { useState } from 'react';
import { Container, Form } from './styles';
import Botao from '../../Components/Button/index';
import { useNavigate } from 'react-router-dom';
import HistoricoService from '../../Service/HistoricoService';
import Historico from '../Historico';

const historicoService = new HistoricoService();

const DetalhesMedicacao = ({ medicacao }) => {
  return (
    <div className="detalhes-medicacao">
      <h2>Detalhes da Medicação</h2>
      <p>Data de Início: {medicacao.dataInicio}</p>
      <p>Data de Fim: {medicacao.dataFim}</p>
      <p>Hora de Início: {medicacao.horaInicio}</p>
      <p>Quantidade: {medicacao.quantidade}</p>
      <p>Intervalo: {medicacao.intervalo}</p>
      <p>Nome do Medicamento: {medicacao.nomeMedicamento}</p>
    </div>
  );
};

const Home = () => {
  const [historico, setHistorico] = useState([]);
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);
  const [medicacaoSelecionada, setMedicacaoSelecionada] = useState(null);

  const navigate = useNavigate();

  const registroMedicamento = async (event) => {
    event.preventDefault();
    navigate('/registro');
  };

  const buscarHistorico = async (event) => {
    event.preventDefault();
    try {
      const responseHistorico = await historicoService.buscarHistorico();
      setHistorico(responseHistorico); // Armazenar o histórico no estado
      setMostrarDetalhes(true); // Mostrar os detalhes ao receber o histórico
    } catch (error) {
      console.error("Erro ao buscar histórico:", error);
    }
  };

  const fecharDetalhes = () => {
    setMostrarDetalhes(false);
    setMedicacaoSelecionada(null);
  };

  return (
    <Container>
      <Form>
        <h1>MENU 👋</h1>
        
        <Botao
          type='submit'
          text='Registrar Medicamentos!'
          onClick={registroMedicamento}
        />

        <Botao
          type='submit'
          text='Historico'
          onClick={async (event) => await buscarHistorico(event)}
        />

        {mostrarDetalhes && (
          <div>
            <h2>Detalhes do Histórico</h2>
            {historico.map((medicacao, index) => (
              <div key={index}>
                <DetalhesMedicacao medicacao={medicacao} />
                <hr />
              </div>
            ))}
            <button onClick={fecharDetalhes}>Fechar</button>
            
          </div>
        )}
        
      </Form>

      
      
    </Container>
    
  );
};

export default Home;
