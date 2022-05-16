import '../../Assets/CSS/header.css'
import { Link } from "react-router-dom";
import LogoHeader from '../../Assets/img/logo.png'
export const Header = (): JSX.Element => {

    return (
        <>
            <div className="LogoHeader">
                <img src={LogoHeader} alt="Logo do header" />
            </div>

            <Link className="button1" to='/'>Home</Link>
        </>
    );
}

export default Header