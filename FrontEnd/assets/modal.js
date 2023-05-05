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

openModal.addEventListener("click", function() {
  modal.style.display = "block";
  getEdition();
});

close.addEventListener("click", function() {
  modal.style.display = "none";
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