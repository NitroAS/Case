import { useEffect } from 'react';
import '../../Assets/CSS/login.css'
import logo from '../../Assets/img/logo.png';
import HandleCredentialResponse from '../../services/googleAuth';
import { Link } from "react-router-dom";

export const Login = ():JSX.Element =>{
  useEffect(()=>{    
    HandleCredentialResponse()
  },[]
  )

    return(
        <>
            <div className='centralizarLogin'>
                <div className='login'>
                    <div className='centralizarLogo'>
                      <img src={logo} alt="logo"/>
                    </div>
                    <section className='loginCadastrar'>
                      <div className='centralizarLoginCadastrar'>
                        <div className='cardLogin'>
                          <h2 className='tituloLogin'>Login</h2>
                          <p className='textoLogin'>Este portal oferece uma experiência única, segura e oferta um serviço de qualidade!</p>
                          <div id="buttonDiv"></div>
                        </div>

                        <div className='cardCadastrar'>
                          <h2 className='tituloCadastrar'>Cadastrar</h2>
                          <input placeholder='Nome Completo' className='inputCadastrar' type="text"/>
                          <input placeholder='Telefone' className='inputCadastrar' type="text"/>
                          <input placeholder='E-mail' className='inputCadastrar' type="text"/>
                          <Link className='botaoCadastrar' to='/perfil'>Cadastrar</Link>
                        </div>
                      </div>  
                    </section>
                </div>
            </div>
        </>
    );
}

export default Login