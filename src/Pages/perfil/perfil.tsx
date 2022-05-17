import '../../Assets/CSS/perfil.css'
import { Header } from '../../Components/Header/header'

export const Perfil = (): JSX.Element => {

    return (
        <>
            <Header />


            <section className='AlinhamentoTotal'>
                <div className='BoxPerfil'>

                    <h1>Perrfil</h1>

                    <div className="InputPerfil">

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


                        <div className="btnPerfilAlinhamento">
                            <button className='btnPerfil'>Atualizar</button>
                            <button className='btnPerfil'>Excluir Cadastro</button>
                        </div>
                    </div>

                </div>


            </section>

        </>
    );
}

export default Perfil 