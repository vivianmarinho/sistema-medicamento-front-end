import React, { useState } from 'react';
import { Container, Form } from './styles';
import Botao from '../../Components/Button/index';
import { useNavigate } from 'react-router-dom';
import HistoricoService from '../../Service/HistoricoService';


const historicoService = new HistoricoService();

const DetalhesMedicacao = ({ medicacao, onDelete, onEdit }) => {
  const [editing, setEditing] = useState(false);
  const [editedMedicacao, setEditedMedicacao] = useState(medicacao);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedMedicacao(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Aqui você pode enviar a requisição para atualizar a medicação no servidor
      await historicoService.editarMedicacao(editedMedicacao.idMedicacao, editedMedicacao);
      console.log("Medicação editada com sucesso!");

      // Se a edição for bem-sucedida, você pode chamar uma função de callback para atualizar o estado no componente pai, se necessário
      onEdit(editedMedicacao);
    } catch (error) {
      console.error("Erro ao editar medicação:", error);
    }
    setEditing(false);
  };

  return (
    <div className="detalhes-medicacao">
      {editing ? (
        <div>
          <h2>Editar Medicação</h2>
          <form onSubmit={handleSubmit}>
            <label><b>Data de Início: </b>
              <input type="text" name="dataInicio" value={editedMedicacao.dataInicio} onChange={handleChange} />
            </label><br></br>
            <label><b>Data de Fim: </b>
              <input type="text" name="dataFim" value={editedMedicacao.dataFim} onChange={handleChange} />
            </label><br></br>
            <label><b>Hora de Início: </b>
              <input type="text" name="horaInicio" value={editedMedicacao.horaInicio} onChange={handleChange} />
            </label><br></br>
            <label><b>Quantidade: </b>
              <input type="text" name="quantidade" value={editedMedicacao.quantidade} onChange={handleChange} />
            </label><br></br>
            <label><b>Intervalo: </b> 
              <input type="text" name="intervalo" value={editedMedicacao.intervalo} onChange={handleChange} />
            </label><br></br>
            <label><b>Nome do Medicamento: </b>
              <input type="text" name="nomeMedicamento" value={editedMedicacao.nomeMedicamento} onChange={handleChange} />
            </label><br></br>
            <button type="submit">Salvar</button>
            <button onClick={() => setEditing(false)}>Cancelar</button>
          </form>
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
  const [medicacaoSelecionada, setMedicacaoSelecionada] = useState(null);
  const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false); // Corrigido: Definindo o estado para a confirmação
  const [delecaoBemSucedida, setDelecaoBemSucedida] = useState({ id: null, mensagem: '' }); // Definindo o estado para a confirmação
  
    
 const navigate = useNavigate();

  const registroMedicamento = async (event) => {
    event.preventDefault();
    navigate('/registro');
  };



  const buscarHistorico = async (event) => {
    event.preventDefault();
    try {
      const responseHistorico = await historicoService.buscarHistorico();
      setHistorico(responseHistorico); // Armazenar o histórico 
      setMostrarDetalhes(true); // Mostrar os detalhes ao receber o histórico
    } catch (error) {
      console.error("Erro ao buscar histórico:", error);
    }
  };

  const handleDelete = async (idMedicacao) => {
    try {
      console.log(idMedicacao); // Verifique se o ID está sendo passado corretamente
  
      // Enviar a solicitação DELETE para excluir a medicação com base no ID
      await historicoService.apagarHistorico(idMedicacao);
  
      // Remover a medicação do estado após a exclusão bem-sucedida
      setHistorico(historico.filter(medicacao => medicacao.id !== idMedicacao));
  
      // Atualizar o estado para mostrar a mensagem de exclusão bem-sucedida
      setDelecaoBemSucedida({ id: idMedicacao, mensagem: `Medicação com ID ${idMedicacao} deletada com sucesso.` });
    } catch (error) {
      console.error("Erro ao excluir medicação:", error);
    }
  };

  const handleEdit = async (editedMedicacao) => {
    try {
      // Enviar a solicitação PUT ou PATCH para atualizar a medicação no servidor
      await historicoService.editarMedicacao(editedMedicacao);
  
      // Atualizar a medicação no estado após a edição bem-sucedida
      setHistorico(historico.map(medicacao => {
        if (medicacao.id === editedMedicacao.id) {
          return editedMedicacao;
        }
        return medicacao;
      }));
  
      console.log("Medicação editada com sucesso!");
    } catch (error) {
      console.error("Erro ao editar medicação:", error);
    }
  };

  const fecharDetalhes = () => {
    setMostrarDetalhes(false);
    setMedicacaoSelecionada(null);
  };

  const confirmarMedicacoesTomadas = () => {
    setMostrarConfirmacao(true); // Mostrar a tela de confirmação ao clicar em "Medicações Tomadas"
  };

  const handleSim = () => {
    // Lógica para confirmar as medicações tomadas
    setMostrarConfirmacao(false); 
    confirmar();// Esconde a tela de confirmação após confirmar
  };

  const handleNao = () => {
    setMostrarConfirmacao(false); // Esconde a tela de confirmação se o usuário optar por não confirmar
  };

  const confirmar = () => {
    // Lógica a ser executada após a confirmação
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
                <DetalhesMedicacao medicacao={medicacao} 
                                  
                                  onDelete={handleDelete}/>
                
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

        {!mostrarConfirmacao && ( // Renderiza o botão 'Medicações Tomadas' se não estiver na tela de confirmação
          <Botao text='Medicações Tomadas' onClick={confirmarMedicacoesTomadas} />
        )}

      <div>
          <p><b>Para receber notificações sobre suas medicações no WhatsApp, por favor, envie a mensagem JOIN THINK-FOUND para o número +15677496169</b></p>
       </div>
        
      </Form>

     

      
      
    </Container>
    
  );
};


export default Home;
