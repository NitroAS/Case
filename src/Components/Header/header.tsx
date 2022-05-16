import '../../Assets/CSS/header.css'
import { Link } from "react-router-dom";

export const Header = (): JSX.Element => {

    return (
        <>
            <Link className="button1" to='/'>Home</Link>
            <Link className="button2" to='/Pag2'>Usuários</Link>
        </>
    );
}

export default Header