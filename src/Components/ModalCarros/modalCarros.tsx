import car3_2 from '../../Assets/IMGsCarros/car3_2.png'
import '../../Assets/CSS/modalCarros.css'
import { Link } from "react-router-dom";

export const ModalCarros = (props: any): JSX.Element => {

    {
        if (props.Modal === true) {
            return (
                <>
                    <div className='fundoModal' onClick={props.Fechar}></div>
                    <div className='contornoModal'>
                        <img src={car3_2} alt="imagem de um carro econômico" className='imgCarroEonômicocarros' />
                        <div className='alinhamentoModal'>
                            <div className='divH3Modal'>
                                <h3 className='h3Modal'>{props.item.nome}</h3>
                            </div>
                            <div className='divInputsModal'>
                                <input type="text" value={props.item.portas} className='inputModal' />
                                <input type="text" value={props.item.airbag} className='inputModal' />
                                <input type="text" value={props.item.npessoas} className='inputModal' />
                                <input type="text" value={props.item.locadora.nome} className='inputModal' />
                            </div>
                            <div className='divButtonModal'>
                                <Link className='linkModal' to='/reservasUsuario'><button className='bittonReservaModal'>Reservar</button></Link>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    }

    return (
        <div></div>
    )

}