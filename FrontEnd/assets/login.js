

export function ajoutListenerConnection(){
    const reponse = await fetch("http://localhost:5678/api/users/login");
    const login_enr = await reponse.json();

    const login = document.querySelector(".login");
    login.addEventListener("submit", function(event){

        const connection = {
            email_utilisateur: event.target.querySelector("[name=email]").value,
            mdp_utilisateur: event.target.querySelector("[name=mdp").value,
        };

        const donneConnection = JSON.stringify(connection);

        fetch("http://localhost:5500/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: donneConnection
        });

        if(email_utilisateur === email_login && mdp_utilisateur === mdp_login){
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