// css
import '../../Assets/CSS/carros.css'

// IMGs
import car3_2 from '../../Assets/IMGsCarros/car3_2.png'
import car2_2 from '../../Assets/IMGsCarros/car2_2.png'
import car1_1 from '../../Assets/IMGsCarros/car1_1.png'


// Header e Footer
import Header from '../../Components/Header/header'
import Footer from '../../Components/Footer/footer'

export const Carros = ():JSX.Element => {
    return(
        <div>
            <Header />
            <div className='mainCarros espaçamentoFinalCarros'>
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

                    {/* Econômico */}

                    <section className='sectionsDoscardscarros espaçamentoEntreAsSections'>
                        <h2 className='h2Carros'>Econômico</h2>
                        <div className="barraDeSeparacaoCarros"></div>

                        <div className='alinhamentoDosCards'>
                            <div className='cardsAPICarros'>
                                <img src={car3_2} alt="Imagem de um carro econômico" />
                                <div className='alinhamentocardCarros'>
                                    <div className='h3CardDiv'>
                                        <h3 className='nomeDoCarro'>Fiat Uno 1.0</h3>
                                    </div>
                                    <div className='divPCardCarros'>
                                        <p className='pCardCarros'>Faça a sua reserva e garata a locação do automóvel.</p>
                                    </div>
                                    <div className='buttonsDoCardcarro'>
                                        <button className='buttonEditarCarros'>Editar</button>
                                        <button className='buttonExcluirCarros'>Excluir</button>
                                    </div>
                                </div>
                            </div>

                            <div className='cardsAPICarros'>
                                <img src={car3_2} alt="Imagem de um carro econômico" />
                                <div className='alinhamentocardCarros'>
                                    <div className='h3CardDiv'>
                                        <h3 className='nomeDoCarro'>Fiat Uno 1.0</h3>
                                    </div>
                                    <div className='divPCardCarros'>
                                        <p className='pCardCarros'>Faça a sua reserva e garata a locação do automóvel.</p>
                                    </div>
                                    <div className='buttonsDoCardcarro'>
                                        <button className='buttonEditarCarros'>Editar</button>
                                        <button className='buttonExcluirCarros'>Excluir</button>
                                    </div>
                                </div>
                            </div>

                            <div className='cardsAPICarros'>
                                <img src={car3_2} alt="Imagem de um carro econômico" />
                                <div className='alinhamentocardCarros'>
                                    <div className='h3CardDiv'>
                                        <h3 className='nomeDoCarro'>Fiat Uno 1.0</h3>
                                    </div>
                                    <div className='divPCardCarros'>
                                        <p className='pCardCarros'>Faça a sua reserva e garata a locação do automóvel.</p>
                                    </div>
                                    <div className='buttonsDoCardcarro'>
                                        <button className='buttonEditarCarros'>Editar</button>
                                        <button className='buttonExcluirCarros'>Excluir</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Especial */}

                    <section className='sectionsDoscardscarros'>
                        <h2 className='h2Carros'>Especial</h2>
                        <div className="barraDeSeparacaoCarros"></div>

                        <div className='alinhamentoDosCards'>
                            <div className='cardsAPICarros'>
                                <img src={car2_2} alt="Imagem de um carro econômico" />
                                <div className='alinhamentocardCarros'>
                                    <div className='h3CardDiv'>
                                        <h3 className='nomeDoCarro'>Fiat Uno 1.0</h3>
                                    </div>
                                    <div className='divPCardCarros'>
                                        <p className='pCardCarros'>Faça a sua reserva e garata a locação do automóvel.</p>
                                    </div>
                                    <div className='buttonsDoCardcarro'>
                                        <button className='buttonEditarCarros'>Editar</button>
                                        <button className='buttonExcluirCarros'>Excluir</button>
                                    </div>
                                </div>
                            </div>

                            <div className='cardsAPICarros'>
                                <img src={car2_2} alt="Imagem de um carro econômico" />
                                <div className='alinhamentocardCarros'>
                                    <div className='h3CardDiv'>
                                        <h3 className='nomeDoCarro'>Fiat Uno 1.0</h3>
                                    </div>
                                    <div className='divPCardCarros'>
                                        <p className='pCardCarros'>Faça a sua reserva e garata a locação do automóvel.</p>
                                    </div>
                                    <div className='buttonsDoCardcarro'>
                                        <button className='buttonEditarCarros'>Editar</button>
                                        <button className='buttonExcluirCarros'>Excluir</button>
                                    </div>
                                </div>
                            </div>

                            <div className='cardsAPICarros'>
                                <img src={car2_2} alt="Imagem de um carro econômico" />
                                <div className='alinhamentocardCarros'>
                                    <div className='h3CardDiv'>
                                        <h3 className='nomeDoCarro'>Fiat Uno 1.0</h3>
                                    </div>
                                    <div className='divPCardCarros'>
                                        <p className='pCardCarros'>Faça a sua reserva e garata a locação do automóvel.</p>
                                    </div>
                                    <div className='buttonsDoCardcarro'>
                                        <button className='buttonEditarCarros'>Editar</button>
                                        <button className='buttonExcluirCarros'>Excluir</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>

                    {/* Luxo */}

                    <section className='sectionsDoscardscarros'>
                        <h2 className='h2Carros'>Luxo</h2>
                        <div className="barraDeSeparacaoCarros"></div>

                        <div className='alinhamentoDosCards'>
                            <div className='cardsAPICarros'>
                                <img src={car1_1} alt="Imagem de um carro econômico" />
                                <div className='alinhamentocardCarros'>
                                    <div className='h3CardDiv'>
                                        <h3 className='nomeDoCarro'>Fiat Uno 1.0</h3>
                                    </div>
                                    <div className='divPCardCarros'>
                                        <p className='pCardCarros'>Faça a sua reserva e garata a locação do automóvel.</p>
                                    </div>
                                    <div className='buttonsDoCardcarro'>
                                        <button className='buttonEditarCarros'>Editar</button>
                                        <button className='buttonExcluirCarros'>Excluir</button>
                                    </div>
                                </div>
                            </div>

                            <div className='cardsAPICarros'>
                                <img src={car1_1} alt="Imagem de um carro econômico" />
                                <div className='alinhamentocardCarros'>
                                    <div className='h3CardDiv'>
                                        <h3 className='nomeDoCarro'>Fiat Uno 1.0</h3>
                                    </div>
                                    <div className='divPCardCarros'>
                                        <p className='pCardCarros'>Faça a sua reserva e garata a locação do automóvel.</p>
                                    </div>
                                    <div className='buttonsDoCardcarro'>
                                        <button className='buttonEditarCarros'>Editar</button>
                                        <button className='buttonExcluirCarros'>Excluir</button>
                                    </div>
                                </div>
                            </div>

                            <div className='cardsAPICarros'>
                                <img src={car1_1} alt="Imagem de um carro econômico" />
                                <div className='alinhamentocardCarros'>
                                    <div className='h3CardDiv'>
                                        <h3 className='nomeDoCarro'>Fiat Uno 1.0</h3>
                                    </div>
                                    <div className='divPCardCarros'>
                                        <p className='pCardCarros'>Faça a sua reserva e garata a locação do automóvel.</p>
                                    </div>
                                    <div className='buttonsDoCardcarro'>
                                        <button className='buttonEditarCarros'>Editar</button>
                                        <button className='buttonExcluirCarros'>Excluir</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                </div>
            </div>
            <Footer />
        </div>
    )
}