"use strict";
const date = new Date();
let day = date.getDate();
// let day = 24;
const caseDay = document.querySelector(`#case${day}`);
const cases = document.querySelectorAll(".case");
const viewAnimation = document.querySelector("#view-animation");
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
  if (date < 10) {
    card.innerHTML = `
    <h3>0${date}</h3>
    <p>par ${name}</>
  `;
  } else {
    card.innerHTML = `
    <h3>${date}</h3>
    <p>par ${name}</>`;
  }
}
for (let i = 0; i < 24; i++) {
  for (let j = 1; j <= 24; j++) {
    const caseDay = document.querySelector(`#case${j}`);
    const cardDay = caseDay.querySelector(".card");
    if (j < day) {
      if (j == 18) continue;
      // let p = 3 * i + 1;
      // let y = 3 * i + 2;
      // let b = 3 * i;
      if (j == 3 * i + 1) {
        cardDay.style.backgroundColor = "#4b2142";
      } else if (j == 3 * i + 2) {
        cardDay.style.backgroundColor = "#e8c547";
      } else if (j == 3 * i) {
        cardDay.style.backgroundColor = "#285460";
      }
    } else {
      cardDay.style.backgroundColor = "#eb6d13";
    }
  }
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
if (date1 < day) {
  caseDone(thefront, "Guillaume", 1);
}

// CASE 2 - Animation Merlin ----------------------------------------------------------------
const date2 = 2;
let toggleCase2 = 0;
const case2 = document.querySelector("#case2");
if (date2 <= day) {
  case2.addEventListener("click", merlinAnimation);
}
const merlinCard = `
        <div class="merlin">
          <h1>Pour la fin d'année, passer les fêtes en famille !</h1>
          <div class="games_containers_merlin">
            <img class="img_merlin" src="/assets/img/merlin1.png" alt="" />
            <img class="img_merlin" src="/assets/img/merlin2.png" alt="" />
            <img class="img_merlin" src="/assets/img/merlin3.png" alt="" />
          </div>
          <h2>Je parle de la vraie.. (non)</h2>
        </div>
`;

function merlinAnimation() {
  if (toggleCase2 == 0) {
    showDefault(case2);
    case2.firstElementChild.style.opacity = 0;
    setTimeout(() => {
      case2.style.backgroundColor = "black";
      case2.innerHTML = merlinCard;
      case2.firstElementChild.style.opacity = 1;
      case2.firstElementChild.style.transition = "opacity 0.5s";
    }, 2000);
    toggleCase2 = 1;
  } else {
    case2.style.backgroundColor = "#e8c547";
    case2.innerHTML = `<div class="card lift card-done">
    <h3>02</h3>
    <p>par Merlin</p>  
    </div>`;
    toggleCase2 = 0;
    const card2 = case2.querySelector("#case2 .card");
    card2.style.backgroundColor = "#e8c547";
  }
}
if (date2 < day) {
  const card2 = case2.querySelector("#case2 .card");
  caseDone(card2, "Merlin", 2);
  card2.style.backgroundColor = "#e8c547";
  card2.classList.add("lift");
}

// CASE 9 - Animation --------------------------------------------------------------------
const case9 = document.getElementById("case9");
const card9 = case9.querySelector(".card");
let toggleCard9 = 0;
// Quand la date est passée
if (day > 9) {
  card9.classList.add("card-done");
  card9.innerHTML = `
    <h3>09</h3>
    <p>par Hugo</>`;
}
// Ouverture de la carte et découverte de l'animation
// Ajout d'un id sur la card pour venir annuler et remplacer l'effet de la classe .lift
if (day >= 9) {
  case9.addEventListener("click", () => {
    if (toggleCard9 == 0) {
      card9.setAttribute("id", "card9");
      toggleCard9 = 1;
    } else {
      card9.removeAttribute("id");
      toggleCard9 = 0;
    }
  });
}
