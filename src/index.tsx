import ReactDOM from 'react-dom';
import './Assets/CSS/global.css'
import { Home } from './Pages/Home/home'
import { Pag2 } from './Pages/Pag2/pag2'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const Rotas = () =>{

  return(
    <BrowserRouter>
          <Routes>
              <Route element={<Home/>} path="/"/>
              <Route element={<Pag2  />} path="/Usuarios" />
             
          </Routes>
      </BrowserRouter>
  );
  
}

ReactDOM.render(<Rotas/> , document.getElementById('root'));



