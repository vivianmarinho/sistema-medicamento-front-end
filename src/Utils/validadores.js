const validarCpf = (cpf) => {
    return cpf?.toString().length >= 11
  }

const validarEmail = (email) => {
    return email?.toString().includes('@') && email?.toString().includes('.')
  }
  
  const validarSenha = (senha) => {
    return senha?.toString().length > 6
  }
  
  const validarNome = (nome) => {
    return nome?.toString().length > 2
  }
  
  const validarTelefone = (telefone) => {
    return telefone?.toString().length >= 8
  }
  
  const validarConfirmarSenha = (senha, confirmarSenha) => {
    return validarSenha(senha) && senha === confirmarSenha
  }
  
  export {
    validarCpf,
    validarEmail,
    validarSenha,
    validarNome,
    validarTelefone,
    validarConfirmarSenha
  }