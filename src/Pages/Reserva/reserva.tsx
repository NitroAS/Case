import '../../Assets/CSS/reserva.css'
import { Header } from '../../Components/Header/header'
import { Footer } from '../../Components/Footer/footer'
import carroAzul from '../../Assets/img/car3 3.png'


export const Reserva = (): JSX.Element => {

    return (
        <>
            <Header />
            <div className='alinhamentoAereoMain'>
                <div className='mainReserva'>

                    <section>

                        <h1 className='reservaText'>Reservas</h1>

                        <div className='Centralizadora'>

                            <div className='ImgCarro'>

                                <img className='Imagem' src={carroAzul} alt="" />

                            </div>

                            <div className='Textos'>

                                <h1 className='nomeCarro'>Fiat Uno 1.0</h1>

                                <p className='informacoesReserva'>Data retirada: 22/05/2022</p>
                                <p className='informacoesReserva'>Horário retirada: 16:30</p>
                                <p className='informacoesReserva'>Data de devolução:  30/05/2022</p>

                            </div>

                            <div className='ButtonR'>

                                <button className='ExcluirReserva'>Excluir Reserva</button>

                            </div>

                        </div>



                    </section>

                </div>
            </div>
            <Footer />
        </>
    )

}

export default Reserva