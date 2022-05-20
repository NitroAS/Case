import '../../Assets/CSS/locadora.css'
import { Header } from '../../Components/Header/header'
import { Footer } from '../../Components/Footer/footer'
export const Locadora = (): JSX.Element => {
    let propsLocadora: any = {
        descriptionHome: 'Home',
        descriptionCarros: 'Carros',
        descriptionReservas: 'Reservas',
        descriptionLocadora: 'Locadora',
        descriptionPerfil: 'Perfil',
        supdescription: 'Sair',
        underlineLocadora: 'underlineLocadora',
    }
    return (
        <>
                 <Header objeto={propsLocadora} />
            <div className='mainLocadora'>
                <section className='locadora'>
                    <h2 id='tituloLocadora'>Locadora</h2>
                    <div className='inputsLocadora'>
                        <div className='centralizarInputslocadora'>
                            <input placeholder='Locadora:' className='inputCadastrarLocadora' type="text" />
                        </div>
                        <div className='centralizarInputslocadora'>
                            <input placeholder='Endereço:' className='inputCadastrarLocadora' type="text" />
                        </div>
                        <div id='centralizarInputBotao'>
                            <input placeholder='Telefone:' className='inputCadastrarLocadora telefoneLocadora' type="text" />
                            <button className='botaoCadastrarLocadora'>Cadastrar</button>
                        </div>
                    </div>
                </section>
                <section className='SectionCardsLocadora'>
                    <div className='cardsLocadora'>
                        <div className='CentralizarNomeLocadora'>
                            <h3 className='nomeLocadora'>Locadora Matriz</h3>
                        </div>
                        <div className='centralizarInformacoesLocadora'>
                            <p className='informacoesLocadora'>Rua marques, 320</p>
                            <p className='informacoesLocadora'>(11) 8888-8888</p>
                        </div>
                        <div className='botoesLocadora'>
                            <button className='botaoEditar'>Editar</button>
                            <button className='botaoExcluir'>Excluir</button>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}

export default Locadora