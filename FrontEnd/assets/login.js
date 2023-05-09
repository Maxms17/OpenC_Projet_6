const btnDeconnexion = document.getElementById("btn-deconnexion");
const login = document.querySelector(".login");

login.addEventListener("submit", function (event) {
    event.preventDefault(); // éviter que la page ne se recharge

    const connection = {
        email: event.target.querySelector("[name=email]").value,
        password: event.target.querySelector("[name=mdp]").value,
    };

    const donneConnection = JSON.stringify(connection);

    fetch("http://localhost:5678/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Origin": "http://localhost:5500/" },
        body: donneConnection,
    })
    .then((res) => {
        if(res.status === 200){
            document.getElementById("error-message").innerHTML = "Vous êtes autorisé à vous connecter.";
            return res.json();
        }
        else if(res.status === 401){
            document.getElementById("error-message").innerHTML = "Vous n'êtes pas autorisé à vous connecter.";
        }
        else if(res.status === 404){
            document.getElementById("error-message").innerHTML = "Une erreur s'est produite lors de la connexion. Vérifier votre email et votre mot de passe.";
        }
        else{
            document.getElementById("error-message").innerHTML = "Une erreur s'est produite lors de la connexion. Veuillez réessayer plus tard.";
        }
    })
    .then((data) => {
        if (data) { 
            const token = data.token; // Extrait le token du JSON
            localStorage.setItem("token", token);
      
            window.location.href = "index.html";
            edition();
        }
    })
    .catch((error) => {
        console.error(error);
        document.getElementById("error-message").innerHTML = "Une erreur s'est produite lors de la connexion. Veuillez réessayer plus tard.";
    });
});

btnDeconnexion.addEventListener("click", function (event) {
    event.preventDefault();
    // Vider le sessionStorage
    localStorage.removeItem("token");
    // Rediriger vers la page de connexion
    window.location.href = "login.html";
});
  

