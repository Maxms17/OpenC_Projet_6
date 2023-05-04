
function edition(){
    if(localStorage.getItem('token')){
        const element = document.getElementById("edition");
        element.style.display = "flex";
    }
}

edition();