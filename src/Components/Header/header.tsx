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
                        <Link className={"btnHeaderPerfil " + props.objeto.underlineCarros} to='/CarrosUsuario'>{props.objeto.descriptionCarrosUsuario}</Link>
                        <Link className={"btnHeaderPerfil " + props.objeto.underlineReserva} to='/reservas'>{props.objeto.descriptionReservas}</Link>
                        <Link className={"btnHeaderPerfil " + props.objeto.underlineReserva} to='/reservasUsuario'>{props.objeto.descriptionReservasUsuario}</Link>
                

                    <div className="LogoHeader">
                        <img src={LogoHeader} alt="Logo do header" />
                    </div>

                        <Link className={"btnHeaderPerfil " + props.objeto.underlineLocadora} to='/locadora'>{props.objeto.descriptionLocadora}</Link>
                        <Link className={"btnHeaderPerfil " + props.objeto.underlinePerfil} to='/perfil'>{props.objeto.descriptionPerfil}</Link>
                        <Link className={"btnHeaderPerfil " + props.objeto.underlinePerfil} to='/perfilUsuario'>{props.objeto.descriptionPerfilUsuario}</Link>
                        <Logout btnSair={props.objeto.supdescription}/>
                </div>
            </div>



        </>
    );
}

export default Header