import '../../Assets/CSS/login.css'
import logo from '../../Assets/img/logo.png';

export const Login = ():JSX.Element =>{

    return(
        <>
            <div className='centralizarLogin'>
                <div className='login'>
                    <div className='centralizarLogo'>
                      <img src={logo} alt="logo"/>
                    </div>
                    <section className='loginCadastrar'>
                      <div className='cardLogin'>
                        <h2 className='tituloLogin'>Login</h2>
                        <p className='textoLogin'>Este portal oferece uma experiência única, segura e oferta um serviço de qualidade!</p>

                      </div>
                      <div className='cardCadastrar'>
                        <h2 className='tituloCadastrar'>Cadastrar</h2>
                        <input placeholder='Nome Completo' className='inputCadastrar' type="text"/>
                        <input placeholder='Telefone' className='inputCadastrar' type="text"/>
                        <input placeholder='E-mail' className='inputCadastrar' type="text"/>
                      </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export default Login