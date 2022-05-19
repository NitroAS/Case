import '../../Assets/CSS/locadora.css'
import { Header } from '../../Components/Header/header'
import { Footer } from '../../Components/Footer/footer'
let propsLocadora: any = {
    descriptionHome:  'Home',
    descriptionCarros:  'Carros',
    descriptionReservas:  'Reservas',
    descriptionLocadora:  'Locadora',
    descriptionPerfil:  'Perfil',
    supdescription: 'Sair',
    underlineLocadora: 'underlineLocadora'
}
export const Locadora = ():JSX.Element =>{

    return(
        <>
        <Header objeto={propsLocadora}   />
          
        <Footer />
        </>
    );
}

export default Locadora