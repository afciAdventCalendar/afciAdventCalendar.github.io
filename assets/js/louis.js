"use strict";
// case 10 et 20 dec
const case10 = document.querySelector("#case10");
const img = document.querySelector("#case10 img");
const p = document.querySelector("#case10 p");
const card10 = document.querySelector("#case10 .card");
const close = document.querySelector("#case10 h4");

card10.addEventListener("click", animCard10);
//curseur anim

function animCard10() {
  card10.classList.remove("card", "lift");
  img.style.animationName = "bclignote";
  p.style.animationName = "clignote";
  close.style.animationName = "clignote";
  const scale = [
    {
      transform: "scale(0.1)",
      borderRadius: "50px",
    },
    {
      transform: "scale(1)",
      borderRadius: "0px",
    },
  ];
  const options = {
    duration: 1000,
    fill: "forwards",
  };
  img.animate(scale, options);
  document.body.addEventListener("mousemove", guirlande);
}

function guirlande(e) {
  const xPosition = e.pageX;
  const yPosition = e.pageY;

  const spanElement = document.createElement("span");
  spanElement.classList.add("guirlande");
  spanElement.style.left = xPosition + "px";
  spanElement.style.top = yPosition + "px";

  const size = Math.random() * 100;
  spanElement.style.width = size + "px";
  spanElement.style.height = size + "px";
  document.body.prepend(spanElement);
  setTimeout(() => {
    spanElement.remove();
  }, 2000);
}

close.addEventListener("click", () => {
  card10.classList.add("card", "lift");
  document.body.removeEventListener("mousemove", guirlande);
  // mise à jour du contenu de la face
  caseDone(card10, "Louis", 10);
});
let toggleCard10 = 0;
// Quand la date est passée
if (day > 10) {
  card10.classList.add("card-done");
  card10.innerHTML = `
    <h3>10</h3>
    <p>par Louis</>`;
}
// Ouverture de la carte et découverte de l'animation
// Ajout d'un id sur la card pour venir annuler et remplacer l'effet de la classe .lift
if (day >= 10) {
  case10.addEventListener("click", () => {
    if (toggleCard10 == 0) {
      card10.setAttribute("id", "card10");
      toggleCard9 = 1;
    } else {
      card10.removeAttribute("id");
      toggleCard10 = 0;
    }
  });
}
// carte 20 ---------------------------------------------------------
const card20 = document.querySelector("#case20 .card");
const case20 = document.querySelector("#case20");
const lefteye = document.querySelector(".smiley .left-pup");
const leye = document.querySelector(".smiley .left-eye");
const righteye = document.querySelector(".smiley .right-pup");
const reye = document.querySelector(".smiley .right-eye");
const s = document.querySelector("#case20 span");
const mouth = document.querySelector(".mouth");
case20.addEventListener("click", eyes);
let open20 = false;

// Quand la date est passée
function updateCard20() {
  if (day > 20 || open20) {
    card20.classList.add("card-done");
    card20.innerHTML = `
    <h3>20</h3>
    <p>par Louis</>`;
    card20.style.backgroundColor = "#e8c547";
  }
}
updateCard20();

function eyes() {
  open20 = true;
  updateCard20();
  card20.classList.toggle("card");
  card20.classList.toggle("lift");
  window.addEventListener("mousemove", function (event) {
    let x = (event.clientX / (window.innerWidth * 2)) * 100;
    let y = (event.clientY / (window.innerHeight * 2)) * 100;

    lefteye.style.left = `${x}%`;
    lefteye.style.top = `${y}%`;

    righteye.style.left = `${x}%`;
    righteye.style.top = `${y}%`;
  });
  mouth.style.animation = "bouche 2s infinite alternate";
  lefteye.style.animation = "scale 2s infinite alternate";
  leye.style.animation = "border 2s infinite alternate";
  righteye.style.animation = "scale 2s infinite alternate";
  reye.style.animation = "border 2s infinite alternate";
}
