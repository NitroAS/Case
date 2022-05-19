export function HandleCredentialResponse() {

  window.google.accounts.id.initialize({
    client_id: "671297347573-1m7mp3sei7iphdom1pa6cfvfg10dobv2.apps.googleusercontent.com",
    callback: HandleCredentialResponse
  });
  window.google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    { theme: "outline", size: "large"}  // customization attributes
  );
  window.google.accounts.id.prompt(); // also display the One Tap dialog

}
export default HandleCredentialResponse;