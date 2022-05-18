import '../../Assets/CSS/header.css'
import { Link } from "react-router-dom";
import LogoHeader from "../../Assets/img/logo.png"
export const Header = (): JSX.Element => {

    return (
        <>

            <div className="AlinhamentoHeaderPerfil">
               
                    <Link className="btnHeaderPerfil" to='/'>Home</Link>
                    <Link className="btnHeaderPerfil" to='/carros'>Carros</Link>
                    <Link className="btnHeaderPerfil" to='/reservas'>Reservas</Link>
               

                <div className="LogoHeader">
                    <img src={LogoHeader} alt="Logo do header" />
                </div>

                    <Link className="btnHeaderPerfil" to='/locadora'>Locadora</Link>
                    <Link className="btnHeaderPerfil" to='/perfil'>Perfis</Link>
                    <Link className="btnHeaderPerfil" to='/login'>Sair</Link>
                
            </div>



        </>
    );
}

export default Header