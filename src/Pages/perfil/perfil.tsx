import '../../Assets/CSS/perfil.css'
import { Header } from '../../Components/Header/header'

export const Perfil = (): JSX.Element => {

    return (
        <>
            <Header />


            <div className='AlinhamentoTotal'>
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

        </>
    );
}

export default Perfil 