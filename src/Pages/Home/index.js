import React, { useState } from 'react';
import { Container, Form } from './styles';
import Botao from '../../Components/Button/index';
import { useNavigate } from 'react-router-dom';
import HistoricoService from '../../Service/HistoricoService';

const historicoService = new HistoricoService();


const DetalhesMedicacao = ({ medicacao, onDelete }) => {
  const [editing, setEditing] = useState(false);
  const [editedMedicacao, setEditedMedicacao] = useState(medicacao);
  const [historico, setHistorico] = useState([]);

 const handleChange = (e) => {
  const { name, value } = e.target;
  setEditedMedicacao(prevState => ({
    ...prevState,
    [name]: value
  }));
};
const handleSave = async () => {
  try {
    // Faça uma cópia do histórico atualizado
    const updatedHistorico = historico.map(medicacao => {
      if (medicacao.id === editedMedicacao.idMedicacao) {
        return editedMedicacao;
      }
      return medicacao;
    });

    // Atualize o estado historico com os itens atualizados
    setHistorico(updatedHistorico);

    // Chamando o serviço para salvar as alterações
    await historicoService.editarHistorico(editedMedicacao.idMedicacao, editedMedicacao);

    console.log("Medicação editada com sucesso!");
  } catch (error) {
    console.error("Erro ao editar medicação:", error);
  }
};

  return (
    <div className="detalhes-medicacao">
      {editing ? (
        <div>
          <h2>Editar Medicação</h2>
          <label><b>Data de Início: </b>
            <input type="text" name="dataInicio" value={editedMedicacao.dataInicio} onChange={handleChange} />
          </label><br />
          <label><b>Data de Fim: </b>
            <input type="text" name="dataFim" value={editedMedicacao.dataFim} onChange={handleChange} />
          </label><br />
          <label><b>Hora de Início: </b>
            <input type="text" name="horaInicio" value={editedMedicacao.horaInicio} onChange={handleChange} />
          </label><br />
          <label><b>Quantidade: </b>
            <input type="text" name="quantidade" value={editedMedicacao.quantidade} onChange={handleChange} />
          </label><br />
          <label><b>Intervalo: </b> 
            <input type="text" name="intervalo" value={editedMedicacao.intervalo} onChange={handleChange} />
          </label><br />
          <label><b>Nome do Medicamento: </b>
            <input type="text" name="nomeMedicamento" value={editedMedicacao.nomeMedicamento} onChange={handleChange} />
          </label><br />
          <button onClick={handleSave}>Salvar</button>
          <button onClick={() => setEditing(false)}>Cancelar</button>
        </div>
      ) : (
        <div>
          <h2>Medicação</h2>
          <p>Data de Início: {medicacao.dataInicio}</p>
          <p>Data de Fim: {medicacao.dataFim}</p>
          <p>Hora de Início: {medicacao.horaInicio}</p>
          <p>Quantidade: {medicacao.quantidade}</p>
          <p>Intervalo: {medicacao.intervalo}</p>
          <p>Nome do Medicamento: {medicacao.nomeMedicamento}</p>
          <button onClick={() => setEditing(true)}>Editar</button>
          <button onClick={() => onDelete(medicacao.idMedicacao)}>Excluir</button>
        </div>
      )}
    </div>
  );
};

const Home = () => {
  const [historico, setHistorico] = useState([]);
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);
  const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false);
  const navigate = useNavigate();

  const registroMedicamento = async (event) => {
    event.preventDefault();
    navigate('/registro');
  };

  const buscarHistorico = async (event) => {
    event.preventDefault();
    try {
      const responseHistorico = await historicoService.buscarHistorico();
      setHistorico(responseHistorico);
      setMostrarDetalhes(true);
    } catch (error) {
      console.error("Erro ao buscar histórico:", error);
    }
  };

  const handleDelete = async (idMedicacao) => {
    try {
      await historicoService.apagarHistorico(idMedicacao);
      setHistorico(historico.filter(medicacao => medicacao.id !== idMedicacao));
    } catch (error) {
      console.error("Erro ao excluir medicação:", error);
    }
  };

  const handleLogoff = () => {
    localStorage.removeItem('usuarioToken');
    navigate('/login');
  };

  const fecharDetalhes = () => {
    setMostrarDetalhes(false);
  };

  const confirmarMedicacoesTomadas = () => {
    setMostrarConfirmacao(true);
  };

  const handleSim = () => {
    setMostrarConfirmacao(false); 
    confirmar();
  };

  const handleNao = () => {
    setMostrarConfirmacao(false);
  };

  const confirmar = () => {
    
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
            <h3>Historico</h3>
            {historico.map((medicacao, index) => (
              <div key={index}>
                <DetalhesMedicacao medicacao={medicacao} onDelete={handleDelete} />
                <hr />
              </div>
            ))}
            <Botao
              text='Fechar' 
              onClick={fecharDetalhes}
            />
          </div>
        )}
        {mostrarConfirmacao && (
          <div>
            <p>VOCÊ TOMOU SUA MEDICAÇÃO?</p>
            <Botao text='SIM' onClick={handleSim}/>
            <Botao text='NÃO' onClick={handleNao}/>
          </div>
        )}
        {!mostrarConfirmacao && (
          <Botao text='Medicações Tomadas' onClick={confirmarMedicacoesTomadas} />
        )}
        <Botao text='Logoff' onClick={handleLogoff} />
        <div>
          <p><b>Para receber notificações sobre suas medicações no WhatsApp, por favor, envie a mensagem JOIN THINK-FOUND para o número +14155238886</b></p>
        </div>
      </Form>
    </Container>
  );
};

export default Home;
