


async function getTous() {
    const reponse = await fetch("http://localhost:5678/api/works");
    const works = await reponse.json();

    works.map((item) => {
        //console.log(item)
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

async function getCategorie() {
    const response = await fetch("http://localhost:5678/api/categories");
    const categories = await response.json();

    /* Ajout option formulaire */
    const formulaire_option = document.querySelector("#categorie");
      
    categories.forEach((item) => {
        const option_trie = document.createElement('option');
        option_trie.value = item.id;
        option_trie.textContent =  item.name;
        
        formulaire_option.appendChild(option_trie);
    });

    /* Ajout Trie bouton */
    const sectionBoutontrie = document.querySelector(".trie");

    const bouton = document.createElement('button');
    bouton.className = 'button button_trier_Tous';
    bouton.innerHTML = '<p> Tous </p>';

    sectionBoutontrie.appendChild(bouton);

    categories.forEach((item) => {
        if (item.id != 0) {
            
            const bouton_boucle = document.createElement('button');
            bouton_boucle.className = 'button button_trier_' + item.id;
            bouton_boucle.innerHTML = '<p>' + item.name + '</p>';

            sectionBoutontrie.appendChild(bouton_boucle);
        }
    });

    /* Bouton trier */
    const boutonTrierTous = document.querySelector(".button_trier_Tous");
    const boutonTrierObj = document.querySelector(".button_trier_1");
    const boutonTrierApp = document.querySelector(".button_trier_2");
    const boutonTrierHetR = document.querySelector(".button_trier_3");

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
}

getCategorie();

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

