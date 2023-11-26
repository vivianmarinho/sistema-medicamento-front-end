import axios from 'axios';

export default class UserServices {
  constructor() {
    const baseURL = new URL('http://localhost:8080');
    baseURL.pathname = process.env.REACT_APP_API_LOGIN || '';
    this.axios = axios.create({ baseURL: baseURL.toString() });
  }

  async cadastrarMedicamento(dados) {
    try {
      const { data } = await this.axios.post('/medicamento', dados);
      if (data && data.success)  { console.log("Medicamento cadastrado com sucesso:", data.message);
            //localStorage.setItem("token", data.token);
        
        return true;
      }
    } catch (error) {
      console.error("Erro ao tentar inserir o medicamento:", error);
    }
    return false;
  }

 
}