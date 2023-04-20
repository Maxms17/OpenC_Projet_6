
// Récupération des pièces depuis le fichier JSON
const reponse = await fetch('../Backend/projet.json');
const projet = await reponse.json();

const mesprojet = projet[0];

const image = document.createElement("img");
image.src = mesprojet.image;

const text = document.createElement("p");
text.innerText = mesprojet.text;

const sectionPortfolio = document.querySelector(".portfolio");
sectionPortfolio.appendChild(image);
sectionPortfolio.appendChild(text);

/*
for(i=0;i<11;i++){
    img_projet.src = `./assets/images/${projet[i].image}`
	text_projet.innerHTML = projet[i].text
}
*/