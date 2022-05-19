import React from "react";
import { Link } from "react-router-dom";
;

const Logout = (props:any) =>{

    const Sair = () => {
        localStorage.removeItem('token');
        window.location.replace('http://localhost:3000');
    };

    return(
        <Link className="btnHeaderPerfilSair" to='/login' onClick={Sair}>{props.btnSair}</Link>
    );
};
export default Logout;