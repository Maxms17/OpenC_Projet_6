const image_visible = document.querySelector("#image_visible");
const image_non_visible = document.querySelector(".formulaireSaisieImg");

const ajoutModal = document.getElementById("ajoutModal");

ajoutModal.addEventListener("click", function () {

  const modal_deux = document.querySelector(".modal_deux");
  modal_deux.style.display = "block";
  modal.style.display = "none";

  const close_deux = document.querySelector(".close_deux");

  close_deux.addEventListener("click", function() {
    modal_deux.style.display = "none";
    modal.style.display = "none";
    
    image_visible.style.display = "none";
    image_non_visible.style.display = "flex";
  });
  
  const retour = document.querySelector(".retour");

  retour.addEventListener("click", function() {
    modal_deux.style.display = "none";
    modal.style.display = "block";

    image_visible.style.display = "none";
    image_non_visible.style.display = "flex";
  });

  window.addEventListener("click", function(event) {
    if (event.target == modal_deux) {
      modal_deux.style.display = "none";

      image_visible.style.display = "none";
      image_non_visible.style.display = "flex";
    }
  });

});

const form = document.querySelector('.modal-content_deux');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const title = document.querySelector('#titre').value
  const image = document.querySelector('#image').files[0]
  const category = document.querySelector('#categorie').value

  const formdata = new FormData();

  formdata.append("title", title)
  formdata.append("image", image)
  formdata.append("category", category)

  const token = localStorage.getItem('token');

  if(image.type === 'image/png' || image.type === 'image/jpeg'){
    fetch('http://localhost:5678/api/works', {
      method: 'POST',
      body: formdata,
      headers: { "Authorization": `Bearer ${token}`}
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
  }
  else{
    document.getElementById("error-message").innerHTML = "Veuillez saisir une image de type png ou jpeg.";
  }

});

function afficheImage(){
  let file = document.querySelector('input[type=file]').files;
  let resultat = document.querySelector('#resultat');

  if(file.length > 0){
    let fileReader = new FileReader();
      fileReader.onload = function(event){
        document.getElementById('resultat').setAttribute('src',event.target.result);
      };
      fileReader.readAsDataURL(file[0]);
      
      image_visible.style.display = "flex";
      image_non_visible.style.display = "none";
  }

}