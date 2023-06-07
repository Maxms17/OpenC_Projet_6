function deconnexion() {
    // Vider le sessionStorage
    localStorage.removeItem("token");
    // Rediriger vers la page de connexion
    window.location.href = "login.html";
}
  
const boutonDeconnexion1 = document.querySelector('#boutonDeconnexion');

boutonDeconnexion1.addEventListener("click", function(event) {
    event.preventDefault();
    if (event.target.id === 'boutonDeconnexion') {
        deconnexion();
    }
});
  
