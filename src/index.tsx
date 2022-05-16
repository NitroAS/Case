import ReactDOM from 'react-dom';
import './Assets/CSS/global.css'

// Rotas
import { Home } from './Pages/Home/home'
import { Login } from './Pages/login/login'
import { Carros } from './Pages/carros/carros';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


const Rotas = () =>{

  return(
    <BrowserRouter>
          <Routes>
              <Route element={<Home/>} path="/"/>
              <Route element={<Login />} path="/Usuarios" />
              <Route element={<Carros />} path="/Carros" />
          </Routes>
      </BrowserRouter>
  );
  
}

ReactDOM.render(<Rotas/> , document.getElementById('root'));



