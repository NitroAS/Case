import '../../Assets/CSS/header.css'
import { Link } from "react-router-dom";
import LogoHeader from "../../Assets/img/logo.png"
import Logout from '../Logout/logout';
export const Header = (props:any): JSX.Element => {




    return (
        <>
            <div className='header'>
                <div className="AlinhamentoHeaderPerfil">
                
                        <Link className="btnHeaderPerfil" to='/'>Home</Link>
                        <Link className={"btnHeaderPerfil " + props.objeto.underlineCarros} to='/carros'>{props.objeto.descriptionCarros}</Link>
                        <Link className={"btnHeaderPerfil " + props.objeto.underlineReserva} to='/reservas'>{props.objeto.descriptionReservas}</Link>
                

                    <div className="LogoHeader">
                        <img src={LogoHeader} alt="Logo do header" />
                    </div>

                        <Link className={"btnHeaderPerfil " + props.objeto.underlineLocadora} to='/locadora'>{props.objeto.descriptionLocadora}</Link>
                        <Link className={"btnHeaderPerfil " + props.objeto.underline} to='/perfil'>{props.objeto.descriptionPerfil}</Link>
                        <Logout btnSair={props.objeto.supdescription}/>
                </div>
            </div>



        </>
    );
}

export default Header