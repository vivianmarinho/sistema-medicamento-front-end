import axios from 'axios';
import UserServices from '../Service/UserService';

export default class HistoricoService {
  constructor() {
    const baseURL = new URL('http://localhost:8080');
    baseURL.pathname = process.env.REACT_APP_API_LOGIN || '';
    this.axios = axios.create({ baseURL: baseURL.toString() });
    const token =  localStorage.getItem("token");
    this.axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
}

  async buscarHistorico() {
    try {
      console.log(this.axios)
           
      // Antes de realizar a busca, você pode enviar o token no cabeçalho da requisição
      //this.axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      // Realiza a chamada para o endpoint que busca o histórico
      const response = await this.axios.get('/medicacao/historico/medicacao');

     // if (response.data && response.data.success) {
        // Se a busca for bem-sucedida, retorna os dados obtidos
       // return response.data.message; // ou outra parte da resposta que contenha os dados do histórico
     // } else {
       // throw new Error('Erro ao buscar o histórico');
     // } 
     return response
    } catch (error) {
      throw new Error('Erro ao buscar o histórico: ' + error.message);
    }
  }


 
}