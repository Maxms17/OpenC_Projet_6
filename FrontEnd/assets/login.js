

export function ajoutListenerConnection(){
    const login = document.querySelector(".login");
    login.addEventListener("submit", function(event){

        const connection = {
            email_utilisateur: event.target.querySelector("[name=email]").value,
            mdp_utilisateur: event.target.querySelector("[name=mdp").value,
        };

        const donneConnection = JSON.stringify(connection);

        fetch("http://localhost:8081/avis", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: donneConnection
        });

        if(){
            return(200);
        }
        else if(){
            return(401);
        }
        else{
            return(404);
        }

    });
}

ajoutListenerConnection()