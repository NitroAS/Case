import '../../Assets/CSS/home.css'
import { Link } from "react-router-dom";
import Logo from '../../Assets/img/logoBranco.png'
import PFoto from '../../Assets/img/banner-car 1.png'
import SFoto from '../../Assets/img/economico.png'
import TFoto from '../../Assets/img/especial.png'
import QFoto from '../../Assets/img/luxo.png'
import { Footer } from '../../Components/Footer/footer'

export const Home = (): JSX.Element => {
    return (
        <>
            <section className='PagMain'>
                <div className='ImgPrincipal'>
                    <div>
                        <div className='centralizarLogoBranco'>
                            <img className='logo' src={Logo} alt="" />
                        </div>
                        <img className='PrimeiraFoto' src={PFoto} alt="" />
                        <div className='botoes1'>
                            <Link className='LoginB' to='/login'><button className='linkBtnHome'>Login</button></Link>
                            <Link className='CadastrarB' to='/login'><button className='linkBtnHome'>Cadastrar</button></Link>
                        </div>
                    </div>
                </div>
                <div className='cards'>
                    <div className='Carros'>
                        <img className='imagensCarros' src={SFoto} alt="Econômico" />
                        <h3 className='textoH3'>Econômico</h3>
                        <button className='ReservarB'>Reservar</button>
                    </div>
                    <div className='Carros'>
                        <img className='imagensCarros' src={TFoto} alt="Especial" />
                        <h3 className='textoH3'>Especial</h3>
                        <Link className=''to='/ReservasUsuario'><button className='ReservarB'>Reservar</button></Link>
                    </div>
                    <div className='Carros'>
                        <img className='imagensCarros' src={QFoto} alt="Luxo" />
                        <h3 className='textoH3'>Luxo</h3>
                        <button className='ReservarB'>Reservar</button>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Home