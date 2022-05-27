import '../../Assets/CSS/reservaUsuario.css'
import { Header } from '../../Components/Header/header'
import { Footer } from '../../Components/Footer/footer'
import carroAzul from '../../Assets/img/economico.png'
import { apiCase } from '../../services/api'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { useLocation } from 'react-router-dom'



let propsReservaUsuario: any = {
    descriptionHome: 'Home',
    descriptionCarrosUsuario: 'Carros',
    descriptionReservasUsuario: 'Reservas',
    descriptionPerfilUsuario: 'Perfil',
    supdescription: 'Sair',
    underlineReserva: 'underlineReserva',
}

export const ReservaUsuario = (): JSX.Element => {
    const Location:any = useLocation()
    const [guardaLocadora, setGuardaLocadora] = useState('')
    const [guardaNomeCarros, setGuardaCarros] = useState('')
    const [guardaIdCarros, setGuardaIdCarros] = useState('')
    const [guardaIdLocadora, setGuardaIdLocadora] = useState('')


    useEffect(() => {

        if(Location.state !== null){
            
            const {id} = Location.state
            const {locadoraId} = Location.state
            const {guardaNomeCarros} = Location.state
            const {guardaLocadora} = Location.state
            setGuardaLocadora(guardaLocadora)
            setGuardaCarros(guardaNomeCarros)
            setGuardaIdCarros(id)
            setGuardaIdLocadora(locadoraId)
        }
       
    }, [])


    
    const [reservaUsuario, setReservaUsuario] = useState<any[]>([]);
    const PegandoReservasUsuario = () => {

        apiCase.get('reservas?_expand=carro')
            .then(resultado => {
                setReservaUsuario(resultado.data)
                // console.log(id);
                // console.log(locadoraId);
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

    
    const [booleano, setBooleano] = useState(false)
    const TrazerDadosDoReservasUsuario = (id: number, nome: string, data: string, horario: string, dataentrega: string , carroId: number , locadoraId: string) => {
        setBooleano(true)

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
   

    
    const EditarReservasUsuario = (id:number) => {

        
        if (dataRetiradaReservaUsuario !== '' && horarioRetiradaUsuario !== '' && devolucaoUsuario !== '') {

            apiCase.put(`reservas/${id}`, { data: dataRetiradaReservaUsuario, horario: horarioRetiradaUsuario, dataentrega: devolucaoUsuario, usuarioId: guardaUsuarioId , carroId: guardaCarroId, locadoraId: guardaIdLocadora})
                .then(() => {
                    window.location.reload()

                })

        }

        else {
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

    const CadastrarReservasUsuario = () => {

        for (let index = 0; index < reservaUsuario.length; index++) {
            if (reservaUsuario[index].nome === reservaUsuario) {
                return
            }
        }

        if ( dataRetiradaReservaUsuario !== '' && horarioRetiradaUsuario !== '' ) {

            apiCase.post(`reservas?_expand=carro`, { nome: nomeCarroUsuario, data: dataRetiradaReservaUsuario, horario: horarioRetiradaUsuario, dataentrega: devolucaoUsuario, usuarioId: guardaUsuarioId , carroId: guardaIdCarros  })
                .then(() => {
                    window.location.reload()
    
                })
        }
            else {
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
                                        defaultValue={guardaNomeCarros}
                                        readOnly
                                         />
                                </div>
                                <div className='inputsMenoresUsuario'>
                                    <input
                                        type="text"
                                        placeholder="Data reserva:"
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
                                    <select 
                                    className='selectLocadouraCarrosUsuario'
                                    defaultValue={1}
                                    disabled>
                                        <option
                                        value={1}>{guardaLocadora}</option>
                                    
                                
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
                                            <button className='EditarReservaUsuario' onClick={() => TrazerDadosDoReservasUsuario(item.id, item.carro.nome, item.data, item.horario, item.dataentrega,item.carroId , item.carro.locadoraId)}>Editar</button>
                                            <button className='ExcluirReservaUsuario' onClick={() => ExcluirReservasUsuario(item.id)} >Excluir Reserva</button>
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