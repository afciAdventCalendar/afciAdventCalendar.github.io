"use strict";
const case22 = document.querySelector("#case22");
const card22 = case22.querySelector(".card");
const card22HTML = `
        <div class="card-container">
          <div class="card-content">
            <div class="close">
              <div class="cross"></div>
              <div class="cross"></div>
            </div>
            <div class="sliderahcene">
              <div class="slidesahcene">
                <div class="slideahcene">
                  <img src="/assets/img/Pere noel.jpg noel.jpg" alt="" />
                </div>
                <div class="slideahcene">
                  <img src="/assets/img/Pere1.jpg" alt="" />
                </div>
                <div class="slideahcene">
                  <img src="/assets/img/lune.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
  `;
let toggleCard22 = 0;
// Quand la date est passée
if (day > 22) {
  card22Done();
}

// Ouverture de la carte et découverte de l'animation
// Ajout d'un id sur la card pour venir annuler et remplacer l'effet de la classe .lift
case22.addEventListener("click", () => {
  if (toggleCard22 == 0) {
    card22.setAttribute("id", "card22");
    toggleCard22 = 1;
  } else {
    card22.removeAttribute("id");
    toggleCard22 = 0;
    card22Done();
  }
});

// Si l'utilisateur n'est pas sur un smartphone
// Mise en plein écran via la div viewAnimation
if (window.innerWidth > 900) {
  const card22Container = case22.querySelector(".card-container");
  card22Container.addEventListener("click", () => {
    viewAnimation.innerHTML = card22HTML;
    viewAnimation.style.display = "block";
    const closer = document.querySelector(".close");
    closer.addEventListener("click", () => {
      viewAnimation.innerHTML = "";
      viewAnimation.style.display = "none";
      card22Done();
    });
  });
}
function card22Done() {
  card22.classList.add("card-done");
  card22.innerHTML = `
    <h3>22</h3>
    <p>par Hacène</>`;
  card22.style.backgroundColor = "rgb(75,33,66)";
}
