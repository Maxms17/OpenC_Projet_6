
function edition(){
    if(localStorage.getItem('token')){
        const element = document.getElementById("edition");
        element.style.display = "flex";
    }
}

edition();

function edition_modifier(){
    if(localStorage.getItem('token')){
        const element = document.getElementById("openModal");
        element.style.display = "flex";
    }
}

edition_modifier()