// CASE 5 - Animation Merlin -----------------------------------------------------------
date = new Date();
day = date.getDate();
const case5 = document.querySelector("#case5");
const card5 = case5.querySelector(".card");
const card5HTML = `
            <div class="close">
              <div class="cross"></div>
              <div class="cross"></div>
            </div>
            <div class="cards_merlin">
              <div class="title_merlin">
                <h1>Voyager avec <br />T̶r̶i̶v̶a̶g̶o̶ ➡ Ciao!</h1>
              </div>
              <div class="card_merlin_1">
                <img src="/assets/img/tomahawk.png" alt="" />
                <div class="merlin-subtitle">Une Hache ?</div>
              </div>
              <div class="card_merlin_2">
                <img src="/assets/img/shining_hotel.jpg" alt="" />
                <div class="merlin-subtitle">Un Hotel ?</div>
              </div>
              <div class="card_merlin_3">
                <img src="/assets/img/johnny.jpg" alt="" />
                <div class="merlin-subtitle">Un Johnny !</div>
              </div>
            </div>`;
let toggleCard5 = 0;
// Quand la date est passée
if (day > 5) {
  card5.classList.add("card4-done");
  card5.innerHTML = `
    <h3>4</h3>
    <p>par Merlin</>`;
  card5.style.backgroundColor = "#e8c547";
}
// Ouverture de la carte et découverte de l'animation
// Ajout d'un id sur la card pour venir annuler et remplacer l'effet de la classe .lift
case5.addEventListener("click", () => {
  if (toggleCard5 == 0) {
    card5.setAttribute("id", "card5");
    toggleCard5 = 1;
  } else {
    card5.removeAttribute("id");
    toggleCard5 = 0;
  }
});
// Si l'utilisateur n'est pas sur un smartphone
// Mise en plein écran via la div viewAnimation
if (window.innerWidth > 900) {
  const card5Container = case5.querySelector(".card-container");
  card5Container.addEventListener("click", () => {
    viewAnimation.innerHTML = card5HTML;
    viewAnimation.style.display = "block";
    const closer = document.querySelector(".close");
    closer.addEventListener("click", () => {
      viewAnimation.innerHTML = "";
      viewAnimation.style.display = "none";
    });
  });
}
