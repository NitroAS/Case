import '../../Assets/CSS/header.css'
import HeaderFoto from "../../Assets/img/logo.png"
export const Header = (): JSX.Element => {

    return (
        <>

            <div className="LogoHeader">
                <img src={HeaderFoto} alt="Logo do header" />
            </div>


            {/* <Link className="button1" to='/'>Home</Link>
            <Link className="button2" to='/Pag2'>Usuários</Link> */}
        </>
    );
}

export default Header