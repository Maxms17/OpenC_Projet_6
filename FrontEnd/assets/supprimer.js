
document.addEventListener("DOMContentLoaded", function(event) {

  const suppModal = document.querySelector(".buttonSupp");

  suppModal.addEventListener("click", function () {
    const article = this.closest('.article'); // Récupère l'élément parent 'article'
    const id = article.dataset.id; // Récupère l'ID stocké dans l'attribut 'data-id'

    fetch(`http://localhost:5678/api/works/${id}`, {
      method: 'DELETE',
      headers: { "Content-Type": "application/json", "Origin": "http://localhost:5500/" },
    })
    .then(response => {
      if(response.status === 200){
        document.getElementById("error-message").innerHTML = "Suppression enregistrée.";
        article.remove(); // Supprime l'élément HTML correspondant
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



