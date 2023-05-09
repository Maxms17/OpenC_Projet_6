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

      const supp = document.createElement("i");
      supp.classList.add("fa-sharp", "fa-solid", "fa-trash-can");
      //<i class="fa-solid fa-arrows-up-down-left-right"></i>
      supp.style.width = '17px';
      supp.style.height = '17px';
      supp.style.backgroundColor = '#000000';
      supp.style.borderRadius = '2px';
      
      const text = document.createElement("p");
      text.innerText = "éditer" ;

      carte.classList.add("article")
      carte.dataset.cat = item.category.name;
      sectionPortfolio.appendChild(carte);

      carte.appendChild(image);
      carte.appendChild(text);
  })

}

getEdition();

function visibilityEdition(cat) {
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
  visibilityEdition("Visible")
});

close.addEventListener("click", function() {
  modal.style.display = "none";
  visibilityEdition("nonVisible")
});

window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

const suppModal = document.querySelector("#suppModal");
suppModal.addEventListener("click", function () {
  console.log("supprimer modal");
});