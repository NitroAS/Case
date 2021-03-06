// css
import '../../Assets/CSS/carros.css'

// IMGs
import car3_2 from '../../Assets/IMGsCarros/car3_2.png'
import car2_2 from '../../Assets/IMGsCarros/car2_2.png'
import car1_1 from '../../Assets/IMGsCarros/car1_1.png'

// sweetalert
import Swal from 'sweetalert2'

// Header e Footer
import Header from '../../Components/Header/header'
import Footer from '../../Components/Footer/footer'

// API
import { apiCase } from '../../services/api'

// useState e agregados
import React, { useEffect, useState } from "react"

// Componente button
import { Button } from '../../Components/BotaoEditarCarros/BotaoEditarCarros'

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
    // ---------------------------------

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

        Swal.fire({
            title: 'Deseja Excluir esse Carro??',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Excluir!'
        })

        .then((resultado) => {
            if (resultado.isConfirmed){
                apiCase.delete(`carros/${id}`)
                .then(() => window.location.reload())
            } 
        })
    }


    // Salvar
    const [nome, setNome] = useState('')
    const Salvar = () => {
        if (nome !== '' && portas !== '' && npessoas !== '' && airbag !== '') {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
            })

            // setTimeout(Salvar() {
                
            //   }, 2000)
  
            apiCase.post('carros', {nome : nome, portas : portas, npessoas : npessoas, airbag : airbag, locadoraId : locadoraValor})
            .then(ListarNomes())
            .then(() => window.location.reload())
        }else{
                Swal.fire({
                    title: 'Por Favor, Preencha os campos vazios',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#DB1812',
                    cancelButtonColor: '#41B8D2',
                    confirmButtonText: 'OK'
                })
            
        }
    }

    // Hook do airbag
    const [airbag, setAirbag] = useState('false')

    // Hook do Portas
    const [portas, setPortas] = useState('')

    // Hook para guardar o valor da locadora
    const [locadoraValor, setLocadoraValor] = useState('')

    // Hook de n??meros de pessoas 
    const [npessoas, setNPessoas] = useState('')

    // Hook id
    const [id,  setId] = useState(0)

    // Hook bot??o
    const [botao, setBotao] = useState(true)

    // Editar
    const [booleano, setbooleano] = useState(false)

    const Editar = ():any => {
      
        if(nome !== '' && portas !== '' && npessoas !== ''  && locadoraValor !== '' && airbag !== '') {

            apiCase.put(`carros/${id}`, {nome : nome, portas : portas, npessoas : npessoas, airbag : airbag, locadoraId : locadoraValor})
            .then(() => window.location.reload())
        }

        else {
            Swal.fire({
                title: 'Por Favor, Preencha os campos vazios',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#DB1812',
                cancelButtonColor: '#41B8D2',
                confirmButtonText: 'OK'
            })
        }
    }

    
    const EditarDois = (id:number, nome:string, portas:string, npessoas:string, airbag:string, locadoraValor:string) => {
        window.scroll({top:
        310,left: 0,behavior: 'smooth'})
        setbooleano(true)
        
        setId(id)
        setNome(nome)
        setPortas(portas)
        setNPessoas(npessoas)
        setAirbag(airbag)
        setLocadoraValor(locadoraValor.toString())
        

    }


    return(
        <div>
            <Header objeto={propsCarros} />
            <div className='mainCarros espa??amentoFinalCarros'>
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
                                    <select className='selectBooleanoAirbag' defaultValue={airbag} onChange={(e) => setAirbag(e.target.value)}>
                                        <option value="false">Sem Airbag</option>
                                        <option value="true">Com Airbag</option>
                                    </select>
                                    <input 
                                    type="text" 
                                    placeholder="Portas:" 
                                    className='inputsMenoresCarros' 
                                    value={portas}
                                    onChange = {(e) => setPortas(e.target.value)} />

                                    <input 
                                    type="text" 
                                    placeholder="N?? de Pessoas" 
                                    className='inputsMenoresCarros'
                                    value={npessoas}
                                    onChange = {(e) => setNPessoas(e.target.value)} />
                                </div>
                                <div className='divCadastrarCarros'>
                                    <select className='selectLocadouraCarros' value={locadoraValor} onChange={(e) => setLocadoraValor(e.target.value)}>
                                        <option value={''} disabled hidden>Qual a Locadoura?</option>
                                        {locadoras.map((item):any =>{
                                            return(
                                                <option value={item.id}>{item.nome}</option>
                                            )
                                        })}
                                    </select>
                                    <Button booleano={booleano} Editar={Editar} Salvar={Salvar} />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Econ??mico */}
                    
                    <section className='sectionsDoscardscarros espa??amentoEntreAsSections'>
                        <h2 className='h2Carros'>Econ??mico</h2>
                        <div className="barraDeSeparacaoCarros"></div>


                            <div className='alinhamentoDosCards'>
                                {carros.map((item):any =>{
                                    return(
                                        <div className='cardsAPICarros'>
                                            <img src={car3_2} alt="Imagem de um carro econ??mico" />
                                            <div className='alinhamentocardCarros'>
                                                <div className='h3CardDiv'>
                                                    <h3 className='nomeDoCarro'>{item.nome}</h3>
                                                </div>
                                                <div className='divPCardCarros'>
                                                    <p className='pCardCarros'>Fa??a a sua reserva e garata a loca????o do autom??vel.</p>
                                                </div>
                                                <div className='buttonsDoCardcarro'>
                                                    <button className='buttonEditarCarros' onClick={() => EditarDois(item.id, item.nome, item.portas, item.npessoas, item.airbag, item.locadoraId)}>Editar</button>
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
                                <img src={car2_2} alt="Imagem de um carro econ??mico" />
                                <div className='alinhamentocardCarros'>
                                    <div className='h3CardDiv'>
                                        <h3 className='nomeDoCarro'>Fiat Uno 1.0</h3>
                                    </div>
                                    <div className='divPCardCarros'>
                                        <p className='pCardCarros'>Fa??a a sua reserva e garata a loca????o do autom??vel.</p>
                                    </div>
                                    <div className='buttonsDoCardcarro'>
                                        <button className='buttonEditarCarros'>Editar</button>
                                        <button className='buttonExcluirCarros'>Excluir</button>
                                    </div>
                                </div>
                            </div>

                            <div className='cardsAPICarros'>
                                <img src={car2_2} alt="Imagem de um carro econ??mico" />
                                <div className='alinhamentocardCarros'>
                                    <div className='h3CardDiv'>
                                        <h3 className='nomeDoCarro'>Fiat Uno 1.0</h3>
                                    </div>
                                    <div className='divPCardCarros'>
                                        <p className='pCardCarros'>Fa??a a sua reserva e garata a loca????o do autom??vel.</p>
                                    </div>
                                    <div className='buttonsDoCardcarro'>
                                        <button className='buttonEditarCarros'>Editar</button>
                                        <button className='buttonExcluirCarros'>Excluir</button>
                                    </div>
                                </div>
                            </div>

                            <div className='cardsAPICarros'>
                                <img src={car2_2} alt="Imagem de um carro econ??mico" />
                                <div className='alinhamentocardCarros'>
                                    <div className='h3CardDiv'>
                                        <h3 className='nomeDoCarro'>Fiat Uno 1.0</h3>
                                    </div>
                                    <div className='divPCardCarros'>
                                        <p className='pCardCarros'>Fa??a a sua reserva e garata a loca????o do autom??vel.</p>
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
                                <img src={car1_1} alt="Imagem de um carro econ??mico" />
                                <div className='alinhamentocardCarros'>
                                    <div className='h3CardDiv'>
                                        <h3 className='nomeDoCarro'>Fiat Uno 1.0</h3>
                                    </div>
                                    <div className='divPCardCarros'>
                                        <p className='pCardCarros'>Fa??a a sua reserva e garata a loca????o do autom??vel.</p>
                                    </div>
                                    <div className='buttonsDoCardcarro'>
                                        <button className='buttonEditarCarros'>Editar</button>
                                        <button className='buttonExcluirCarros'>Excluir</button>
                                    </div>
                                </div>
                            </div>

                            <div className='cardsAPICarros'>
                                <img src={car1_1} alt="Imagem de um carro econ??mico" />
                                <div className='alinhamentocardCarros'>
                                    <div className='h3CardDiv'>
                                        <h3 className='nomeDoCarro'>Fiat Uno 1.0</h3>
                                    </div>
                                    <div className='divPCardCarros'>
                                        <p className='pCardCarros'>Fa??a a sua reserva e garata a loca????o do autom??vel.</p>
                                    </div>
                                    <div className='buttonsDoCardcarro'>
                                        <button className='buttonEditarCarros'>Editar</button>
                                        <button className='buttonExcluirCarros'>Excluir</button>
                                    </div>
                                </div>
                            </div>

                            <div className='cardsAPICarros'>
                                <img src={car1_1} alt="Imagem de um carro econ??mico" />
                                <div className='alinhamentocardCarros'>
                                    <div className='h3CardDiv'>
                                        <h3 className='nomeDoCarro'>Fiat Uno 1.0</h3>
                                    </div>
                                    <div className='divPCardCarros'>
                                        <p className='pCardCarros'>Fa??a a sua reserva e garata a loca????o do autom??vel.</p>
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