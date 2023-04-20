
// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("http://localhost:5678/api/works");
const works = await reponse.json();

const mesprojet = works[0];

const image = document.createElement("img");
image.src = mesprojet.image;

const text = document.createElement("p");
text.innerText = mesprojet.text;

const sectionPortfolio = document.querySelector(".portfolio");
sectionPortfolio.appendChild(image);
sectionPortfolio.appendChild(text);
