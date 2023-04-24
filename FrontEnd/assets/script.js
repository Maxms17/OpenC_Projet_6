
const boutonTrierTous = document.querySelector(".button_trier_Tous");
const boutonTrierObj = document.querySelector(".button_trier_Obj");
const boutonTrierApp = document.querySelector(".button_trier_App");
const boutonTrierHetR = document.querySelector(".button_trier_HetR");

boutonTrierTous.addEventListener("click", function () {
    getNul() 
    getTous()
    console.log("Tous");
});

boutonTrierObj.addEventListener("click", function () {
    getNul() 
    getObj()
    console.log("Objet");
});

boutonTrierApp.addEventListener("click", function () {
    getNul() 
    getApp()
    console.log("Appartement");
});

boutonTrierHetR.addEventListener("click", function () {
    getNul() 
    getHetR()
    console.log("Hotel et restaurant");
});