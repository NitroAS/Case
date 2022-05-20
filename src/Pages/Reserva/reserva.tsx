import '../../Assets/CSS/reserva.css'
import { Header } from '../../Components/Header/header'
import { Footer } from '../../Components/Footer/footer'
import carroAzul from '../../Assets/img/economico.png'
// import { apiCase } from '../../services/api'
// import { useEffect, useState } from 'react'
let propsReserva: any = {
    descriptionHome:  'Home',
    descriptionCarros:  'Carros',
    descriptionReservas:  'Reservas',
    descriptionLocadora:  'Locadora',
    descriptionPerfil:  'Perfil',
    supdescription: 'Sair',
    underlineReserva: 'underlineReserva',
}

export const Reserva = (): JSX.Element => {
    // const [reserva, setReserva] = useState<any[]>([]);
    // const [usuario, setUsuario] = useState<any[]>([]);

    // const PegandoReservas = () => {

    //     apiCase.get('reservas')
    //         .then(resultado => {

    //             setReserva(resultado.data)

    //         })

           

    // }

    // useEffect(() => {

    //     PegandoReservas()
    // }, [])

    // useEffect(() =>{
    //     let quantidadeElementos: number = usuario.length

    //     for (let index = 0; index < quantidadeElementos; index++) {
          
    //         apiCase.get(`Usuario/${index + 1}/ReservaS?_expand=carro`)
    //             .then(resultadoReservas => {
    //                 setUsuario( reserva => reserva.concat(resultadoReservas.data))
    //             })
            
    //     }
    // },    [usuario.length])

    // useEffect(() => {
    // },    [reserva.length])
    
    


    // const ExcluirReservas = (id: any , usuarioId: number)  => {
    //     if (window.confirm('Deseja realmente excluir o Perfil?')) {
    //         apiCase.delete(`reservas/${id}/ReservaS?_expand=carro/${usuarioId}`)
    //             .then(() => {
    //                 window.location.reload()

    //             })
    //         }
            
    // }
    return (
        <>
            <Header objeto={propsReserva} />

       
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

                        <div></div>

                    </section>

                </div>
            </div>
            <Footer />
        </>
    )

}

export default Reserva