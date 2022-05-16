import '../../Assets/CSS/header.css'
import { Link } from "react-router-dom";
import HeaderFoto from ''
export const Header = (): JSX.Element => {

    return (
        <>
            <div className="LogoHeader">
                <img src={HeaderFoto} alt="Logo do header" />
            </div>
        </>
    );
}

export default Header