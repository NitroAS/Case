import ReactDOM from 'react-dom';
import './Assets/CSS/global.css'
import { Home } from './Pages/Home/home'
import { Login } from './Pages/login/login'
import { Perfil } from './Pages/perfil/perfil'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const Rotas = () =>{

  return(
    <BrowserRouter>
          <Routes>
              <Route element={<Home/>} path="/"/>
              <Route element={<Login />} path="/Usuarios" />
              <Route element={<Perfil />} path="/perfil" />
             
          </Routes>
      </BrowserRouter>
  );
  
}

ReactDOM.render(<Rotas/> , document.getElementById('root'));



