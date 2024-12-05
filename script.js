// Fonction qui change l'image au clic
function toggleImage() {
    var image = document.getElementById("image");
  
    // Si l'image est celle de Goku, on la remplace par l'océan
    if (image.src.includes("goku.jpg")) {
      image.src = "assets/ocean.jpg";
    } else {
      image.src = "assets/goku.jpg";
    }
  }
  