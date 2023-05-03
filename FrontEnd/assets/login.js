function ajoutListenerConnection() {
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
        /*
        .then((res) => res.json())
        .then((res) => {
            if (res.status === 200) {
                window.location.href = "index.html";
                return res.json(); // Si le statut est 200, parsez le JSON et continuez
            } else {
                throw new Error(`erreur: ${res.status}`); // Sinon, lancez une erreur avec le code de statut
            }
        })
        */
        .then((res) => {
            if (!res.ok) {
                throw new Error(`Erreur HTTP ${res.status}`);
            }
            return res.json();
        })
        .then((data) => {
            const token = data.token; // Extrait le token du JSON
            sessionStorage.setItem("token", token);
            window.location.href = "index.html";
            // Stockez le token et effectuez d'autres actions ici
        })
        .catch((error) => {
            console.error(error);
            document.getElementById("error-message").innerHTML = "Une erreur s'est produite lors de la connexion. Veuillez réessayer plus tard.";
            //throw error; // Propager l'erreur pour afficher un message d'erreur dans la console du navigateur
        });
    });
}
  
ajoutListenerConnection();

/*
function ajoutListenerDeconnexion() {
    const btnDeconnexion = document.getElementById("btn-deconnexion");
    btnDeconnexion.addEventListener("click", function (event) {
      event.preventDefault();
      // Vider le sessionStorage
      sessionStorage.removeItem("token");
      // Rediriger vers la page de connexion
      window.location.href = "login.html";
    });
}

ajoutListenerDeconnexion();
*/