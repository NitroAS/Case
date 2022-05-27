export const ButtonLocadora = (props:any) => {
    if(props.booleano === true){
        return(<button className='botaoCadastrarLocadora' onClick={props.Editar}>Editar</button>)
    }else{
        return( <button className='botaoCadastrarLocadora' onClick={props.Cadastrar}>Cadastrar</button>)
    }
}