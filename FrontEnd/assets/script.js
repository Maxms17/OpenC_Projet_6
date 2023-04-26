const boutonTrierTous = document.querySelector(".button_trier_Tous");
const boutonTrierObj = document.querySelector(".button_trier_Obj");
const boutonTrierApp = document.querySelector(".button_trier_App");
const boutonTrierHetR = document.querySelector(".button_trier_HetR");


async function getTous() {
    const reponse = await fetch("http://localhost:5678/api/works");
    const works = await reponse.json();

    works.map((item) => {
        console.log(item)
        const sectionPortfolio = document.querySelector(".gallery");

        const carte = document.createElement("article");

        const image = document.createElement("img");
        image.src = item.imageUrl;

        const text = document.createElement("p");
        text.innerText = item.title;

        carte.classList.add("article")
        carte.dataset.cat = item.category.name
        sectionPortfolio.appendChild(carte);

        carte.appendChild(image);
        carte.appendChild(text);
    })

}

getTous();


function handlefilter(cat) {
    const articles = document.querySelectorAll('.article');
    
    articles.forEach(item => {
        if (cat === "Tous") {
            articles.forEach(item => {
                item.style.display = "block"
            })
        }
        else if (item.dataset.cat !== cat) {
            item.style.display = "none"
        } else {
            item.style.display = "block"
        }
    })
    
}


boutonTrierTous.addEventListener("click", function () {
    handlefilter("Tous")
});

boutonTrierObj.addEventListener("click", function () {
    handlefilter("Objets")
});

boutonTrierApp.addEventListener("click", function () {
    handlefilter("Appartements")
});

boutonTrierHetR.addEventListener("click", function () {
    handlefilter("Hotels & restaurants")
});