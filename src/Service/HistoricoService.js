import axios from 'axios';

export default class HistoricoService {
  constructor() {
    const baseURL = new URL('http://localhost:8080');
    baseURL.pathname = process.env.REACT_APP_API_LOGIN || '';
    this.axios = axios.create({ baseURL: baseURL.toString() });
    const token =  localStorage.getItem("token");
    this.axios.defaults.headers.common['Authorization'] = `${token}`;
    
}

  async buscarHistorico() {
    try {
            
      const response = await this.axios.get('/medicacao/historico/medicacao');
     
     return response.data
    } catch (error) {
      throw new Error('Erro ao buscar o histórico: ' + error.message);
    }
  }

}