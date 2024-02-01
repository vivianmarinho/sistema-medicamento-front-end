import React from 'react'
import Login from '../Pages/Login/index'
import ProtectedRoutes from '../Routes/ProtectedRoutes'
import Cadastro from '../Pages/Cadastro/index'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CadastroRegistro from '../Pages/Registro'
import Home from '../Pages/Home'
import BuscaHistorico from '../Pages/Historico'




const Routering = () => {
  return ( 
    <Router>
      <Routes>
        <Route path="*" element={<Login/>} />
        <Route path="/cadastrar" element={<Cadastro/>} />
        <Route path="/home" element={
          <ProtectedRoutes>
          <Home/>
        </ProtectedRoutes>
          }
        />

        <Route path="/registro" element={
          <ProtectedRoutes>
            <CadastroRegistro/>
          </ProtectedRoutes>
          }
        />

      <Route path="/historico" element={
          <ProtectedRoutes>
            <BuscaHistorico/>
          </ProtectedRoutes>
          }
        />

        
      </Routes>
    </Router>
   );
}
 
export default Routering;