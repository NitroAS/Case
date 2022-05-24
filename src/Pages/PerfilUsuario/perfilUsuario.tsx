import '../../Assets/CSS/perfilUsuario.css'
import { Header } from '../../Components/Header/header'
import { Footer } from '../../Components/Footer/footer'
import { useEffect, useState } from 'react'
import { apiCase } from '../../services/api'

export const PerfilUsuario = (): JSX.Element => {
    let propsPerfilUsuario: any = {
        descriptionCarros: 'Carros',
        descriptionReservas: 'Reservas',
        descriptionPerfil: 'Perfis',
        supdescription: 'Sair',
        underline: 'underlinePerfil'
    }


    const [perfisUsuario, setPerfisUsuario] = useState<any[]>([]);

    const PegandoPerfisUsuario = () => {

        apiCase.get('usuario')
            .then(resultado => {


                setPerfisUsuario(resultado.data)

            }) 

    }

    useEffect(() => {

        PegandoPerfisUsuario()
    }, [])


    const ExcluirPerfilUsario = (id: any) => {
        if (window.confirm('Deseja realmente excluir o Perfil?')) {
            apiCase.delete(`usuario/${id}`)
                .then(() => {
                    window.location.reload()

                })
            }
            
    }


    const TrazerDadosDoPerfilUsuario = (id:number, nome:string , email:string , telefone:string) => {

        setNomePerfisUsuario(nome)
        setNomeEmailUsuario(email)
        setGuardaIdUsuario(id)
        setTelefoneUsuario(telefone)
    }
    window.scroll({top:
        310,left: 0,behavior: 'smooth'})


        // const feita para guarda o Id e la em baixo no Onclick
    const [guardaIdUsuario, setGuardaIdUsuario] = useState(0);
    const [nomePerfisUsuario, setNomePerfisUsuario] = useState('');
    const [nomeEmailUsuario, setNomeEmailUsuario] = useState('');
    const [telefoneUsuario, setTelefoneUsuario] = useState('')
    
    const EditarPerfilUsuario = (id: number) => {

            if(nomePerfisUsuario !== '' && nomeEmailUsuario !== '' && telefoneUsuario !== ''){

                apiCase.put(`usuario/${id}`, { nome: nomePerfisUsuario, email: nomeEmailUsuario , telefone: telefoneUsuario })
                .then(() => {
                    window.location.reload()
                    
                })
                
            }   
    }


    // const CadastrarPerfilUsuario = () => {

    //     for (let index = 0; index < perfisUsuario.length; index++) {
    //         if(perfisUsuario[index].nome === nomePerfisUsuario)
    //         {
    //             return
    //         }
    //     }

    //     apiCase.post(`usuario`, {nome: nomePerfisUsuario, email: nomeEmailUsuario, telefone: telefoneUsuario})
    //     .then(() => {
    //         window.location.reload()
            
    //     })
    // }

   
    return (
        <>
            <Header objeto={propsPerfilUsuario} />
            <div className='alinahemntoGeralPerfilUsuario'>

                <div className='AlinhamentoBoxPerfilUsuario'>
                    <div className='BoxPerfil'>
                        <div className="tituloAlinhamentoPerfilUsuario">

                            <h1>Perfil</h1>
                        </div>

                        <div className="InputPerfilAlinhamentoUsuario">

                            <input
                                className="inputsPerfilUsuario"
                                type="text" name="InputPerfil"
                                placeholder="Maria de Fátma Muniz"
                                maxLength={40}
                                defaultValue={nomePerfisUsuario}
                                onChange={e => setNomePerfisUsuario(e.target.value)}
                                ></input>

                            <input
                                className="inputsPerfilUsuario"
                                type="text"
                                name="InputPerfil"
                                placeholder="(11) 9999-9090"
                                maxLength={40}
                                defaultValue={telefoneUsuario}
                                onChange={e => setTelefoneUsuario(e.target.value)}
                                ></input>

                            <input 
                            className="inputsPerfilUsuario"
                            type="text" 
                            name="InputPerfil" 
                            placeholder="maria@gmail.com" 
                            maxLength={40}
                            defaultValue={nomeEmailUsuario}
                            onChange={e => setNomeEmailUsuario(e.target.value)}


                            ></input>


                        </div>

                        <div className="btnPerfilAlinhamentoUsuario">

                            <div className="btnAtualizarUsuario">
                                <button className='btnPerfilAtualizarUsuario' onClick={() => EditarPerfilUsuario(guardaIdUsuario)}>Editar</button>
                                <button className='btnPerfilAtualizarUsuario'>Atualizar</button>
                         
                            </div>

                            <div className="btnExcluirAlinhamentoPerfilUsuario">
                                <button className='btnPerfilExcluirUsuario'>Excluir Cadastro</button>
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


                    {perfisUsuario.map((item): any => {
                        return (


                            <div className="bordaPerfil" onClick={() => TrazerDadosDoPerfilUsuario (item.id , item.nome , item.email, item.telefone )}>
                                <div className="container">

                                    <div className="boxCadastro">
                                        <p className='pTituloPerfil'>{item.nome}</p>

                                        <p className='pMsgPerfil'>{item.telefone}</p>
                                        <p className='pMsgPerfil'>{item.email}</p>

                                        <button className='excluirCadastroPerfil' onClick={() => ExcluirPerfilUsario( item.id)}>Excuir usuário</button>
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

export default PerfilUsuario