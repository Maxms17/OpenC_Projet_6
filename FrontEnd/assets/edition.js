
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
        if(element){
            element.style.display = "flex";
        }
        
    }
}

edition_modifier()

function log(){

    const logout = document.getElementById("logout_visible");
    const login = document.getElementById("login_visible");

    if(localStorage.getItem('token')){
        logout.style.display = "flex";
        login.style.display = "none";
    }
    else{
        logout.style.display = "none";
        login.style.display = "flex";
    }
}

log();

const addButton = document.querySelector('.addButton')

addButton?.addEventListener('click', () => {
    const input = document.querySelector('#image')
    input.click()
})