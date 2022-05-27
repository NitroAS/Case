export const ButtonReserva = (props:any) => {
    if(props.booleano === true){
        return(<button className='buttonCadastrarCarrosUsuario' onClick={() => props.editar}>Editar</button>)
    }else{
        return(<button className='buttonCadastrarCarrosUsuario' onClick={() => props.cadastrar}>Reservar</button>)
    }
}