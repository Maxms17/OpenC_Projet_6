const modal = document.querySelector(".modal");
const openModal = document.querySelector("#openModal");
const close = document.querySelector(".close");

openModal.addEventListener("click", function() {
  modal.style.display = "block";
});

close.addEventListener("click", function() {
  modal.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});


/*
function modale(){

}

modale();
function supprimer_modale(){

}

supprimer_modale();
function ajouter_modale(){

}

ajouter_modale();
*/