import '../../Assets/CSS/reservaUsuario.css'
import { Header } from '../../Components/Header/header'
import { Footer } from '../../Components/Footer/footer'
import carroAzul from '../../Assets/img/economico.png'
import { apiCase } from '../../services/api'
import { useEffect, useState } from 'react'

let propsReservaUsuario: any = {
    descriptionHome: 'Home',
    descriptionCarros: 'Carros',
    descriptionReservas: 'Reservas',
    descriptionPerfil: 'Perfil',
    supdescription: 'Sair',
    underlineReserva: 'underlineReserva',
}

export const ReservaUsuario = (): JSX.Element => {

    const [reserva, setReserva] = useState<any[]>([]);
    const PegandoReservas = () => {

        apiCase.get('reservas?_expand=carro')
            .then(resultado => {

                setReserva(resultado.data)
                console.log(resultado.data);
            })
    }
    useEffect(() => {

        PegandoReservas()
    }, [])



    const ExcluirReservas = (id: any) => {
        if (window.confirm('Deseja realmente excluir o Perfil?')) {
            apiCase.delete(`reservas/${id}`)
                .then(() => {
                    window.location.reload()

                })
        }

    }
    return (
        <>
            <Header objeto={propsReservaUsuario} />

            <h1 className='reservaTextUsuario'>Reservas</h1>
            {reserva.map((item): any => {
                return (
                    <div className='alinhamentoAereoMainUsuario'>
                        <div className='mainReservaUsuario'>
                            <section>
                                <div className='CentralizadoraUsuario'>
                                    <div className='ImgCarroUsuario'>
                                        <img className='ImagemUsuario' src={carroAzul} alt="" />
                                    </div>
                                    <div className='TextosUsuario'>
                                        <h1 className='nomeCarroUsuario'>Fiat Uno 1.0</h1>
                                        <p className='informacoesReservaUsuario'>Data retirada: 22/05/2022</p>
                                        <p className='informacoesReservaUsuario'>Horário retirada: 16:30</p>
                                        <p className='informacoesReservaUsuario'>Data de devolução:  30/05/2022</p>
                                    </div>
                                    <div className='ButtonRUsuario'>
                                        <button className='ExcluirReservaUsuario' onClick={() => ExcluirReservas(item.id)} >Excluir Reserva</button>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                )

            })}
            <Footer />
        </>
    )

}

export default ReservaUsuario