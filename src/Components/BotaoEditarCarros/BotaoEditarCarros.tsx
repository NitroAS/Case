


export const Button =(props:any) => {
    console.log(props.booleano);
    
    if(props.booleano === true){
        return(<button className='editar' onClick={props.Editar}>Editar</button>)
    }else{
        return( <button className='buttonCadastrarCarros' onClick={props.Salvar}>Cadastrar</button>)
    }
}
