
async function getHetR() {
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

getHetR()