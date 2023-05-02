

function ajoutListenerConnection(){

    try { 

        const login = document.querySelector(".login");
        login.addEventListener("submit", function(event){

            const connection = {
                email: event.target.querySelector("[name=email]").value,
                password: event.target.querySelector("[name=mdp").value,
            };

            const donneConnection = JSON.stringify(connection);

            fetch("http://localhost:5678/api/users/login", {
                method: "POST",
                headers: { "Content-Type": "application/json",  "Origin":"http://localhost:5500/" },
                body: donneConnection
            })

            then((res) => {
                console.log(test)

                if(res === 200){
                    console.log("200")
                    //then(res.json)
                }
                else if(res === 401){
                    console.log("401")
                }
                else if(res === 404){
                    console.log("404")
                }
                else{
                    console.log("Pb")
                }
            })

        }); 

    } catch ( console.log("Problème backend") ) {}
}

ajoutListenerConnection()