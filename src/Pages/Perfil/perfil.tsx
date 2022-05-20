import '../../Assets/CSS/perfil.css'
import { Header } from '../../Components/Header/header'
import { Footer } from '../../Components/Footer/footer'
import { useEffect, useState } from 'react'
import { apiCase } from '../../services/api'

export const Perfil = (): JSX.Element => {
    let propsPerfil: any = {
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


    const TrazerDadosDoPerfil = (id:number , nome:string , email:string) => {

        setNomePerfis(nome)
        setNomeEmail(email)
        

    }
    window.scroll({top:
        310,left: 0,behavior: 'smooth'})

    const [nomePerfis, setNomePerfis] = useState('');
    const [nomeEmail, setNomeEmail] = useState('');
    
    const EditarPerfil = (id: number) => {

        apiCase.put(`usuario/${id}`, { nome: nomePerfis, email: nomeEmail })
            .then(() => {
                window.location.reload()

            })



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
                                maxLength={40}></input>

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
                                <button className='btnPerfilAtualizar'>Atualizar</button>
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


                            <div className="bordaPerfil" onClick={() => TrazerDadosDoPerfil (item.id , item.nome , item.email )}>
                                <div className="container">

                                    <div className="boxCadastro">
                                        <p className='pTituloPerfil'>{item.nome}</p>

                                        <p className='pMsgPerfil'>(11) 99999-9090</p>
                                        <p className='pMsgPerfil'>{item.email}</p>

                                        <button className='excluirCadastroPerfil' onClick={() => ExcluirPerfil( item.id)}>Excuir usuário</button>
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