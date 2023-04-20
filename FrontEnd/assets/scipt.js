
const img_projet= document.getElementById("img_projet")
const text_projet= document.getElementById("text_projet")

/* 
categorie 
1 = objet 
2 = appartements
3 = hôtel & restaurants
*/
const projet = [
	{
		"image": "abajour-tahina.png",
        "text": "Abajour Tahina",
        "categorie": "1"
	},
	{
		"image": "appartement-paris-v.png",
        "text": "Appartement Paris V",
        "categorie": "2"
	},
	{
		"image": "restaurant-sushisen-londres.png",
        "text": "Restaurant Sushisen - Londres",
        "categorie": "3"
	},
	{
		"image": "la-balisiere.pn",
        "text": "Villa “La Balisiere” - Port Louis",
        "categorie": "2"
	},
    {
		"image": "structures-thermopolis.png",
        "text": "Structures Thermopolis",
        "categorie": "1"
	},
    {
		"image": "appartement-paris-x.png",
        "text": "Appartement Paris X",
        "categorie": "2"
	},
    {
		"image": "le-coteau-cassis.png",
        "text": "Pavillon “Le coteau” - Cassis",
        "categorie": "2"
	},
    {
		"image": "villa-ferneze.png",
        "text": "Villa Ferneze - Isola d'Elba",
        "categorie": "2"
	},
    {
		"image": "appartement-paris-xviii.png",
        "text": "Appartement Paris XVII",
        "categorie": "2"
	},
    {
		"image": "bar-lullaby-paris.png",
        "text": "Bar “Lullaby” - Paris",
        "categorie": "3"
	},
    {
		"image": "hotel-first-arte-new-delhi.png",
        "text": "Hotel First Arte - New Delhi",
        "categorie": "3"
	},
]

for(i=0;i<11;i++){
    img_projet.src = `./assets/images/${projet[i].image}`
	text_projet.innerHTML = projet[i].text
}