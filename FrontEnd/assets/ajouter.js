
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

  const title = document.querySelector('#titre').value
  const images = document.querySelector('#image').files[0]
  const category = document.querySelector('#categorie').value

  const formdata = new FormData();

  formdata.append("title", title)
  formdata.append("images", images)
  formdata.append("category", category)

  const token = localStorage.getItem('token');
  
  fetch('http://localhost:5678/api/works', {
    method: 'POST',
    body: formdata,
    headers: {
      "Authentication": `Bearer ${token}`
    }
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
  .then(data => {
    console.log(data); // affiche la réponse JSON de la requête POST
  })
  .catch(error => {
    console.error(error);
  });

});