import '../../Assets/CSS/perfilUsuario.css'
import { Header } from '../../Components/Header/header'
import { Footer } from '../../Components/Footer/footer'
import { useEffect, useState } from 'react'
import { apiCase } from '../../services/api'

export const PerfilUsuario = (): JSX.Element => {
    let propsPerfilUsuario: any = {
        descriptionCarros: 'Carros',
        descriptionReservas: 'Reservas',
        descriptionLocadora: 'Locadora',
        descriptionPerfil: 'Perfis',
        supdescription: 'Sair',
        underline: 'underlinePerfil'
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
        if (window.confirm('Deseja realmente excluir o Perfil?')) {
            apiCase.delete(`usuario/${id}`)
                .then(() => {
                    window.location.reload()

                })
            }
            
    }


    const TrazerDadosDoPerfil = (id:number, nome:string , email:string) => {

        setNomePerfis(nome)
        setNomeEmail(email)
        setGuardaId(id)

    }
    window.scroll({top:
        310,left: 0,behavior: 'smooth'})


        // const feita para guarda o Id e la em baixo no Onclick
    const [guardaId, setGuardaId] = useState(0);

    const [nomePerfis, setNomePerfis] = useState('');
    const [nomeEmail, setNomeEmail] = useState('');
    
    const EditarPerfil = (id: number) => {

            if(nomePerfis !== '' && nomeEmail !== ''){

                apiCase.put(`usuario/${id}`, { nome: nomePerfis, email: nomeEmail })
                .then(() => {
                    window.location.reload()
                    
                })
                
            }   
    }

   
    return (
        <>
            <Header objeto={propsPerfilUsuario} />
            <div className='alinahemntoGeralPerfilUsuario'>

                <div className='AlinhamentoBoxPerfilUsuario'>
                    <div className='BoxPerfilUsuario'>
                        <div className="tituloAlinhamentoPerfilUsuario">

                            <h1>Perfil</h1>
                        </div>

                        <div className="InputPerfilAlinhamentoUsuario">

                            <input
                                className="inputsPerfilUsuario"
                                type="text" name="InputPerfilUsuario"
                                placeholder="Maria de Fátma Muniz"
                                maxLength={40}
                                defaultValue={nomePerfis}
                                onChange={e => setNomePerfis(e.target.value)}
                                ></input>

                            <input
                                className="inputsPerfilUsuario"
                                type="text"
                                name="InputPerfil"
                                placeholder="(11) 9999-9090"
                                maxLength={40}></input>

                            <input 
                            className="inputsPerfilUsuario"
                            type="text" 
                            name="InputPerfil" 
                            placeholder="maria@gmail.com" 
                            maxLength={40}
                            defaultValue={nomeEmail}
                            onChange={e => setNomeEmail(e.target.value)}


                            ></input>


                        </div>

                        <div className="btnPerfilAlinhamentoUsuario">

                            <div className="btnAtualizarUsuario">
                                <button className='btnPerfilAtualizarUsuario' onClick={() => EditarPerfil(guardaId)}>Atualizar</button>
                         
                            </div>

                            <div className="btnExcluirAlinhamentoPerfilUsuario">
                                <button className='btnPerfilExcluirUsuario'>Excluir Cadastro</button>
                            </div>

                        </div>



                    </div>


                </div>
                <div className='alinhamentoPerfilFinalUsuario'>

                    <div className="ContainerH2Usuario">
                        <h2 className='h2PerfilUsuario'>USUÁRIOS CADASTRADOS</h2>
                    </div>

                    <div className="bordaAuxiliarUsuario">

                    </div>


                    {perfis.map((item): any => {
                        return (


                            <div className="bordaPerfilUsuario" onClick={() => TrazerDadosDoPerfil (item.id , item.nome , item.email )}>
                                <div className="containerUsuario">

                                    <div className="boxCadastroUsuario">
                                        <p className='pTituloPerfilUsuario'>{item.nome}</p>

                                        <p className='pMsgPerfilUsuario'>(11) 99999-9090</p>
                                        <p className='pMsgPerfilUsuario'>{item.email}</p>

                                        <button className='excluirCadastroPerfilUsuario' onClick={() => ExcluirPerfil( item.id)}>Excuir usuário</button>
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