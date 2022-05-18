// css
import '../../Assets/CSS/carros.css'

export const Carros = ():JSX.Element => {
    return(
        <div>
            <div className='mainCarros'>
                <div className='alinhamentoMainCarros'>
                    <section>
                        <div className='alinhamentoSectionUmCarros'>
                            <div className='alinhamentoCadastrarCarros'>
                                <div className='divH1Carros'>
                                    <h1>Carros</h1>
                                </div>
                                <div className='divInputMaior'>
                                    <input type="text" placeholder='Ex.: Onix 2.0' className='escolherTiposDeCarros'/>
                                </div>
                                <div className='inputsMenores'>
                                    <select className='selectBooleanoAirbag'>
                                        <option selected disabled hidden>Airbag</option>
                                        <option value="false">Sem Airbag</option>
                                        <option value="true">Com Airbag</option>
                                    </select>
                                    <input type="text" placeholder="Portas:" className='inputsMenoresCarros' />
                                    <input type="text" placeholder="N° de Pessoas" className='inputsMenoresCarros' />
                                </div>
                                <div className='divCadastrarCarros'>
                                    <select className='selectLocadouraCarros'>
                                        <option selected disabled hidden>Qual a Locadoura?</option>
                                        <option>Loucadora 1</option>
                                        <option>Loucadora 2</option>
                                        <option>Loucadora 3</option>
                                    </select>
                                    <button className='buttonCadastrarCarros'>Cadastrar</button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='sectionsDoscardscarros'>
                        <h2 className='h2Carros'>Econômico</h2>
                        <div className="barraDeSeparacaoCarros"></div>
                    </section>
                    <section className='sectionsDoscardscarros'>
                        <h2 className='h2Carros'>Especial</h2>
                        <div className="barraDeSeparacaoCarros"></div>
                    </section>
                    <section className='sectionsDoscardscarros'>
                        <h2 className='h2Carros'>Luxo</h2>
                        <div className="barraDeSeparacaoCarros"></div>
                    </section>
                </div>
            </div>
        </div>
    )
}