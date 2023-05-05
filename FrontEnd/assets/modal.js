const modal = document.querySelector(".modal");
const openModal = document.querySelector("#openModal");
const close = document.querySelector(".close");

async function getEdition() {
  const reponse = await fetch("http://localhost:5678/api/works");
  const works = await reponse.json();

  works.map((item) => {
      console.log(item)
      const sectionPortfolio = document.querySelector(".galleryModal");

      const carte = document.createElement("article");

      const image = document.createElement("img");
      image.src = item.imageUrl;

      const text = document.createElement("p");
      text.innerText = "éditer" ;

      carte.classList.add("article")
      carte.dataset.cat = item.category.name
      sectionPortfolio.appendChild(carte);

      carte.appendChild(image);
      carte.appendChild(text);
  })

}

getEdition();

function handlefilter(cat) {
  const articles = document.querySelectorAll('.article');
  
  articles.forEach(item => {
      if (cat === "Visible") {
          articles.forEach(item => {
              item.style.display = "block"
          })
      }
      else if (nonVisible === cat) {
          item.style.display = "none"
      } else {
          item.style.display = "block"
      }
  })
  
}

openModal.addEventListener("click", function() {
  modal.style.display = "block";
  handlefilter("Visible")
});

close.addEventListener("click", function() {
  modal.style.display = "none";
  handlefilter("nonVisible")
});

window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

const ajoutModal = document.querySelector("#ajoutModal");
ajoutModal.addEventListener("click", function () {
  console.log("ajouter modal");
});

const suppModal = document.querySelector("#suppModal");
suppModal.addEventListener("click", function () {
  console.log("supprimer modal");
});