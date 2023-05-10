const modal = document.querySelector(".modal");
const openModal = document.querySelector("#openModal");
const close = document.querySelector(".close");

async function getEdition() {
  const response = await fetch("http://localhost:5678/api/works");
  const works = await response.json();

  works.map((item) => {
      console.log(item)
      const sectionPortfolio = document.querySelector(".galleryModal");

      const carte = document.createElement("article");

      const imageContainer = document.createElement("div");
      imageContainer.style.position = 'relative';

      const image = document.createElement("img");
      image.src = item.imageUrl;

      const btnSupp = document.createElement("button");
      btnSupp.classList.add("buttonSupp");

      const supp = document.createElement("i");
      supp.classList.add("fa-solid", "fa-trash-can");

      const text = document.createElement("p");
      text.innerText = "éditer" ;

      carte.classList.add("article")
      carte.dataset.cat = item.category.name;
      sectionPortfolio.appendChild(carte);

      carte.appendChild(imageContainer);
      imageContainer.appendChild(image);
      imageContainer.appendChild(btnSupp);
      btnSupp.appendChild(supp);
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
