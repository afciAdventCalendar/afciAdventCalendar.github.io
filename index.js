"use strict";
const date = new Date();
let day = date.getDate();
const caseDay = document.querySelector(`#case${day}`);
const cases = document.querySelectorAll(".case");

// Au chargement de la page on se place au niveau de la case du jour
window.addEventListener("load", goTo);
function goTo() {
  caseDay.classList.add("dateDay");
  setTimeout(() => {
    caseDay.scrollIntoView("top");
  }, 1000);
}

// fonction qui donne accès à la case du jour et aux jours précédents
// et active les fonctions internes personnalisées
function update() {
  cases.forEach((elt) => {
    // pour chaque élément l'id est sous la forme case12 pour la case 12 par exemple
    // .slice(4) permet de retirer le mot case et de récupérer uniquement le num de la case
    let id = elt.getAttribute("id").slice(4);
    if (id <= day) {
      const card = elt.querySelector(".card");
      card.classList.add("lift");
    }
  });
}
update();

// Ouverture de la case par défaut pour test
function showDefault(divCase) {
  if (divCase) {
    const card = divCase.querySelector(".card");
    card.classList.add("ld-vanish");
  }
}

// Changement de l'apparence de la case quand celle-ci a déjà été ouverte
function caseDone(card, name, date) {
  card.classList.add("done");
  card.innerHTML = `
    <h3>${date}</h3>
    <p>par ${name}</>
  `;
}

//-------------------------------------------------------------------------------------------
//------------------ LES ANIMATIONS ---------------------------------------------------------
//-------------------------------------------------------------------------------------------

// CASE 1 - Animation Guillaume ----------------------------------------------------------
const card1 = document.querySelector("#case1 .thecard");
const thefront = card1.querySelector(".g-thefront");
const date1 = 1;
let toggle = 0;
function guillaumeAnimation(e) {
  e.preventDefault();
  card1.classList.toggle("rotate");
  if (toggle == 0) {
    card1.style.transformOrigin = "center";
    toggle = 1;
  } else {
    card1.style.transformOrigin = "top left";
    toggle = 0;
  }
  setTimeout(() => {
    caseDone(thefront, "Guillaume", 1);
  }, 1000);
}
if (date1 <= day) {
  card1.addEventListener("click", guillaumeAnimation);
}

// CASE 2 - Animation Jody ------------------------------------------------------------------
const card2 = document.querySelector("#case2 .porte");
card2.addEventListener("click", () => {
  toggleDoor(card2);
});
function toggleDoor(card) {
  card.classList.toggle("ouverture");
}

// CASE 5 - Animation Merlin ----------------------------------------------------------------
const date5 = 5;
const case5 = document.querySelector("#case5");
if (date5 <= day) {
  case5.addEventListener("click", merlinAnimation);
}
const merlinCard = `
        <div class="merlin">
          <h1>Pour la fin d'année, passer les fêtes en famille !</h1>
          <div class="games_containers_merlin">
            <img class="img_merlin" src="/group/merlin/01-decembre/dota-2.png" alt="" />
            <img class="img_merlin" src="/group/merlin/01-decembre/lol.png" alt="" />
            <img class="img_merlin" src="/group/merlin/01-decembre/wow.png" alt="" />
          </div>
          <h2>Je parle de la vraie.. (non)</h2>
        </div>
`;
function merlinAnimation() {
  showDefault(case5);
  setTimeout(() => {
    case5.innerHTML = merlinCard;
  }, 2000);
}

// CASE 10 - Animation Laurence -----------------------------------------------------------

// CASE 15 - Animation --------------------------------------------------------------------
