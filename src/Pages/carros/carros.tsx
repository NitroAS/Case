// css
import '../../Assets/CSS/carros.css'

// IMGs
import car3_2 from '../../Assets/IMGsCarros/car3_2.png'
import car2_2 from '../../Assets/IMGsCarros/car2_2.png'
import car1_1 from '../../Assets/IMGsCarros/car1_1.png'


// Header e Footer
import Header from '../../Components/Header/header'
import Footer from '../../Components/Footer/footer'

// API
import { apiCase } from '../../services/api'

// useState e agregados
import React, { useEffect, useState } from "react"

let propsCarros: any = {
    descriptionHome:  'Home',
    descriptionCarros:  'Carros',
    descriptionReservas:  'Reservas',
    descriptionLocadora:  'Locadora',
    descriptionPerfil:  'Perfil',
    supdescription: 'Sair',
    underlineCarros: 'underlineCarros'
}

export const Carros = ():JSX.Element => {
    // Back-End

    // Listar Locadoras
    const [locadoras, setLocadoras] = useState<any[]>([])
    const ListarLocadoras = ():any => {

        apiCase.get('locadoras')
        .then(resultado => {
            setLocadoras(resultado.data)
        })

    }

    useEffect(() => {
        ListarLocadoras()
    }, [])


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

    // Excluir
    const Excluir = (id:number) => {
        apiCase.delete(`carros/${id}`)
        .then(() => window.location.reload())
    }

    // Salvar
    const [nome, setNome] = useState('')
    const Salvar = () => {
        apiCase.post('carros', {nome : nome, portas : portas, npessoas : npessoas, airbag : airbag})
        .then(ListarNomes())
        .then(() => window.location.reload())
    }

    // Hook do airbag
    const [airbag, setAirbag] = useState('false')

    // Hook do Portas
    const [portas, setPortas] = useState(0)

    // Hook para guardar o valor da locadora
    const [locadoraValor, setLocadoraValor] = useState('')

    // Hook de números de pessoas 
    const [npessoas, setNPessoas] = useState(0)

    // Hook id
    const [id,  setId] = useState(0)

    // Hook botão
    const [botao, setBotao] = useState(true)

    // Editar
   

    const Editar = ():any => {
        apiCase.put(`carros/${id}`, {nome : nome, portas : portas, npessoas : npessoas, airbag : airbag})
        
    }

    let booleano = false
    const EditarDois = (id:number, nome:string, portas:number, npessoas:number, airbag:string) => {
        window.scroll({top:
        310,left: 0,behavior: 'smooth'})

        setId(id)
        setNome(nome)
        setPortas(portas)
        setNPessoas(npessoas)
        setAirbag(airbag)

        booleano = true
        if(booleano === true){
            return(<button className='editar' onClick={() => Editar()}>Editar</button>)
        }
    }


    return(
        <div>
            <Header objeto={propsCarros} />
            <div className='mainCarros espaçamentoFinalCarros'>
                <div className='alinhamentoMainCarros'>
                    <section>
                        <div className='alinhamentoSectionUmCarros'>
                            <div className='alinhamentoCadastrarCarros'>
                                <div className='divH1Carros'>
                                    <h1>Carros</h1>
                                </div>
                                <div className='divInputMaior'>
                                    <input 
                                    type="text" 
                                    placeholder='Ex.: Onix 2.0' 
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                    className='escolherTiposDeCarros'/>
                                </div>
                                <div className='inputsMenores'>
                                    <select className='selectBooleanoAirbag' defaultValue='default' onChange={(e) => setAirbag(e.target.value)}>
                                        <option value='default' disabled hidden>Airbag</option>
                                        <option value="false">Sem Airbag</option>
                                        <option value="true">Com Airbag</option>
                                    </select>
                                    <input 
                                    type="text" 
                                    placeholder="Portas:" 
                                    className='inputsMenoresCarros' 
                                    
                                    onChange = {(e) => setPortas(parseInt(e.target.value))} />

                                    <input 
                                    type="text" 
                                    placeholder="N° de Pessoas" 
                                    className='inputsMenoresCarros'
                                    
                                    onChange = {(e) => setNPessoas(parseInt(e.target.value))} />
                                </div>
                                <div className='divCadastrarCarros'>
                                    <select className='selectLocadouraCarros' onChange={(e) => setLocadoraValor(e.target.value)}>
                                        <option selected disabled hidden>Qual a Locadoura?</option>
                                        {locadoras.map((item):any =>{
                                            return(
                                                <option value={item.id}>{item.nome}</option>
                                            )
                                        })}
                                    </select>
                                    <button className='buttonCadastrarCarros' onClick={() => Salvar()}>Cadastrar</button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Econômico */}

                    <section className='sectionsDoscardscarros espaçamentoEntreAsSections'>
                        <h2 className='h2Carros'>Econômico</h2>
                        <div className="barraDeSeparacaoCarros"></div>


                            <div className='alinhamentoDosCards'>
                                {carros.map((item):any =>{
                                    return(
                                        <div className='cardsAPICarros'>
                                            <img src={car3_2} alt="Imagem de um carro econômico" />
                                            <div className='alinhamentocardCarros'>
                                                <div className='h3CardDiv'>
                                                    <h3 className='nomeDoCarro'>{item.nome}</h3>
                                                </div>
                                                <div className='divPCardCarros'>
                                                    <p className='pCardCarros'>Faça a sua reserva e garata a locação do automóvel.</p>
                                                </div>
                                                <div className='buttonsDoCardcarro'>
                                                    <button className='buttonEditarCarros' onClick={() => EditarDois(item.id, item.nome, item.portas, item.npessoas, item.airbag)}>Editar</button>
                                                    <button className='buttonExcluirCarros' onClick={() => Excluir(item.id)}>Excluir</button>
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