import '../../Assets/CSS/header.css'
import { Link } from "react-router-dom";
import LogoHeader from "../../Assets/img/logo.png"
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
                        <Link className="btnHeaderPerfilSair" to='/login'>{props.objeto.supdescription}</Link>
                    
                </div>
            </div>



        </>
    );
}

export default Header