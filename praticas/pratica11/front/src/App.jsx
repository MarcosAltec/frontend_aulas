import { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import Registrar from './pages/Registrar';
import Home from './pages/Home';
import Perfil from './pages/Perfil';
import Erro404 from './pages/Erro404';

function App() {
  const {usuario} = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        {!usuario.logado ? (
          <>
            <Route path='/login' element={<Login />}/>
            <Route path='/registrar' element={<Registrar />}/>
          </>
        ) : (
          <>
            <Route path='/home' element={<Home />}/>
            <Route path='/perfil/:id' element={<Perfil />}/>
          </>
        )}
        <Route path='*' element={<Erro404 />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;