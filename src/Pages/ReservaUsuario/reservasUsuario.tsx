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

    const [reservaUsuario, setReservaUsuario] = useState<any[]>([]);
    const PegandoReservasUsuario = () => {

        apiCase.get('reservas?_expand=carro')
            .then(resultado => {
                setReservaUsuario(resultado.data)
                console.log(resultado.data);
            })
    }
    useEffect(() => {

        PegandoReservasUsuario()
    }, [])
    
      // Listar Locadoras
      const [locadoras, setLocadoras] = useState<any[]>([])
      const ListarLocadoras = ():any => {
  
          apiCase.get('locadoras')
          .then(resultado => {
              setLocadoras(resultado.data)
          })
  
      }
  
      useEffect(() => {
          ListarLocadoras()
      }, [])

    const ExcluirReservasUsuario = (id: any) => {
        if (window.confirm('Deseja realmente excluir o Perfil?')) {
            apiCase.delete(`reservas/${id}`)
                .then(() => {
                    window.location.reload()

                })
        }
    }

    const TrazerDadosDoReservasUsuario = (id: number, nome: string, data: string, horario: string, dataentrega: string , carroId: number , locadoraId: string) => {
        setGuardaIReservasdUsuario(id)
        setNomeCarroUsuario(nome)
        setDataRetiradaReservaUsuario(data)
        setHorarioRetiradaUsuario(horario)
        setdevolucaoUsuario(dataentrega)
        setGuardaGuardaCarroId(1)
        setLocadoraValorUsuario(locadoraId)
        
    }
    window.scroll({
        top:
            310, left: 0, behavior: 'smooth'
    })

    const [guardaUsuarioId, setGuardaUsuarioId] = useState(1);
    const [guardaCarroId, setGuardaGuardaCarroId] = useState(1);
    const [guardaIReservasdUsuario, setGuardaIReservasdUsuario] = useState(0);
    const [locadoraValorUsuario, setLocadoraValorUsuario] = useState('')
    const [nomeCarroUsuario, setNomeCarroUsuario] = useState('');
    const [dataRetiradaReservaUsuario, setDataRetiradaReservaUsuario] = useState('');
    const [horarioRetiradaUsuario, setHorarioRetiradaUsuario] = useState('');
    const [devolucaoUsuario, setdevolucaoUsuario] = useState('');
   
    const EditarReservasUsuario = (id: number) => {

        if (nomeCarroUsuario !== '' && dataRetiradaReservaUsuario !== '' && horarioRetiradaUsuario !== '' && devolucaoUsuario !== '' && locadoraValorUsuario !== '') {

            apiCase.put(`reservas/${id}`, { data: dataRetiradaReservaUsuario, horario: horarioRetiradaUsuario, dataentrega: devolucaoUsuario, usuarioId: guardaUsuarioId , carroId: guardaCarroId, locadoraId: locadoraValorUsuario})
                .then(() => {
                    window.location.reload()

                })

        }
    }

    const CadastrarReservasUsuario = () => {

        for (let index = 0; index < reservaUsuario.length; index++) {
            if (reservaUsuario[index].nome === reservaUsuario) {
                return
            }
        }

        apiCase.post(`reservas?_expand=carro`, { nome: nomeCarroUsuario, data: dataRetiradaReservaUsuario, horario: horarioRetiradaUsuario, dataentrega: devolucaoUsuario, usuarioId: guardaUsuarioId , carroId: guardaCarroId, locadoraId: locadoraValorUsuario  })
            .then(() => {
                window.location.reload()

            })
    }

    return (
        <>
            <Header objeto={propsReservaUsuario} />
            <div className='mainCarros espaçamentoFinalCarrosUsuario'>
                <div className='alinhamentoMainCarrosUsuario'>
                    <section>
                        <div className='alinhamentoSectionUmCarrosUsuario'>
                            <div className='alinhamentoCadastrarCarrosUsuario'>
                                <div className='divH1CarrosUsuario'>
                                    <h1 className='tituloReservasUsuario'>Reservas</h1>
                                </div>
                                <div className='divInputMaiorUsuario'>
                                    <input
                                        type="text"
                                        placeholder='Onix 2.0'
                                        className='escolherTiposDeCarros'
                                        defaultValue={nomeCarroUsuario}
                                        disabled
                                         />
                                </div>
                                <div className='inputsMenoresUsuario'>
                                    <input
                                        type="text"
                                        placeholder="Horário da reserva:"
                                        className='inputsMenoresCarrosUsuario'
                                        defaultValue={dataRetiradaReservaUsuario}
                                        onChange={e => setDataRetiradaReservaUsuario(e.target.value)}

                                    />
                                    <input
                                        type="text"
                                        placeholder="Horário da reserva:"
                                        className='inputsMenoresCarrosUsuario'
                                        defaultValue={horarioRetiradaUsuario}
                                        onChange={e => setHorarioRetiradaUsuario(e.target.value)}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Data de devolução:"
                                        className='inputsMenoresCarrosUsuario'
                                        defaultValue={devolucaoUsuario}
                                        onChange={e => setdevolucaoUsuario(e.target.value)}
                                    />
                                </div>
                                <div className='divCadastrarCarrosUsuario'>
                                    <select className='selectLocadouraCarrosUsuario'>
                                        <option selected disabled hidden>Qual a Locadoura?</option>
                                    {locadoras.map((item): any => {
                                        return(
                                        <option value={item.locadoraId}>{item.nome}</option>
                                        )
                                    })
                                }
                                </select>

                                    
                                    <button className='buttonCadastrarCarrosUsuario' onClick={() => CadastrarReservasUsuario()}>Reservar</button>
                                    <button className='buttonCadastrarCarrosUsuario' onClick={() => EditarReservasUsuario(guardaIReservasdUsuario)}>Editar</button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="ContainerH2ReservasUsuario">
                        <h2 className='h2PerfilReservasUsuario'>MINHAS RESERVAS</h2>
                    </div>
                    <div className="bordaAuxiliarReservasUsuario">
                    </div>
                </div >
            </div>

            {
                reservaUsuario.map((item): any => {
                    return (
                        <div className='alinhamentoAereoMainUsuario'>
                            <div className='mainReservaUsuario'>
                                <section>
                                    <div className='CentralizadoraUsuario'>
                                        <div className='ImgCarroUsuario'>
                                            <img className='ImagemUsuario' src={carroAzul} alt="" />
                                        </div>
                                        <div className='TextosUsuario'>
                                            <p className='nomeCarroUsuario'>{item.carro.nome}</p>
                                            <p className='informacoesReservaUsuario'>{`Data retirada: ${item.data}`}</p>
                                            <p className='informacoesReservaUsuario'>{`Horário retirada: ${item.horario}`}</p>
                                            <p className='informacoesReservaUsuario'>{`Data de devolução: ${item.dataentrega}`}</p>
                                        </div>
                                        <div className='ButtonRUsuario'>
                                            <button className='ExcluirReservaUsuario' onClick={() => ExcluirReservasUsuario(item.id)} >Excluir Reserva</button>
                                            <button className='ExcluirReservaUsuario' onClick={() => TrazerDadosDoReservasUsuario(item.id, item.carro.nome, item.data, item.horario, item.dataentrega,item.carroId , item.carro.locadoraId)}>Editar</button>
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