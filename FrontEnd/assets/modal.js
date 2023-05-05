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

const ajoutModal = document.querySelector("#ajoutModal");
ajoutModal.addEventListener("click", function () {
  console.log("ajouter modal");
});

const suppModal = document.querySelector("#suppModal");
suppModal.addEventListener("click", function () {
  console.log("supprimer modal");
});