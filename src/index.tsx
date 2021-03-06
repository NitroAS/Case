import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Assets/CSS/global.css'

// import {ProtectedRoute} from './Components/AuthBlock/authBlock'

// Rotas
import { Home } from './Pages/Home/home'
import { Locadora } from './Pages/locadora/locadora'
import { Carros } from './Pages/carros/carros';
import { Login } from './Pages/login/login';
import { Perfil } from './Pages/Perfil/perfil'
import { PerfilUsuario } from './Pages/PerfilUsuario/perfilUsuario'
import { Reserva } from './Pages/Reserva/reserva'
import { ReservaUsuario } from './Pages/ReservaUsuario/reservasUsuario'
import { CarrosUsuario } from './Pages/CarrosUsuario/carrosUsuario';
const Rotas = () =>{

  return(
    <BrowserRouter>
          <Routes>
              <Route element={<Home/>} path="/"/>
              <Route element={<Login/>} path="/login" />
              
              {/* <Route path='/perfil' element={
                <ProtectedRoute children={<Perfil/>}></ProtectedRoute>
              }>
              </Route>
              <Route path='/locadora' element={
                <ProtectedRoute children={<Locadora/>}></ProtectedRoute>
              }>
              </Route>
              <Route path='/reservas' element={
                <ProtectedRoute children={<Reserva/>}></ProtectedRoute>
              }>
              </Route>
              <Route path='/carros' element={
                <ProtectedRoute children={<Carros/>}></ProtectedRoute>
              }>
              </Route> */}
              
              {/* rotas antigas */}
              <Route element={<Carros/>} path="/carros" />
              <Route element={<Locadora/>} path="/locadora" />
              <Route element={<Perfil/>} path="/perfil" />
              <Route element={<Reserva/>} path="/reservas" />
              <Route element={<PerfilUsuario/>} path="/perfilUsuario" />
              <Route element={<ReservaUsuario/>} path="/ReservasUsuario" />
              <Route element={<CarrosUsuario/>} path="/CarrosUsuario" />
          </Routes>
      </BrowserRouter>
  );
}

ReactDOM.render(<Rotas/> , document.getElementById('root'));



