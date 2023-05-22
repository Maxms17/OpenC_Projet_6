const btnDeconnexion = document.querySelectorAll('button.btn-deconnexion');

btnDeconnexion.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
        event.preventDefault();
        // Vider le sessionStorage
        localStorage.removeItem("token");
        // Rediriger vers la page de connexion
        window.location.href = "login.html";
    });
});
