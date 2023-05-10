
const ajoutModal = document.querySelector("#ajoutModal");

ajoutModal.addEventListener("click", function () {

  const modal_deux = document.querySelector(".modal_deux");
  modal_deux.style.display = "block";
  modal.style.display = "none";

  /* */
  const form = document.querySelector(".formulaire");

  const input_img = document.createElement('input');
  input_img.type = 'image';
  input_img.name = 'imageUrl';
  form.appendChild(input_img);

  const input_title = document.createElement('input');
  input_title.type = 'text';
  input_title.name = 'title';
  form.appendChild(input_title);
  
  const button = document.createElement('button');
  button.type = 'submit';
  button.textContent = 'Valider';
  button.classList.add("buttonajoutValide");
  form.appendChild(button);
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const ajoutProjet = {
      imageUrl: input_img.value,
      title: input_title.value
    };
    console.log(ajoutProjet);
  });
  /* */

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
