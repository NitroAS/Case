import '../../Assets/CSS/perfil.css'
import { Header } from '../../Components/Header/header'

export const Perfil = (): JSX.Element => {

    return (
        <>
            <Header />

            <div className='alinahemntoGeralPerfil'>

                <div className='AlinhamentoBoxPerfil'>
                    <div className='BoxPerfil'>
                        <div className="tituloAlinhamentoPerfil">

                            <h1>Perfil</h1>
                        </div>

                        <div className="InputPerfilAlinhamento">

                            <input className="inputsPerfil"
                                type="text" name="InputPerfil"
                                placeholder="Maria de Fátma Muniz"
                                maxLength={40}></input>

                            <input className="inputsPerfil"
                                type="text" name="InputPerfil"
                                placeholder="(11) 9999-9090"
                                maxLength={40}></input>

                            <input className="inputsPerfil"
                                type="text" name="InputPerfil"
                                placeholder="maria@gmail.com"
                                maxLength={40}></input>


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
                    <div className="bordaPerfil">
                        <div className="container">

                            <div className="boxCadastro">
                                <p className='pTituloPerfil'>Maria de Fátima Muniz</p>

                                <p className='pMsgPerfil'>(11) 99999-9090</p>
                                <p className='pMsgPerfil'>maria@gmail.com</p>

                                <button className='excluirCadastroPerfil'>Excuir usuário</button>
                            </div>

                        </div>
                    </div>




                </div>
            </div>





        </>
    );
}

export default Perfil 