import React,  { useEffect, useCallback } from 'react';
import { Container, Form } from './styles'
import Botao from '../../Components/Button/index';
import { useNavigate } from 'react-router-dom';
import HistoricoService from '../../Service/HistoricoService'

const historicoService = new HistoricoService()


const Home = () => {
  const medicacoes = []
 
 const navigate = useNavigate();

 const registroMedicamento = async (event) => {
    event.preventDefault();
    navigate('/registro');
 };
 const buscarHistorico = async (event) => {
  event.preventDefault();
  await historico();
};

const historico = useCallback(async () => {
  try {
    const responseHistorico = await historicoService.buscarHistorico();
    console.log(responseHistorico);
  } catch (error) {
    console.error("Erro ao executar:", error);
  }
}, []);


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

       
      </Form>

     
    </Container>
    
  )
}

export default Home;
