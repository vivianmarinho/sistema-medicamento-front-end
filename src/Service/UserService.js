import axios from 'axios';

export default class UserServices {
  constructor() {
    const baseURL = new URL('http://localhost:8080');
    baseURL.pathname = process.env.REACT_APP_API_LOGIN || '';
    this.axios = axios.create({ baseURL: baseURL.toString() });
  }

  async login(dados) {
    try {
      const { data } = await this.axios.post('/auth/usuario', dados);
      if (data) { console.log(data)
        //localStorage.setItem("cpf", data.user.cpf);
       // localStorage.setItem("senha", data.user.senha);
        localStorage.setItem("token", data.token);
        //localStorage.setItem("cpf", data.data.cpf);
        return true;
      }
    } catch (error) {
      console.error("Erro no login:", error);
    }
    return false;
  }

  async cadastrar(dados) {
    try {
      return await this.axios.post('auth/register', dados);
    } catch (error) {
      console.error("Erro no cadastro:", error);
      throw error;
    }
  }

  usuarioAutenticado() {
    return !!localStorage.getItem("token");
  }

  getUserId(){
    return !!localStorage.getItem("")
  }

  async logout() {
    localStorage.removeItem("cpf");
    localStorage.removeItem("senha");
    localStorage.removeItem("token");
  }
}
