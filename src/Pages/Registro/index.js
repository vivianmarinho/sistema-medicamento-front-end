import React, { useState } from 'react';
import RegistroService from '../../Service/RegistroService';
import { Container, Form, SubContainerSign } from './styles'
import Input from '../../Components/Input/index';
import Botao from '../../Components/Button/index';
import { useNavigate } from 'react-router-dom';


const CadastroRegistro = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    
  
  });

  const registroService = new RegistroService();
  const navigate = useNavigate();

  const voltarHome = async (event) => {
    event.preventDefault();
    navigate('/home');
 };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      console.log(form)
      const { data } = await registroService.cadastrarRegistro({

        cpf: form.cpf,
        dataInicio: form.dataInicio,
        dataFim: form.dataFim,
        horaInicio: form.horaInicio,
        quantidade: form.quantidade,
        intervalo: form.intervalo,
        nomeMedicamento: form.nomeMedicamento,
      })

      if (data) {
        
        
          alert('Registro realizado')
          
        
    }
       
      setLoading(false);
    } catch (err) {
      alert('Algo deu errado com o cadastro: ' + err);
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    setForm({...form, [event.target.name]: event.target.value})
  }

 /*const validadorInput = () => {
    return validarNomeMedicamento(form.nomeMedicamento)
    && validarDataInicio(form.dataInicio)
    && validarDataFim(form.dataFim)
    && validarIntervalo(form.intervalo)
    && validarQuantidade(form.quantidade)
    && validarNome(form.nome)
  }*/

  return (
    <Container>
      <Form>
        <h1> Registrar Medicamento 👋</h1>
        <Input
          name='nomeMedicamento'
          placeholder='Nome do medicamento'
          onChange={handleChange}
          type='text'
        />
        <Input
          name='dataInicio'
          placeholder='Data de inicio'
          onChange={handleChange}
          type='localdate'
        />
        <Input
          name='dataFim'
          placeholder='Data fim'
          onChange={handleChange}
          type='localdate'
        />
        <Input
          name='quantidade'
          placeholder='Quantidade medicamento'
          onChange={handleChange}
          type='quantidade'
        />
        <Input
          name='intervalo'
          placeholder='Insira o intervalo'
          onChange={handleChange}
          type='localTime'
        />
       
        <Botao
          type='submit'
          text='Efetuar Registro'
          onClick={handleSubmit}
          
        />

        <Botao
          type='submit'
          text='Voltar'
          onClick={voltarHome}
          
        />
        
      </Form>
    </Container>
    
  )
}


export default CadastroRegistro;
