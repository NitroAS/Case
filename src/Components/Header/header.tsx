import '../../Assets/CSS/header.css'
import { Link } from "react-router-dom";
import LogoHeader from "../../Assets/img/logo.png"
export const Header = (): JSX.Element => {

    return (
        <>
            <Link className="button1" to='/'>Home</Link>
            <Link className="button2" to='/carros'>Carros</Link>
            <Link className="button3" to='/reservas'>Reservas</Link>

            <div className="LogoHeader">
                <img src={LogoHeader} alt="Logo do header" />
            </div>

            <Link className="button4" to='/locadora'>Locadora</Link>
            <Link className="button5" to='/perfil'>Perfil</Link>
            <Link className="button6" to='/'>Sair</Link>



        </>
    );
}

export default Header