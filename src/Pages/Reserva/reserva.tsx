import '../../Assets/CSS/reserva.css'
import { Header } from '../../Components/Header/header'
import { Footer } from '../../Components/Footer/footer'
import carroAzul from '../../Assets/img/economico.png'
import { apiCase } from '../../services/api'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

let propsReserva: any = {
    descriptionHome: 'Home',
    descriptionCarros: 'Carros',
    descriptionReservas: 'Reservas',
    descriptionLocadora: 'Locadora',
    descriptionPerfil: 'Perfil',
    supdescription: 'Sair',
    underlineReserva: 'underlineReserva',
}

export const Reserva = (): JSX.Element => {

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
        Swal.fire({
            title: 'Deseja Excluir essa Reserva??',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Excluir!'
          })

          .then((resultado) => {
            if(resultado.isConfirmed){
                apiCase.delete(`reservas/${id}`)
                    .then(() => {
                        window.location.reload()
    
                    })
            }
          })

    

    }
    return (
        <>
            <Header objeto={propsReserva} />

            <h1 className='reservaText'>Reservas</h1>
            {reserva.map((item): any => {
                return (
                    <div className='alinhamentoAereoMain'>
                        <div className='mainReserva'>
                            <section>
                                <div className='Centralizadora'>
                                    <div className='ImgCarro'>
                                        <img className='Imagem' src={carroAzul} alt="" />
                                    </div>
                                    <div className='Textos'>
                                        <h1 className='nomeCarro'>{item.carro.nome}</h1>
                                        <p className='informacoesReserva'>{`Data retirada: ${item.data}`}</p>
                                        <p className='informacoesReserva'>{`Horário retirada: ${item.horario}`}</p>
                                        <p className='informacoesReserva'>{`Data de devolução: ${item.dataentrega}`}</p>
                                    </div>
                                    <div className='ButtonR'>
                                        <button className='ExcluirReserva' onClick={() => ExcluirReservas(item.id)} >Excluir Reserva</button>
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

export default Reserva