import ReactDOM from 'react-dom';
import './Assets/CSS/global.css'
import { Home } from './Pages/Home/home'
import { Login } from './Pages/login/login'
import { Perfil } from './Pages/perfil/perfil'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Reserva} from './Pages/Reserva/reserva'


const Rotas = () =>{

  return(
    <BrowserRouter>
          <Routes>
              <Route element={<Home/>} path="/"/>
              <Route element={<Login />} path="/Usuarios" />
              <Route element={<Perfil />} path="/perfil" />
              <Route element={<Reserva />} path="/reserva" />
             
          </Routes>
      </BrowserRouter>
  );
  
}

ReactDOM.render(<Rotas/> , document.getElementById('root'));



