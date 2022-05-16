import { Link } from 'react-router-dom';
import '../../Assets/CSS/home.css'
import { Header } from '../../Components/Header/header'

export const Home = ():JSX.Element =>{

    return(
        <>
          <Header />

            <Link className="button1" to='/'>Home</Link>
            <Link className="button2" to='/Pag2'>Usuários</Link>

        </>
    );
}

export default Home