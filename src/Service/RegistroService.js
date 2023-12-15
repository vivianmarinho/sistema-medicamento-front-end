import axios from 'axios';

export default class RegistroService {
  constructor() {
    const baseURL = new URL('http://localhost:8080');
    baseURL.pathname = process.env.REACT_APP_API_LOGIN || '';
    this.axios = axios.create({ baseURL: baseURL.toString() });
    const token =  localStorage.getItem("token");
    this.axios.defaults.headers.common['Authorization'] = `${token}`;
  }

  async cadastrarRegistro(dados) {
    try {
      const { data } = await this.axios.post('/medicacao', dados);
      if (data && data.success)  { console.log("Medicamento cadastrado com sucesso:", data.message);
      
              
        
        return true;
      }
    } catch (error) {
      console.error("Erro ao tentar inserir o registro:", error);
    }
    return false;
  }

  
 
}