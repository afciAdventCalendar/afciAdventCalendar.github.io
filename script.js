"use strict";

let animations = [
  { day: 1, name: merlinAnimation() },
  { day: 2, name: merlinAnimation2() },
  { day: 3, name: romainAnimation() },
  { day: 4, name: romainAnimation2() },
  { day: 5, name: defaultAnimation() },
  { day: 6, name: defaultAnimation() },
  { day: 7, name: defaultAnimation() },
  { day: 8, name: defaultAnimation() },
  { day: 9, name: defaultAnimation() },
  { day: 10, name: laurenceAnimation() },
  { day: 11, name: defaultAnimation() },
  { day: 12, name: defaultAnimation() },
  { day: 13, name: defaultAnimation() },
  { day: 14, name: defaultAnimation() },
  { day: 15, name: defaultAnimation() },
  { day: 16, name: defaultAnimation() },
  { day: 17, name: defaultAnimation() },
  { day: 18, name: defaultAnimation() },
  { day: 19, name: defaultAnimation() },
  { day: 20, name: defaultAnimation() },
  { day: 21, name: defaultAnimation() },
  { day: 22, name: defaultAnimation() },
  { day: 23, name: defaultAnimation() },
  { day: 24, name: defaultAnimation() },
];

const cases = document.querySelectorAll(".case");

// fonction qui donne accès à la case du jour et aux jours précédents
// et active les fonctions internes personnalisées
function update() {
  cases.forEach((divCase) => {
    // pour chaque élément l'id est sous la forme case12 pour la case 12 par exemple
    // .slice(4) permet de retirer le mot case et de récupérer uniquement le num de la case
    let id = divCase.getAttribute("id").slice(4);
    if (id <= day) {
      // cette partie ne fonctionne pas !!!
      let i = parseInt(day) - 1;
      divCase.addEventListener("click", () => {
        animations[i].name();
      });
      const card = divCase.querySelector(".card");
      card.classList.add("lift");
    }
  });
}
update();

// Animation par défaut
function defaultAnimation() {
  showDefault();
}

// Fonction d'apparition par défaut pour ceux qui ne l'on pas prévue
function showDefault(divCase) {
  if (divCase) {
    const card = divCase.querySelector(".card");
    card.classList.add("ld-vanish");
  }
}
// Case 1 - Animation Merlin
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
  const case1 = document.querySelector("#case1");
  showDefault(case1);
  setTimeout(() => {
    case1.innerHTML = merlinCard;
  }, 2000);
}

// Case 2 - Animation Merlin 2
function merlinAnimation2() {
  console.log("Une animation...");
}
// Case 3 - Animation Romain
function romainAnimation() {
  console.log("Une animation...");
}
// Case 4 - Animation Romain 2
function romainAnimation2() {
  console.log("Une animation...");
}
// Case 10 - Animation Laurence

function laurenceAnimation() {
  const case10 = document.querySelector("#case10");
  showDefault(case10);
}

// Animation Romain
//const case3 = document.querySelector("#case3");

// case3.addEventListener("click", romainAnimation);
// function animationRomain() {
//   countdown();
//   snow();
// }
