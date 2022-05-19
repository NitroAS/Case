import { useEffect } from 'react';
import '../../Assets/CSS/login.css'
import logo from '../../Assets/img/logo.png';
import HandleCredentialResponse from '../../services/googleAuth';


export const Login = ():JSX.Element =>{
  useEffect(()=>{    
    HandleCredentialResponse()
  },[])

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
                          <input placeholder='Nome Completo' className='inputCadastrarLogin' type="text"/>
                          <input placeholder='Telefone' className='inputCadastrarLogin' type="text"/>
                          <input placeholder='E-mail' className='inputCadastrarLogin' type="text"/>
                          <button className='botaoCadastrarLogin'>Cadastrar</button>
                        </div>
                      </div>  
                    </section>
                </div>
            </div>
        </>
    );
}

export default Login