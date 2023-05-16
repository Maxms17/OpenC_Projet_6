const modal = document.querySelector(".modal");
const openModal = document.querySelector("#openModal");
const close = document.querySelector(".close");

async function getEdition() {
  const response = await fetch("http://localhost:5678/api/works");
  const works = await response.json();

  works.map((item) => {
      //console.log(item)
      const sectionPortfolio = document.querySelector(".galleryModal");

      const carte = document.createElement("article");

      const imageContainer = document.createElement("div");
      imageContainer.style.position = 'relative';

      const image = document.createElement("img");
      image.src = item.imageUrl;

      const btnSupp = document.createElement("button");
      btnSupp.classList.add("buttonSupp");

      btnSupp.dataset.id = item.id;
      //console.log(btnSupp.dataset.id);
    
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

  const buttonSupp = document.querySelectorAll('.buttonSupp');

  buttonSupp.forEach(button => {
    button.addEventListener('click', () => {
      const id = button.dataset.id;
      const token = localStorage.getItem('token');

      //console.log(id);
      //console.log(token);
      //console.log('http://localhost:5678/api/works/'+id)

      fetch(`http://localhost:5678/api/works/`+id, {
        method: 'DELETE',
        headers: { "Content-Type": "application/json", "Origin": "http://localhost:5678/", "Authentication": `Bearer ${token}`}
      })
      .then(response => {
        if(response.status === 200){
          document.getElementById("error-message").innerHTML = "Suppression enregistrée.";
          button.remove(); 
        }
        else if(response.status === 401){
          document.getElementById("error-message").innerHTML = "Vous n'êtes pas autorisé.";
        }
        else{
          document.getElementById("error-message").innerHTML = "Une erreur s'est produite lors de la connexion. Veuillez réessayer plus tard.";
        }
      })
      .catch(error => {
        console.error(error);
      });
    });
  });
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
