import car3_2 from '../../Assets/IMGsCarros/car3_2.png'
import '../../Assets/CSS/modalCarros.css'
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { log } from 'console';

export const ModalCarros = (props: any): JSX.Element => {

    
        
    
        
  

    {
        if (props.Modal === true) {
            console.log(props.item);


            let texto;

        if(props.item.airbag === false)
        {
            texto= 'Sem airbag'
        }

        else
        {
            texto = 'Com airbag'
        }
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
                                <input type="text" value= {`${props.item.portas}  Portas`} className='inputModal' />
                                <input type="text" value={texto} className='inputModal' />
                                <input type="text" value={` ${props.item.npessoas} Pessoas`} className='inputModal' />
                                <input type="text" value={props.item.locadora.nome} className='inputModal' />
                            </div>
                            <div className='divButtonModal'>
                                <Link className='linkModal' to='/ReservasUsuario' state={{id: props.item.id , locadoraId: props.item.locadoraId , guardaNomeCarros: props.item.nome  , guardaLocadora: props.item.locadora.nome }}><button className='bittonReservaModal'>Reservar</button></Link>
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