import { useEffect, useState } from 'react';
import '../../Assets/CSS/login.css'
import logo from '../../Assets/img/logo.png';
import HandleCredentialResponse from '../../services/googleAuth';
import { Footer } from '../../Components/Footer/footer'
import { apiCase } from '../../services/api';
import Swal from 'sweetalert2'


export const Login = (): JSX.Element => {

  useEffect(() => {
    HandleCredentialResponse()
    let token: any = localStorage.getItem('token')
    console.log(JSON.parse(token))
  }, []
  )
  
  const [usuarioCadastro, setusuarioCadastro] = useState<any[]>([]);
  const PegandoUsuarioCadastro = () => {
      apiCase.get('usuario')
          .then(resultado => {
            setusuarioCadastro(resultado.data)

          })
  }

  useEffect(() => {
    PegandoUsuarioCadastro()
}, [])



const [nomeUsuario, setNomeUsuario] = useState('');
const [nomeEmail, setNomeEmail] = useState('');
const [telefone, setTelefone] = useState('')

const CadastrarPerfil = () => {
  for (let index = 0; index < usuarioCadastro.length; index++) {
      if (usuarioCadastro[index].nome === nomeUsuario) {
          return
      }
  }

  if (nomeUsuario !== '' && nomeEmail !== '' && telefone !== '') {

      apiCase.post(`usuario`, { nome: nomeUsuario, telefone: telefone , email: nomeEmail })
          .then(() => {
              window.location.replace('/perfilUsuario')

          })

  }

  else{
    Swal.fire({
      title: 'Por Favor, Preencha os campos vazios',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DB1812',
      cancelButtonColor: '#41B8D2',
      confirmButtonText: 'OK'
  })
  }
}

  return (
    <>
      <div className='centralizarLogin'>
        <div className='login'>
          <div className='centralizarLogo'>
            <img src={logo} alt="logo" />
          </div>
          <section className='loginCadastrar'>
            <div className='centralizarLoginCadastrar'>
              <div className='cardLogin'>
                <h2 className='tituloLogin'>Login</h2>
                <p className='textoLogin'>
                  Este portal oferece uma experiência única, segura e oferta um serviço de qualidade!
                </p>
                <div id="buttonDiv">
                </div>
              </div>

              <div className='cardCadastrar'>
                <h2 className='tituloCadastrar'>Cadastrar</h2>
                <div className='alinhamentoButtonInputLogin'>
                  <div className='alinharInputsLogin'>
                    <input  
                    placeholder='Nome Completo' 
                    className='inputCadastrarLogin' 
                    type="text" 
                    defaultValue={nomeUsuario}
                    onChange={e => setNomeUsuario(e.target.value)}
                    minLength={3}
                    maxLength={22}
                    />
                    <input 
                    placeholder='Telefone' 
                    className='inputCadastrarLogin' 
                    type="text" 
                    defaultValue={telefone}
                    onChange={e => setTelefone(e.target.value)}
                    minLength={10}
                    maxLength={15}
                    
                    />
                    <input 
                    placeholder='E-mail' 
                    className='inputCadastrarLogin'
                    type="text"
                    defaultValue={nomeEmail}
                    onChange={e => setNomeEmail(e.target.value)}
                    minLength={10}
                    maxLength={40}
                   />
                  </div>
                  <div className='divButtonCadastrarLogin'>
                    <button className='linkBtnCadastra'onClick={() => CadastrarPerfil()}>Cadastrar</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login