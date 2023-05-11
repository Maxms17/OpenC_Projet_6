
const ajoutModal = document.getElementById("ajoutModal");

ajoutModal.addEventListener("click", function () {

  const modal_deux = document.querySelector(".modal_deux");
  modal_deux.style.display = "block";
  modal.style.display = "none";

  const close_deux = document.querySelector(".close_deux");

  close_deux.addEventListener("click", function() {
    modal_deux.style.display = "none";
    modal.style.display = "none";
  });
  
  const retour = document.querySelector(".retour");

  retour.addEventListener("click", function() {
    modal_deux.style.display = "none";
    modal.style.display = "block";
  });

  window.addEventListener("click", function(event) {
    if (event.target == modal_deux) {
      modal_deux.style.display = "none";
    }
  });

});

const form = document.querySelector('.modal-content_deux');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const formulaireRempli = {
    imageUrl : document.querySelector('#image').value,
    imagefile : document.querySelector('#image').files[0],
    title: document.querySelector('#titre').value,
    categorieId : document.querySelector('#categorie').value,
  };
  
  fetch('http://localhost:5678/api/works', {
    method: 'POST',
    body: JSON.stringify(formulaireRempli),
    headers: { "Content-Type": "application/json", "Origin": "http://localhost:5500/" },
  })
  .then(response => {
    if(response.status === 200){
      document.getElementById("error-message").innerHTML = "L'ajout est enregistré.";
      return response.json();
    }
    else if(response.status === 400){
      document.getElementById("error-message").innerHTML = "Mauvaise saisie.";
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