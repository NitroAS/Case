import ReactDOM from 'react-dom';
import './Assets/CSS/global.css'

// Rotas
import { Home } from './Pages/Home/home'
import { Login } from './Pages/login/login'
import { Carros } from './Pages/carros/carros'
import { Locadora } from './Pages/Locadora/locadora'
import { Perfil } from './Pages/Perfil/perfil'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Reserva } from './Pages/Reserva/reserva'


const Rotas = () =>{

  return(
    <BrowserRouter>
          <Routes>
              <Route element={<Home/>} path="/"/>
              <Route element={<Login/>} path="/login" />
              <Route element={<Carros/>} path="/carros" />
              <Route element={<Locadora/>} path="/locadora" />
              <Route element={<Perfil/>} path="/perfil" />
              <Route element={<Reserva/>} path="/reservas" />
          </Routes>
      </BrowserRouter>
  );
  
}

ReactDOM.render(<Rotas/> , document.getElementById('root'));



