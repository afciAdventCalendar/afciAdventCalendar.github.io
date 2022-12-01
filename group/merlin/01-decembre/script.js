"use strict";

const case1 = document.querySelector("#case1");
case1.addEventListener("click", merlinAnimation);
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
  showDefault(case1);
  case1.innerHTML = merlinCard;
  case1.firstElementChild.style.opacity = 0;
  setTimeout(() => {
    console.log(case1.firstElementChild);
    case1.firstElementChild.style.opacity = 1;
    case1.firstElementChild.style.transition = "opacity 0.5s";
  }, 500);
  case1.style.backgroundColor = "black";
}

function showDefault(divCase) {
  if (divCase) {
    const card = divCase.querySelector(".card");
    card.classList.add("ld-vanish");
  }
}
//  chemin retirer /group/merlin
