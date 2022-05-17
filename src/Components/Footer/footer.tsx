// css
import '../../Assets/CSS/footer.css'

// IMGs
import instagram from '../../Assets/img/instagram.png'
import facebook from '../../Assets/img/facebook.png'
import twitter from '../../Assets/img/twitter.png'

export const Footer = ():JSX.Element =>{

    return(
        <>
            <div className='footer'>
                <div className='alinhamentoFooter'>
                    <div className='paiInfosFooter'>
                        <div className='infosFooter'>
                            <div className='infosFooterUm'>
                                <button className='buttonFooter'>Política de Segurança</button>
                                <button className='buttonFooter'>Trabalhe Conosco</button>
                                <button className='buttonFooter'>PROCON</button>
                            </div>
                            <div className='infosFooterDois'>
                                <p className='pFooter'>31 99999 9666 - contato@divinafashion.com</p>
                                <p className='pFooter'>AV. Principal, 123 . BH/MG</p>
                            </div>
                        </div>
                        <div className='barraFooter'></div>
                    </div>
                    
                    
                    <div className='ultimaDivFooter'>
                        <div className='alinhamentoImgFooter'>
                            <img src={instagram} alt="Logo e link para o instagram" className='imgFooter' />
                            <img src={facebook} alt="Logo e link para o facebook" className='imgFooter' />
                            <img src={twitter} alt="Logo e link para o twitter" className='imgFooter' />
                        </div>
                        <p className='pMaiorFooter'>Todos os direitos reservados</p>
                    </div>
                </div>
           </div>
        </>
    );
}

export default Footer