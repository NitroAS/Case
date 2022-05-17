// css
import '../../Assets/CSS/carros.css'

export const Carros = ():JSX.Element => {
    return(
        <div>
            <section>
                <h1>Carros</h1>
                <input type="text" placeholder='Ex.: Onix 2.0'/>
                <select>
                    <option selected disabled hidden>Airbag</option>
                    <option value="false">Sem Airbag</option>
                    <option value="true">Com Airbag</option>
                </select>
                <input type="text" placeholder="Portas:" />
                <input type="text" placeholder="N° de Pessoas" />
                <select>
                    <option selected disabled hidden>Qual a Locadoura?</option>
                    <option>Loucadora 1</option>
                    <option>Loucadora 2</option>
                    <option>Loucadora 3</option>
                </select>
                <button>Cadastrar</button>
            </section>
            <section>
                <h2>Econômico</h2>
                <div className="barraDeSeparacaoCarros"></div>
            </section>
            <section>
                <h2>Especial</h2>
                <div className="barraDeSeparacaoCarros"></div>
            </section>
            <section>
                <h2>Luxo</h2>
                <div className="barraDeSeparacaoCarros"></div>
            </section>
        </div>
    )
}