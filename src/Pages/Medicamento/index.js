import React, { useState } from 'react';
import { Container, Form, SubContainerSign } from './styles';
import Input from '../../Components/Input/index';
import Botao from '../../Components/Button';
import MedicamentoService from '../../Service/MedicamentoService';

const medicamentoService = new MedicamentoService();

const MedicamentoForm = () => {
  const [loading, setLoading] = useState(false);
  const [nome, setNome] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      // Chamar o serviço para cadastrar o medicamento
      const success = await medicamentoService.cadastrarMedicamento({ nome });

      if (success) {
        // Medicamento cadastrado com sucesso, você pode redirecionar ou exibir uma mensagem de sucesso
        console.log('Medicamento cadastrado com sucesso!');
      } else {
        // Tratar o erro ao cadastrar o medicamento
        console.error('Erro ao cadastrar o medicamento');
      }
    } catch (error) {
      console.error('Erro ao cadastrar o medicamento:', error);
    }

    setLoading(false);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nome do medicamento"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <Botao type="submit" disabled={loading}>
          Cadastrar Medicamento
        </Botao>
      </Form>
    </Container>
  );
};

export default MedicamentoForm;

