
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

const addButton = document.querySelector('.addButton')

addButton?.addEventListener('click', () => {
    const input = document.querySelector('#image')
    console.log("test")
    input.click()
})