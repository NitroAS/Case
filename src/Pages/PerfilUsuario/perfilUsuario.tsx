import '../../Assets/CSS/perfilUsuario.css'
import { Header } from '../../Components/Header/header'
import { Footer } from '../../Components/Footer/footer'
import { useEffect, useState } from 'react'
import { apiCase } from '../../services/api'
import Swal from 'sweetalert2'

export const PerfilUsuario = (): JSX.Element => {
    let propsPerfilUsuario: any = {
        descriptionCarrosUsuario: 'Carros',
        descriptionReservasUsuario: 'Reservas',
        descriptionPerfilUsuario: 'Perfis',
        supdescription: 'Sair',
        underlinePerfil: 'underlinePerfil'
    }

    const [perfisUsuario, setPerfisUsuario] = useState<any[]>([]);
    const PegandoPerfisUsuario = () => {
        apiCase.get('usuario')
            .then(resultado => {


                setPerfisUsuario(resultado.data)

            }) 
    }

    useEffect(() => {
        PegandoPerfisUsuario()
    }, [])
    useEffect(() => {
        BuscarUsuarios()
    }, [perfisUsuario])
    

    const BuscarUsuarios = () =>  {
            
        const A:any = localStorage.getItem('token')

        const token:any  = JSON.parse(A)
        
        const usuario = perfisUsuario.find(usuario => usuario.email !== token.email)
        

        if (usuario !== undefined) {
            setGuardaIdUsuario(usuario.id)
            setNomeEmailUsuario(usuario.email)
            setTelefoneUsuario(usuario.telefone)
            setNomePerfisUsuario(usuario.nome)
        }
    }

    const ExcluirPerfilUsario = (id: any) => {

        Swal.fire({
            title: 'Deseja Excluir esse Perfil??',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete!'
        })
        .then((resultado) => {
            if (resultado.isConfirmed) {

                apiCase.delete(`usuario/${id}`)
                    .then(() => {
                        window.location.reload()
    
                    })

             }
        })
                   
    }

    window.scroll({top:
        310,left: 0,behavior: 'smooth'})
        // const feita para guarda o Id e la em baixo no Onclick
    const [guardaIdUsuario, setGuardaIdUsuario] = useState(0);
    const [nomePerfisUsuario, setNomePerfisUsuario] = useState('');
    const [nomeEmailUsuario, setNomeEmailUsuario] = useState('');
    const [telefoneUsuario, setTelefoneUsuario] = useState('')

    const GuardaHook = (id:any , nome:string , email:string , telefone:string) => {
        setGuardaIdUsuario(id)
        setNomePerfisUsuario(nome)
        setNomeEmailUsuario(email) 
        setTelefoneUsuario(telefone) 
    
      }

    const EditarPerfilUsuario = (id: number) => {
        
            if(nomePerfisUsuario !== '' && nomeEmailUsuario !== '' && telefoneUsuario !== ''){
                apiCase.put(`usuario/${id}`, { nome: nomePerfisUsuario, email: nomeEmailUsuario , telefone: telefoneUsuario })
                .then(() => {
                    window.location.reload()
                    
                })
            }   
    }

    return (
        <>
            <Header objeto={propsPerfilUsuario} />
            <div className='alinahemntoGeralPerfilUsuario'>
                <div className='AlinhamentoBoxPerfilUsuario'>
                    <div className='BoxPerfil'>
                        <div className="tituloAlinhamentoPerfilUsuario">
                            <h1>Perfil</h1>
                        </div>
                        <div className="InputPerfilAlinhamentoUsuario">
                            <div className='inputNomeGeral'>
                                <input
                                    className="inputsPerfilUsuario"
                                    type="text" name="InputPerfil"
                                    placeholder="Maria de Fátma Muniz"
                                    minLength={3}
                                    maxLength={28}
                                    defaultValue={nomePerfisUsuario}
                                    onChange={e => setNomePerfisUsuario(e.target.value)}
                                ></input>
                            </div>
                            <div className='inputTelefoneGeral'>
                                <input
                                    className="inputsPerfilUsuario"
                                    type="text"
                                    name="InputPerfil"
                                    placeholder="(11) 9999-9090"
                                    minLength={10}
                                    maxLength={15}
                                    defaultValue={telefoneUsuario}
                                    onChange={e => setTelefoneUsuario(e.target.value)}
                                ></input>
                            </div>
                            <div className='inputEmailGeral'>    
                                <input 
                                    className="inputsPerfilUsuario"
                                    type="text" 
                                    name="InputPerfil" 
                                    placeholder="maria@gmail.com" 
                                    minLength={10}
                                    maxLength={35}
                                    defaultValue={nomeEmailUsuario}
                                    onChange={e => setNomeEmailUsuario(e.target.value)}
                                ></input>
                            </div>
                        </div>
                        <div className="btnPerfilAlinhamentoUsuario">
                            <div className="btnAtualizarUsuario">
                                <button className='btnPerfilAtualizarUsuario' onClick={() => EditarPerfilUsuario(guardaIdUsuario)}>Atualizar</button>
                            </div>
                            <div className="btnExcluirAlinhamentoPerfilUsuario">
                                <button className='btnPerfilExcluirUsuario'onClick={() => ExcluirPerfilUsario(guardaIdUsuario)}>Excluir Cadastro</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default PerfilUsuario