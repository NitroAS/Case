import car3_2 from '../../Assets/IMGsCarros/car3_2.png'
import '../../Assets/CSS/modalCarros.css'

export const ModalCarros = ():JSX.Element => {

    return(
        <>
            <div className='contornoModal'>
                <img src={car3_2} alt="imagem de um carro econômico" className='imgCarroEonômicocarros' />
                <div className='alinhamentoModal'>
                    <div className='divH3Modal'>
                        <h3 className='h3Modal'>papa</h3>
                    </div>
                    <div className='divInputsModal'>
                        <input type="text" placeholder='portas' className='inputModal' />
                        <input type="text" placeholder='Airbag' className='inputModal' />
                        <input type="text" placeholder='5 pessoas' className='inputModal' />
                        <input type="text" placeholder='Locadoura Matriz' className='inputModal' />
                    </div>
                    <div className='divButtonModal'> 
                        <button className='bittonReservaModal'>Reservar</button>
                    </div>
                </div>
            </div>
        </>
    )

}