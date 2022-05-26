export const ButtonPerfil = (props:any) => {

    if(props.Booleano === true){
        return( <button className='btnPerfilAtualizar' onClick={props.Editar}>Editar</button>)
    }else{
        return(<button className='btnPerfilAtualizar' onClick={props.Cadastrar}>Atualizar</button>)
    }
}