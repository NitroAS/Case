export function HandleCredentialResponse(response) {
  
  if(response !== undefined){
    let token = parseJwt(response.credential)
    localStorage.setItem('token', JSON.stringify(token))
    window.location.replace('http://localhost:3000/carros')
  }

    window.google.accounts.id.initialize({
      client_id: "671297347573-1m7mp3sei7iphdom1pa6cfvfg10dobv2.apps.googleusercontent.com",
      callback: HandleCredentialResponse
    });
    window.google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large"}  // customization attributes
    );
    window.google.accounts.id.prompt(); // also display the One Tap dialog
  console.log(window.google.accounts)
}

function parseJwt (token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
};


export default HandleCredentialResponse;