import '../../Assets/CSS/locadora.css'
import { Header } from '../../Components/Header/header'
import { Footer } from '../../Components/Footer/footer'
import { useEffect, useState } from 'react'
import { apiCase } from '../../services/api'
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

    const [locadora, setLocadora] = useState<any[]>([]);

    const PegandoLocadora = () => {

        apiCase.get('locadoras')
            .then(resultado => {
                setLocadora(resultado.data)
                
            })

    }

    useEffect(() => {

        PegandoLocadora()
    }, [])

    const ExcluirLocadora = (id: any) => {
        if (window.confirm('Deseja realmente excluir o Perfil?')) {
            apiCase.delete(`locadoras/${id}`)
            .then(() => {
                window.location.reload()
                 

                })
            }
            
    }



    const TrazerDadosDoLocadora = (id:number, nome:string , ) => {

        setNomeLocadoras(nome)
        setGuardaIdLocadoras(id)

    }
    window.scroll({top:
        310,left: 0,behavior: 'smooth'})


        // const feita para guarda o Id e la em baixo no Onclick
    const [guardaIdLocadoras, setGuardaIdLocadoras] = useState(0);

    const [nomeLocadoras, setNomeLocadoras] = useState('');
   
    
    const EditarLocadora = (id: number) => {

            if(nomeLocadoras !== ''){

                apiCase.put(`locadoras/${id}`, { nome: nomeLocadoras })
                .then(() => {
                    window.location.reload()
                    
                })
                
            }   
    }

    const [cadastroLocadoras, setCadastroLocadoras] = useState<any>('');
    const CadastrarLocadora = () => {
        
        if ( cadastroLocadoras !== '')
        {
            apiCase.post(`locadoras`, { nome : cadastroLocadoras })
           
            
            .then(() => {
                
                setCadastroLocadoras('')
                
             })
             
             .then(() => {
                 window.location.reload()
             })
         }
         
    
         
     
 }

    return (
        <>
                 <Header objeto={propsLocadora} />
            <div className='mainLocadora'>
                <section className='locadora'>
                    <h2 id='tituloLocadora'>Locadora</h2>
                    <div className='inputsLocadora'>
                        <div className='centralizarInputslocadora'>
                            <input 
                            placeholder='Locadora:' 
                            className='inputCadastrarLocadora' 
                            type="text" 
                            defaultValue={nomeLocadoras}
                            onChange={e => setNomeLocadoras(e.target.value)}
                            />
                        </div>
                        <div className='centralizarInputslocadora'>
                            <input placeholder='Endereço:' className='inputCadastrarLocadora' type="text" />
                        </div>
                        <div id='centralizarInputBotao'>
                            <input placeholder='Telefone:' className='inputCadastrarLocadora telefoneLocadora' type="text" />
                            <button className='botaoCadastrarLocadora'onClick={() => EditarLocadora(guardaIdLocadoras)}>Cadastrar</button>
                            <button className='botaoCadastrarLoacadora'onClick={() => CadastrarLocadora()}>Cadastrar</button>
                        </div>
                    </div>
                </section>
              
                {locadora.map((item) : any =>{
                    return(

                <section className='SectionCardsLocadora'>
                    <div className='cardsLocadora'>
                        <div className='CentralizarNomeLocadora'>
                            <h3 className='nomeLocadora'>{item.nome}</h3>
                        </div>
                        <div className='centralizarInformacoesLocadora'>
                            <p className='informacoesLocadora'>Rua marques, 320</p>
                            <p className='informacoesLocadora'>(11) 8888-8888</p>
                        </div>
                        <div className='botoesLocadora'>
                            <button className='botaoEditar'onClick={() => TrazerDadosDoLocadora (item.id , item.nome)}>Editar</button>
                            <button className='botaoExcluir'onClick={() => ExcluirLocadora(item.id)}>Excluir</button>
                        </div>
                    </div>
                </section>
                    )
                })}
            </div>
            <Footer />
        </>
    );
}

export default Locadora