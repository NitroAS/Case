// Imagens Header e Footer
import Header from "../../Components/Header/header"
import Footer from "../../Components/Footer/footer"

// Imagens dos Carros
import car3_2 from '../../Assets/IMGsCarros/car3_2.png'
import car2_2 from '../../Assets/IMGsCarros/car2_2.png'
import car1_1 from '../../Assets/IMGsCarros/car1_1.png'

// Css
import '../../Assets/CSS/carros.css'
import '../../Assets/CSS/carrosUsuarios.css'

// useState e agregados
import React, { useEffect, useState } from "react"

// API
import { apiCase } from '../../services/api'

export const CarrosUsuario = ():JSX.Element => {
    
    let propsLocadora: any = {
        descriptionHome: 'Home',
        descriptionCarrosUsuario: 'Carros',
        descriptionReservasUsuario: 'Reservas',
        descriptionLocadora: 'Locadora',
        descriptionPerfilUsuario: 'Perfil',
        supdescription: 'Sair',
        underlineLocadora: 'underlineLocadora',
    }

    // Listar
    const [carros, setCarros] = useState<any[]>([])
    const ListarNomes = ():any => {
 
        apiCase.get('carros')
        .then(resultado => {
 
            setCarros(resultado.data)
         })
 
     }
 
     useEffect(() => {
         ListarNomes()
     }, [])
    
    return(
        <>
           
            <div>
                <Header objeto={propsLocadora} />
                <div className='mainCarros espaçamentoFinalCarros'>
                    <div className='alinhamentoMainCarros'>
                        
                        <div>
                            <h1 className="divH1Carros">Carros</h1>
                        </div>

                        {/* Econômico */}
                        
                        <section className='sectionsDoscardscarros espaçamentoEntreAsSections'>
                            <h2 className='h2Carros'>Econômico</h2>
                            <div className="barraDeSeparacaoCarros"></div>


                                <div className='alinhamentoDosCards'>
                                    
                                    {carros.map((item):any =>{
                                        return(

                                            <div className='cardsAPICarrosUsuarios'>
                                                <img src={car3_2} alt="Imagem de um carro econômico" />
                                                <div className='alinhamentocardCarros'>
                                                    <div className='h3CardDiv'>
                                                        <h3 className='nomeDoCarro'>{item.nome}</h3>
                                                    </div>
                                                    <div className='divPCardCarros'>
                                                        <p className='pCardCarros'>Faça a sua reserva e garata a locação do automóvel.</p>
                                                    </div>
                                                    <div className='buttonsDoCardcarro'>
                                                        <button className='buttonDetalhesCarros'>Detalhes</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}    
                                        
                                    
                                </div>
                        </section>

                        {/* Especial */}

                        <section className='sectionsDoscardscarros'>
                            <h2 className='h2Carros'>Especial</h2>
                            <div className="barraDeSeparacaoCarros"></div>

                            <div className='alinhamentoDosCards'>
                                <div className='cardsAPICarrosUsuarios'>
                                    <img src={car2_2} alt="Imagem de um carro econômico" />
                                    <div className='alinhamentocardCarros'>
                                        <div className='h3CardDiv'>
                                            <h3 className='nomeDoCarro'>Fiat Uno 1.0</h3>
                                        </div>
                                        <div className='divPCardCarros'>
                                            <p className='pCardCarros'>Faça a sua reserva e garata a locação do automóvel.</p>
                                        </div>
                                        <div className='buttonsDoCardcarro'>
                                            <button className='buttonDetalhesCarros'>Detalhes</button>
                                            
                                        </div>
                                    </div>
                                </div>

                                <div className='cardsAPICarrosUsuarios'>
                                    <img src={car2_2} alt="Imagem de um carro econômico" />
                                    <div className='alinhamentocardCarros'>
                                        <div className='h3CardDiv'>
                                            <h3 className='nomeDoCarro'>Fiat Uno 1.0</h3>
                                        </div>
                                        <div className='divPCardCarros'>
                                            <p className='pCardCarros'>Faça a sua reserva e garata a locação do automóvel.</p>
                                        </div>
                                        <div className='buttonsDoCardcarro'>
                                            <button className='buttonDetalhesCarros'>Detalhes</button>
                                            
                                        </div>
                                    </div>
                                </div>

                                <div className='cardsAPICarrosUsuarios'>
                                    <img src={car2_2} alt="Imagem de um carro econômico" />
                                    <div className='alinhamentocardCarros'>
                                        <div className='h3CardDiv'>
                                            <h3 className='nomeDoCarro'>Fiat Uno 1.0</h3>
                                        </div>
                                        <div className='divPCardCarros'>
                                            <p className='pCardCarros'>Faça a sua reserva e garata a locação do automóvel.</p>
                                        </div>
                                        <div className='buttonsDoCardcarro'>
                                            <button className='buttonDetalhesCarros'>Detalhes</button>
                                            
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
                                <div className='cardsAPICarrosUsuarios'>
                                    <img src={car1_1} alt="Imagem de um carro econômico" />
                                    <div className='alinhamentocardCarros'>
                                        <div className='h3CardDiv'>
                                            <h3 className='nomeDoCarro'>Fiat Uno 1.0</h3>
                                        </div>
                                        <div className='divPCardCarros'>
                                            <p className='pCardCarros'>Faça a sua reserva e garata a locação do automóvel.</p>
                                        </div>
                                        <div className='buttonsDoCardcarro'>
                                            <button className='buttonDetalhesCarros'>Detalhes</button>
                                            
                                        </div>
                                    </div>
                                </div>

                                <div className='cardsAPICarrosUsuarios'>
                                    <img src={car1_1} alt="Imagem de um carro econômico" />
                                    <div className='alinhamentocardCarros'>
                                        <div className='h3CardDiv'>
                                            <h3 className='nomeDoCarro'>Fiat Uno 1.0</h3>
                                        </div>
                                        <div className='divPCardCarros'>
                                            <p className='pCardCarros'>Faça a sua reserva e garata a locação do automóvel.</p>
                                        </div>
                                        <div className='buttonsDoCardcarro'>
                                            <button className='buttonDetalhesCarros'>Detalhes</button>
                                            
                                        </div>
                                    </div>
                                </div>

                                <div className='cardsAPICarrosUsuarios'>
                                    <img src={car1_1} alt="Imagem de um carro econômico" />
                                    <div className='alinhamentocardCarros'>
                                        <div className='h3CardDiv'>
                                            <h3 className='nomeDoCarro'>Fiat Uno 1.0</h3>
                                        </div>
                                        <div className='divPCardCarros'>
                                            <p className='pCardCarros'>Faça a sua reserva e garata a locação do automóvel.</p>
                                        </div>
                                        <div className='buttonsDoCardcarro'>
                                            <button className='buttonDetalhesCarros'>Detalhes</button>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}