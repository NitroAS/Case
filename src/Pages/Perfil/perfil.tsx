import '../../Assets/CSS/perfil.css'
import { Header } from '../../Components/Header/header'
import { Footer } from '../../Components/Footer/footer'
import { useEffect, useState } from 'react'
import { apiCase } from '../../services/api'
import Swal from 'sweetalert2'

export const Perfil = (): JSX.Element => {
    let propsPerfil: any = {
        descriptionCarros: 'Carros',
        descriptionReservas: 'Reservas',
        descriptionLocadora: 'Locadora',
        descriptionPerfil: 'Perfis',
        supdescription: 'Sair',
        underlinePerfil: 'underlinePerfil'
    }

    const [perfis, setPerfis] = useState<any[]>([]);
    const PegandoPerfis = () => {
        apiCase.get('usuario')
            .then(resultado => {
                setPerfis(resultado.data)

            })

    }

    useEffect(() => {
        PegandoPerfis()
    }, [])

    const ExcluirPerfil = (id: any) => {
        
            Swal.fire({
                title: 'Deseja Deleta esse Perfil??',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Delete!'
              })

              .then((resultado) => {
                  if(resultado.isConfirmed){

                      apiCase.delete(`usuario/${id}`)
                          .then(() => {
                              window.location.reload()
          
                          })
                  }
              })
        
    }


    const TrazerDadosDoPerfil = (id: number, nome: string, email: string, telefone: string) => {

        setNomePerfis(nome)
        setNomeEmail(email)
        setGuardaId(id)
        setTelefone(telefone)
    }
    window.scroll({
        top:
            310, left: 0, behavior: 'smooth'
    })


    // const feita para guarda o Id e la em baixo no Onclick
    const [guardaId, setGuardaId] = useState(0);
    const [nomePerfis, setNomePerfis] = useState('');
    const [nomeEmail, setNomeEmail] = useState('');
    const [telefone, setTelefone] = useState('')

    const EditarPerfil = (id: number) => {

        if (nomePerfis !== '' && nomeEmail !== '' && telefone !== '') {

            apiCase.put(`usuario/${id}`, { nome: nomePerfis, email: nomeEmail, telefone: telefone })
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

    const CadastrarPerfil = () => {
        for (let index = 0; index < perfis.length; index++) {
            if (perfis[index].nome === nomePerfis) {
                return
            }
        }

        if (nomePerfis !== '' && nomeEmail !== '' && telefone !== '') {

            apiCase.post(`usuario`, { nome: nomePerfis, email: nomeEmail, telefone: telefone })
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
            <Header objeto={propsPerfil} />
            <div className='alinahemntoGeralPerfil'>
                <div className='AlinhamentoBoxPerfil'>
                    <div className='BoxPerfil'>
                        <div className="tituloAlinhamentoPerfil">
                            <h1>Perfil</h1>
                        </div>
                        <div className="InputPerfilAlinhamento">
                            <input
                                className="inputsPerfil"
                                type="text" name="InputPerfil"
                                placeholder="Maria de Fátma Muniz"
                                maxLength={40}
                                defaultValue={nomePerfis}
                                onChange={e => setNomePerfis(e.target.value)}
                            ></input>
                            <input
                                className="inputsPerfil"
                                type="text"
                                name="InputPerfil"
                                placeholder="(11) 9999-9090"
                                maxLength={40}
                                defaultValue={telefone}
                                onChange={e => setTelefone(e.target.value)}
                            ></input>

                            <input
                                className="inputsPerfil"
                                type="text"
                                name="InputPerfil"
                                placeholder="maria@gmail.com"
                                maxLength={40}
                                defaultValue={nomeEmail}
                                onChange={e => setNomeEmail(e.target.value)}


                            ></input>
                            <input 
                                className="inputsPerfil"
                                type="text" 
                                name="InputPerfil" 
                                placeholder="maria@gmail.com" 
                                maxLength={40}
                                defaultValue={nomeEmail}
                                onChange={e => setNomeEmail(e.target.value)}
                            ></input>
                        </div>
                        <div className="btnPerfilAlinhamento">
                            <div className="btnAtualizar">
                                <button className='btnPerfilAtualizar' onClick={() => EditarPerfil(guardaId)}>Editar</button>
                                <button className='btnPerfilAtualizar' onClick={() => CadastrarPerfil()}>Atualizar</button>
                            </div>
                            <div className="btnExcluirAlinhamentoPerfil">
                                <button className='btnPerfilExcluir'>Excluir Cadastro</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='alinhamentoPerfilFinal'>
                    <div className="ContainerH2">
                        <h2 className='h2Perfil'>USUÁRIOS CADASTRADOS</h2>
                    </div>
                    <div className="bordaAuxiliar">

                    </div>
                    {perfis.map((item): any => {
                        return (


                            <div className="bordaPerfil" onClick={() => TrazerDadosDoPerfil(item.id, item.nome, item.email, item.telefone)}>
                                <div className="container">

                                    <div className="boxCadastro">
                                        <p className='pTituloPerfil'>{item.nome}</p>
                                        <div className='centralizarInfoPerfil'>
                                            <div>
                                                <p className='pMsgPerfil'>{item.email}</p>
                                            </div>
                                            <div className='infoTelefonePerfil'>
                                                <p className='pMsgPerfil'>{item.telefone}</p>
                                            </div>
                                        </div>

                                        <button className='excluirCadastroPerfil' onClick={() => ExcluirPerfil(item.id)}>Excuir usuário</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Perfil