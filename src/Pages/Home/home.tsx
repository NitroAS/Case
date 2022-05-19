import '../../Assets/CSS/home.css'
import { Link } from "react-router-dom";
import Logo from '../../Assets/img/logoBranco.png'
import PFoto from '../../Assets/img/banner-car 1.png'
import SFoto from '../../Assets/img/car1 1.png'
import TFoto from '../../Assets/img/car2 1.png'
import QFoto from '../../Assets/img/car3 2.png'
import { Footer } from '../../Components/Footer/footer'
export const Home = (): JSX.Element => {

    return (
        <>
            <header>

                <main>

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

                                <img className='1FtDeBaixo' src={SFoto} alt="" />

                                <h3 className='textoH3'>Econômico</h3>

                                <button className='ReservarB'>Reservar</button>

                            </div>

                            <div className='Carros'>

                                <img src={TFoto} alt="" />

                                <h3 className='textoH3'>Especial</h3>

                                <button className='ReservarB'>Reservar</button>

                            </div>

                            <div className='Carros'>

                                <img src={QFoto} alt="" />

                                <h3 className='textoH3'>Luxo</h3>

                                <button className='ReservarB'>Reservar</button>

                            </div>

                        </div>








                    </section>

                </main>

            </header>

            <Footer />
        </>
    );
}

export default Home