export const Carros = ():JSX.Element => {
    return(
        <div>
            <section>
                <h1>Carros</h1>
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
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