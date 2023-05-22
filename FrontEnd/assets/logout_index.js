function deconnexion() {
    // Vider le sessionStorage
    localStorage.removeItem("token");
    // Rediriger vers la page de connexion
    window.location.href = "login.html";
}
  
const boutonDeconnexion2 = document.querySelector('#boutonDeconnexion2');

boutonDeconnexion2.addEventListener("click", function(event) {
  event.preventDefault();
  if (event.target.id === 'boutonDeconnexion2') {
    deconnexion();
  }
});
