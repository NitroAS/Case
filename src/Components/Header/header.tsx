import '../../Assets/CSS/header.css'
import { Link } from "react-router-dom";
import LogoHeader from "../../Assets/img/logo.png"
export const Header = (): JSX.Element => {

    return (
        <>

            <div className="AlinhamentoHeader">
               
                    <Link className="buttonHeader" to='/'>Home</Link>
                    <Link className="buttonHeader" to='/carros'>Carros</Link>
                    <Link className="buttonHeader" to='/reservas'>Reservas</Link>
               

                <div className="LogoHeader">
                    <img src={LogoHeader} alt="Logo do header" />
                </div>

                    <Link className="buttonHeader" to='/locadora'>Locadora</Link>
                    <Link className="buttonHeader" to='/perfil'>Perfil</Link>
                    <Link className="buttonHeader" to='/login'>Sair</Link>
                
            </div>



        </>
    );
}

export default Header