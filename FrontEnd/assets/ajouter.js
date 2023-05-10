
const ajoutModal = document.querySelector("#ajoutModal");

ajoutModal.addEventListener("click", function () {

  const modal_deux = document.querySelector(".modal_deux");
  modal_deux.style.display = "block";
  //visibilityEdition("Visible");
  modal.style.display = "none";
  //visibilityEdition("nonVisible")

  const close_deux = document.querySelector(".close_deux");

  close_deux.addEventListener("click", function() {
    modal_deux.style.display = "none";
    //visibilityEdition("nonVisible");
    modal.style.display = "block";
    //visibilityEdition("Visible")
  });
  
  const retour = document.querySelector(".retour");

  retour.addEventListener("click", function() {
    modal_deux.style.display = "none";
    //visibilityEdition("nonVisible");
    modal.style.display = "block";
    //visibilityEdition("Visible")
  });

  window.addEventListener("click", function(event) {
    if (event.target == modal_deux) {
      modal_deux.style.display = "none";
    }
  });

});

