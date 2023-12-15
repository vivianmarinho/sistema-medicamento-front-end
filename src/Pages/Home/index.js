import React,  { useEffect, useCallback } from 'react';
import { Container, Form } from './styles'
import Botao from '../../Components/Button/index';
import { useNavigate } from 'react-router-dom';
import HistoricoService from '../../Service/HistoricoService'

const historicoService = new HistoricoService()

const Home = () => {
 
 const navigate = useNavigate();

 const registroMedicamento = async (event) => {
    event.preventDefault();
    navigate('/registro');
 };
const buscarHistorico = useCallback(async (event) => {
  //event.preventDefault();
  try {
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    const responseHistorico = await historicoService.buscarHistorico();
    // Lógica com a resposta do histórico, se necessário
  } catch (error) {
    console.error("Erro ao executar:", error);
  }
}, []); // Se você tiver dependências, coloque-as dentro do array vazio

useEffect(() => {
  const fetchData = async () => {
    try {
      console.log("Chamando buscarHistorico");
      await buscarHistorico();
    } catch (error) {
      console.error("Erro ao executar:", error);
    }
  };

  fetchData(); // Chama a função ao montar o componente

  return () => {
    // Lógica de limpeza (executada ao desmontar)
  };
}, [buscarHistorico]);


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
          onClick={buscarHistorico}
          
        />
       
      </Form>
    </Container>
    
  )
}

export default Home;
