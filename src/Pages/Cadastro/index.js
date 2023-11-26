import React, {useState} from 'react'
import { Container, Form, SubContainerSign } from './styles'
import Input from '../../Components/Input/index'
import Botao from '../../Components/Button/index'
import { validarCpf, validarSenha, validarTelefone, validarNome, validarConfirmarSenha, validarEmail } from '../../Utils/validadores'
import { NavLink, useNavigate } from 'react-router-dom'
import UserService from '../../Service/UserService'



const userService = new UserService();


const Cadastro = () => {
  const [loading, setLoading] = useState()
  const [form, setForm] = useState([])
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true)
      const { data } = await userService.cadastrar({
        nome: form.nome,
        cpf: form.cpf,
        telefone: form.telefone,
        email: form.email,
        senha: form.senha,
      })
      if (data) {
        const responseLogin = await userService.login({
          cpf: form.cpf,
          senha: form.senha
        })
        if (responseLogin === true) {
          alert('usuário Cadastrado com Sucesso')
          navigate('/home')
        }
    }
      setLoading(false)
    }
    catch (err) {
      alert('Algo deu errado com o Cadastro' + err)
    }
  }

  const handleChange = (event) => {
    setForm({...form, [event.target.name]: event.target.value})
  }

  const validadorInput = () => {
    return validarCpf(form.cpf)
    && validarSenha(form.senha)
    && validarTelefone(form.telefone)
    && validarEmail(form.email)
    && validarConfirmarSenha(form.password, form.confirmarPassword)
    && validarNome(form.nome)
  }

  return (
    <Container>
      <Form>
        <h1>Faça o seu Cadastro 👋</h1>
        <Input
          name='cpf'
          placeholder='Digite o seu cpf'
          onChange={handleChange}
          type='text'
        />
        <Input
          name='nome'
          placeholder='Digite o seu nome'
          onChange={handleChange}
          type='text'
        />
        <Input
          name='telefone'
          placeholder='Digite o seu telefone'
          onChange={handleChange}
          type='number'
        />
        <Input
          name='email'
          placeholder='Digite o seu e-mail'
          onChange={handleChange}
          type='email'
        />
        <Input
          name='senha'
          placeholder='Digite a sua senha'
          onChange={handleChange}
          type='password'
        />
        <Input
          name='confirmarSenha'
          placeholder='Confirme a sua senha'
          onChange={handleChange}
          type='password'
        />
        <Botao
          type='submit'
          text='Efetuar Cadastro!'
          onClick={handleSubmit}
          
        />
        <SubContainerSign>
          <p>Já possui conta?</p>
          <NavLink to="*">Login</NavLink>
        </SubContainerSign>
      </Form>
    </Container>
    
  )
}

export default Cadastro;