import ReactDOM from 'react-dom';
import './Assets/CSS/global.css'
import { Home } from './Pages/Home/home'
import { Login } from './Pages/login/login'
import { Carros } from './Pages/Carros/carros'
import { Locadora } from './Pages/Locadora/locadora'
import { Perfil } from './Pages/Perfil/perfil'
import { Reservas } from './Pages/Reservas/reservas'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const Rotas = () =>{

  return(
    <BrowserRouter>
          <Routes>
              <Route element={<Home/>} path="/"/>
              <Route element={<Login/>} path="/login" />
              <Route element={<Carros/>} path="/carros" />
              <Route element={<Locadora/>} path="/locadora" />
              <Route element={<Perfil/>} path="/perfil" />
              <Route element={<Reservas/>} path="/reservas" />
          </Routes>
      </BrowserRouter>
  );
  
}

ReactDOM.render(<Rotas/> , document.getElementById('root'));



