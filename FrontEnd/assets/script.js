// Récupération des pièces depuis le fichier JSON

async function getData() {
    const reponse = await fetch("http://localhost:5678/api/works");
    const works = await reponse.json();

    works.map((item) => {

        const sectionPortfolio = document.querySelector(".gallery");

        const carte = document.createElement("article");

        const image = document.createElement("img");
        image.src = item.imageUrl;
    
        const text = document.createElement("p");
        text.innerText = item.title;
    
        sectionPortfolio.appendChild(carte);

        carte.appendChild(image);
        carte.appendChild(text);
    })

}

getData()

const boutonTrierTous = document.querySelector(".button_trier_Tous");

boutonTrierTous.addEventListener("click", function () {
    console.log("Tous");
});

const boutonTrierObj = document.querySelector(".button_trier_Obj");

boutonTrierObj.addEventListener("click", function () {
    console.log("Objet");
});

const boutonTrierApp = document.querySelector(".button_trier_App");

boutonTrierApp.addEventListener("click", function () {
    console.log("Appartement");
});

const boutonTrierHetR = document.querySelector(".button_trier_HetR");

boutonTrierHetR.addEventListener("click", function () {
    console.log("Hotel et restaurant");
});

//const boutonTrierTous = document.querySelector(".button_trier_Tous");

//boutonTrierTous.addEventListener("click", function () {
    //pieces.sort(function (a, b) {
        //return a.prix - b.prix;
    //});
    //console.log(pieces);
//});

//const boutonTrierObj = document.querySelector(".button_trier_Obj");

//boutonTrierObj.addEventListener("click", function () {
    //const objet = Array.from(works);
    //objet.sort(function (a, b) {
        //return objet;
    //});
    //console.log(objet);
//});
