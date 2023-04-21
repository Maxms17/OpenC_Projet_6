// Récupération des pièces depuis le fichier JSON

async function getData() {
    const reponse = await fetch("http://localhost:5678/api/works");
    const works = await reponse.json();

    works.map((item) => {
        const image = document.createElement("img");
        image.src = item.imageUrl;
    
        const text = document.createElement("p");
        text.innerText = item.title;
    
        const sectionPortfolio = document.querySelector("#portfolio");
        sectionPortfolio.appendChild(image);
        sectionPortfolio.appendChild(text);
    })

}

getData()