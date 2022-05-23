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


            <div className='mainCarros espaçamentoFinalCarros'>
                <div className='alinhamentoMainCarros'>
                    <section>
                        <div className='alinhamentoSectionUmCarros'>
                            <div className='alinhamentoCadastrarCarros'>
                                <div className='divH1Carros'>
                                    <h1>Carros</h1>
                                </div>
                                <div className='divInputMaior'>
                                    <input
                                        type="text"
                                        placeholder='Ex.: Onix 2.0'

                                        className='escolherTiposDeCarros' />
                                </div>
                                <div className='inputsMenores'>
                                    <select className='selectBooleanoAirbag' defaultValue='default'>
                                        <option value='default' disabled hidden>Airbag</option>
                                        <option value="false">Sem Airbag</option>
                                        <option value="true">Com Airbag</option>
                                    </select>
                                    <input
                                        type="text"
                                        placeholder="Portas:"
                                        className='inputsMenoresCarros'

                                    />

                                    <input
                                        type="text"
                                        placeholder="N° de Pessoas"
                                        className='inputsMenoresCarros'

                                    />
                                </div>
                                <div className='divCadastrarCarros'>
                                    <select className='selectLocadouraCarros'>
                                        <option selected disabled hidden>Qual a Locadoura?</option>
                                        {/* {locadoras.map((item):any =>{
                                            return(
                                                <option value={item.id}>{item.nome}</option>
                                            )
                                        })} */}
                                    </select>
                                    <button className='buttonCadastrarCarros'>Cadastrar</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div >





            {
                reserva.map((item): any => {
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

                })
            }
            < Footer />
        </>
    )

}

export default ReservaUsuario