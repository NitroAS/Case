import jwt_decode from "jwt-decode";

export function HandleCredentialResponse(response) {
  
  if(response !== undefined){
    let token = parseJwt(response.credential)
    localStorage.setItem('token', JSON.stringify(token))
    console.log(token)
  }
  
  let objeto = {
    nome : "nome",
    telefone : "telefone",
    email : "email",
  }
  localStorage.setItem('usuario', JSON.stringify(objeto))

  window.google.accounts.id.initialize({
    client_id: "671297347573-1m7mp3sei7iphdom1pa6cfvfg10dobv2.apps.googleusercontent.com",
    callback: HandleCredentialResponse
  });
  window.google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    { theme: "outline", size: "large", width: 400}  // customization attributes
  );
  window.google.accounts.id.prompt(); // also display the One Tap dialog
  console.log(window.google.accounts)
}

function parseJwt (token) {
  var decoded = jwt_decode(token);
  console.log(decoded)
  // let redirect = localStorage.getItem('token')
  if(decoded.email === "viniciusgomesdecerqueira@gmail.com" || decoded.email === "alexsandrosouzadasilva75@gmail.com" ){
    window.location.replace('http://localhost:3000/carros')
  }
  else{
    window.location.replace('http://localhost:3000/perfilUsuario')
  }
  return decoded;
};


// const BuscarUsuarios = () =>  {

//   const PegandoPerfis = () => {
//     apiCase.get('usuario')
//       .then(resultado => {
//         setPerfis(resultado.data)
//       })  
//     }

//   const A = localStorage.getItem('token')

//   const token  = JSON.parse(A)
  
//   const usuario = perfis.find(usuario => usuario.email === token.email) 
  
//   if (usuario !== undefined){
//     window.location.replace('http://localhost:3000/carros')
//   }
//   else{
//     window.location.replace('http://localhost:3000/perfilUsuario')
//   }

// }

export default HandleCredentialResponse;