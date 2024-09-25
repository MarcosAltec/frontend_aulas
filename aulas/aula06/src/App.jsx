import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Perfil from './pages/Perfil';
import Login from './pages/Login';
import Home from './pages/Home';
import Erro404 from './pages/Erro404';
import Leiaute from './pages/Leiaute';

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login/>} />
        <Route element={<Leiaute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />
        </Route>
        <Route path='*' element={<Erro404/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;